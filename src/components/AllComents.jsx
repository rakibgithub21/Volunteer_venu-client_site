import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Loading from "./Loading";
const AllComents = () => {


    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios('http://localhost:5000/feedbacks')
            .then(res => {
                setComments(res.data)
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <Loading></Loading>
    }
    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center font-roboto gap-x-3'>
                <h2 className='text-lg font-medium text-rose-500 '>Users All Feedback</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {comments.length} feedbacks
                </span>
            </div>

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
                                                <span>User Email</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>User Name</span>
                                        </th>



                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Feedback Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Feedback
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Ratings
                                        </th>


                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {
                                        comments.map(comment => <tr
                                            key={comment._id}
                                        >
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {comment.email}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {comment.name}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {comment.date}
                                            </td>

                                            <td
                                                title={comment.comment}
                                                className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                                            >
                                                {comment.comment.substring(0, 75)}....
                                            </td>
                                            <td

                                                className='px-4  flex items-center gap-1 py-4 text-sm text-gray-500  whitespace-nowrap'
                                            >
                                                {comment.ratings} <FaStar className="text-amber-600" />
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

export default AllComents;