import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyRequest = () => {
    const { user } = useContext(AuthContext)
    const [myRequest, setMyRequest] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [user])

    console.log(myRequest);
    const getData = async () => {
        axios(`http://localhost:5000/beVolunteer/${user?.email}`)
            .then(res => {
                setMyRequest(res.data)
                setLoading(false)
            })
    }


    const handleCancell = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/beVolunteer/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Data has been deleted.",
                                icon: "success"
                            });
                            getData()
                        }
                    })

            }
        });


    }


    if (loading) {
        return <Loading></Loading>
    }

    console.log(loading);

    return (
        <section className='container px-4 mx-auto pt-12'>
            <Helmet>
                <title>Volunteer Venue || My Volunteer Request</title>
            </Helmet>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-slate-500 '>My Need Volunteer Post</h2>

                <span className='px-3 font-roboto py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {myRequest.length}
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr className="font-roboto">
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
                                                <span>Volunteers Need</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Category
                                        </th>


                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {
                                        myRequest.map(post => <tr
                                            key={post._id}
                                        >
                                            <td className='px-4 font-raleway py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {post.title}
                                            </td>

                                            <td className='px-4 font-roboto py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {new Date(post.deadline).toLocaleDateString()}
                                            </td>

                                            <td className='px-4 font-raleway py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {post.volunteerNeed}
                                            </td>
                                            <td className='px-4 py-4 font-roboto text-sm whitespace-nowrap'>
                                                <div className='flex items-center gap-x-2'>
                                                    <p
                                                        className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs'
                                                    >
                                                        {post.category}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                <div className='flex items-center gap-x-6'>
                                                    <button onClick={() => handleCancell(post._id)} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                        <FaXmark className="text-2xl border hover:rounded-full hover:border-red-400 duration-200 transition-all" />
                                                    </button>


                                                </div>
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

export default MyRequest;