/* eslint-disable react/prop-types */

import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";


const Volunteer = ({ volunteer }) => {
    console.log(volunteer);
    return (
        <div className="w-full font-roboto overflow-hidden  bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className=" w-full h-56" src={volunteer.thumbnail} alt="avatar" />

            <div className="bg-gray-900">
                <h1 className="mx-3 px-2 pt-2 font-raleway text-lg font-semibold text-white">{volunteer?.title}</h1>
                <div className="flex items-center px-2 py-2 ">
                    <MdOutlineCategory className='text-xl text-rose-600' />
                    <h1 className="mx-3 font-raleway text-lg font-semibold text-white">{volunteer?.category}</h1>
                </div>
                
            </div>
            

            <div className="px-6 py-4 bg-slate-300">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{volunteer?.postTitle}</h1>

                <div className='flex justify-between'>
                    <p className="py-2 text-gray-700  dark:text-gray-400">Deadline: {new Date(volunteer?.deadline).toLocaleDateString()}</p>
                    <Link to={`/volunteer-details/${volunteer._id}`}><button className="px-2 py-1 text-xs font-semibold  text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</button></Link>
                </div>





            </div>
        </div>
    );
};

export default Volunteer;