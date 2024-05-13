import axios from "axios";
import { useEffect, useState } from "react";
import Volunteer from "./Volunteer";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const VolunteerNeedsSection = () => {
    const [loading, setLoading] = useState(true)
    
    const[volunteerDatas,setVolunteerDatas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/volunteer')
            .then(res => {
                setVolunteerDatas(res.data)
                setLoading(false)
        })
    }, [])
    if (loading) {
        return<Loading></Loading>
    }
    return (
        <div className="mt-24">
            <div className="text-center font-raleway  px-5 lg:px-0 lg:w-2/3 mx-auto">
                <h3 className="text-2xl md:text-4xl font-medium font-roboto mb-5">Volunteer Needs Now</h3>
                <p>Dive into our Volunteer Needs Now section to discover vital opportunities waiting for your support. With upcoming deadlines looming, these six cards feature critical volunteer posts where your involvement can make a tangible impact. Whether it is aiding local communities, supporting environmental initiatives, or championing social causes, find your perfect match and be the change today!</p>
           </div>
            <div className="grid my-10 px-8 md:px-0 container mx-auto grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 lg:grid-cols-3">
                {
                    volunteerDatas.map(volunteer => <Volunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Volunteer>)
                }
            </div>
            <div className='text-center '>
                <Link to={'/need-volunteer'}><button  className=" mt-10 rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">See All </span>
                </button></Link>
            </div>
        </div>
    );
};

export default VolunteerNeedsSection;