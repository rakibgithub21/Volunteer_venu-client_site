import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import { AuthContext } from "../providers/AuthProvider";

const DetailsValunteer = () => {
    // const data = useLoaderData()

    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const { _id, postBy, volunteerNeed, title, category, thumbnail, deadline, description, location } = data;


    useEffect(() => {

        axios.get(`https://b9-a11-serversite.vercel.app/all/${id}?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setData(res.data)
                setLoading(false)
            })

    }, [id, user?.email])



    if (loading) {
        return <Loading></Loading>
    }

    // console.log(data);
    return (
        <div className="max-w-5xl mx-auto overflow-hidden font-raleway bg-white rounded-lg shadow-md mt-5">
            <img className=" w-full md:h-[500px]" src={thumbnail} alt="Article" />

            <div className="p-6">
                <div className="space-y-1 ">
                    <p className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">{category}</p>
                    <p className="text-xl font-medium  dark:text-blue-400">{title}</p>
                    <p>Location: {location}</p>
                    <p>Volunteer Need: {volunteerNeed}</p>
                    <p>{new Date(deadline).toLocaleDateString()}</p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className="flex justify-between items-center">

                    <div className="mt-5" >
                        <Link to={`/be-volunteer/${_id}`}>
                            <button className="btn btn-outline btn-success">Be A Volunteer</button>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <div className="flex gap-5 items-center">
                            <div>
                                <img className="object-cover w-14 h-14 rounded-full" src={postBy?.photo} alt="Avatar" />
                            </div>
                            <div>
                                <p>{postBy?.name}</p>
                                <p>{postBy.email}</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default DetailsValunteer;