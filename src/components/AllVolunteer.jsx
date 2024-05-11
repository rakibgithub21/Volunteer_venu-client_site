/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllVolunteer = ({ volunteer }) => {
    const { _id,category, description, thumbnail, deadline, title } = volunteer;
    return (
        // <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        //     <img className="object-cover w-full h-64" src={thumbnail} alt="Article"/>

        //         <div className="p-6">
        //             <div>
        //             <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
        //             <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{title }</p>
        //             <p title={description} className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description.substring(0,150)}...</p>
        //             </div>

        //             <div className="mt-4">
        //                 <div className="flex items-center">
        //                     <div className="flex items-center">
        //                         <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
        //                             <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200"  role="link">Jone Doe</a>
        //                     </div>
        //                     <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
        //                 </div>
        //             </div>
        //         </div>
        // </div>
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