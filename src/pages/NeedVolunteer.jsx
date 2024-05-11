import axios from "axios";
import { useEffect, useState } from "react";
import AllVolunteer from "../components/AllVolunteer";
import Empty from "../components/Empty";
import Loading from "../components/Loading";

const NeedVolunteer = () => {
    const [allVolunteer, setAllVolunteer] = useState([])
   
    const [search, setSearch] = useState('')
    const[loading,setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/all-volunteer?search=${search}`);
                setAllVolunteer(response.data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [search]);
    if (loading) {
        return<Loading></Loading>
    }

    if (allVolunteer.length === 0) {
        return <Empty></Empty>
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const text = e.target.search.value;
        setSearch(text)
    }
    console.log(search);
    return (
        <div>
            <div className="text-center mt-5">
                <form onSubmit={handleSearch} className="join">
                    <input name="search" className="input input-bordered join-item" placeholder="Search" />
                    <button className="btn join-item rounded-r-full">Search</button>
                </form>
            </div>
            <div className="grid px-4 md:px-0 my-14 container gap-x-16 gap-y-8 mx-auto grid-cols-1 md:grid-cols-3">
                {
                    allVolunteer.map(volunteer => <AllVolunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></AllVolunteer>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;