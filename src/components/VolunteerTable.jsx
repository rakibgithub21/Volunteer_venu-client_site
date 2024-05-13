/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VolunteerTable = ({ allVolunteer, layout }) => {
    // console.log(allVolunteer);
    return (
        <section className={`${layout&&'hidden'} container px-4 mx-auto pt-12`}>
            {/* <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    05 Jobs
                </span>
            </div> */}

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Title</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Deadline</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Volunteer Need</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Description
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {
                                        allVolunteer.map(volunteer => <tr
                                        key={volunteer._id}
                                        >
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {volunteer.title}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {new Date(volunteer.deadline).toLocaleDateString()}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {volunteer.volunteerNeed
}
                                            </td>
                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <div className='flex items-center gap-x-2'>
                                                    <p
                                                        className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs'
                                                    >
                                                        {volunteer.category}
                                                    </p>
                                                </div>
                                            </td>
                                            <td
                                                title={volunteer.description}
                                                className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                                            >
                                                {volunteer.description.substring(0,45)}...
                                            </td>
                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <Link to={`/volunteer-details/${volunteer._id}`}><FaEye className="text-lg transition-all duration-300 hover:text-rose-500" /></Link>
                                            </td>
                                        </tr>)
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerTable;