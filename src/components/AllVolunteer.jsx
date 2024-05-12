/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllVolunteer = ({ volunteer }) => {
    const { _id,category, description, thumbnail, deadline, title } = volunteer;
    return (
        <div className="w-full font-raleway overflow-hidden bg-white rounded-lg shadow-lg ">
            <img className=" w-full h-56" src={thumbnail} alt="avatar" />

            <div className="flex items-center px-6 py-3 bg-gray-900">
               

                <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>

                <p title={description} className="py-2 text-gray-700 dark:text-gray-400">{description.substring(0, 100)}...</p>

                <div className="flex justify-between mt-4 text-gray-700 ">
                    <h1 className="px-2 font-raleway font-roboto">Deadline: {new Date(deadline).toLocaleDateString()}</h1>
                    <Link to={`/volunteer-details/${_id}`}><button className="btn btn-outline btn-accent">View Details</button></Link>
                </div>

            </div>
        </div>

    );
};

export default AllVolunteer;