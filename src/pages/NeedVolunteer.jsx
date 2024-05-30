import axios from "axios";
import { useEffect, useState } from "react";
import AllVolunteer from "../components/AllVolunteer";
import Empty from "../components/Empty";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import VolunteerTable from "../components/VolunteerTable";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const NeedVolunteer = () => {
    const [allVolunteer, setAllVolunteer] = useState([])

    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [layout, setLayout] = useState(true);

    // console.log(layout);

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
        return <Loading></Loading>
    }

    if (allVolunteer.length === 0) {
        return <Empty></Empty>
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const text = e.target.search.value;
        setSearch(text)
    }
    // console.log(search);
    return (
        <div>
            <Helmet>
                <title>Volunteer Venue || Need Volunteer</title>

            </Helmet>
            <div className="text-center mt-5 flex justify-center items-center gap-5">
                <form onSubmit={handleSearch} className="join">
                    <input name="search" className="input input-bordered join-item" placeholder="Search" />
                    <button className="btn join-item rounded-r-full">Search</button>
                </form>

                <button onClick={() => setLayout(true)}>
                    <BsGrid3X3GapFill className="text-2xl" />
                </button>

                <button onClick={() => setLayout(false)}>
                    <GiHamburgerMenu className="text-2xl" />
                </button>


            </div>
            <div className={`${!layout && 'hidden'} grid px-4 md:px-0 my-14 container gap-x-16 gap-y-8 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
                {
                    allVolunteer.map(volunteer => <AllVolunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                        layout={layout}
                    ></AllVolunteer>)
                }
            </div>

            <div>
                <VolunteerTable
                    allVolunteer={allVolunteer}
                    layout={layout}
                ></VolunteerTable>
            </div>
        </div>
    );
};

export default NeedVolunteer;