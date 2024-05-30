import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import updateBg from '../../assets/volunteering-background.webp';
import { Helmet } from "react-helmet-async";

const Update = () => {

    const { user } = useContext(AuthContext)

    const Posts = useLoaderData()

    // const { thumbnail, title, description, deadline, category, location, volunteerNeed, postBy } =useLoaderData()

    const [deadline, setStartDate] = useState(new Date(Posts.deadline) || new Date());

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteerNeed = parseInt(form.volunteerNeed.value);
        const organizerName = user?.displayName;
        const organizerEmail = user?.email;
        const organizerPhoto = user?.photoURL;
        const postBy = {
            name: organizerName,
            email: organizerEmail,
            photo: organizerPhoto
        }
        const allData = { thumbnail, title, description, deadline, category, location, volunteerNeed, postBy }
        axios.put(` http://localhost:5000/all/${Posts._id}`, allData)
            .then(res => {
                // console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        text: "Update Successfully",
                        icon: "success"
                    });
                    navigate('/manage-post')
                }
            })
    }



    return (
        <div className='grid container gap-10 mx-auto p-4 lg:grid-cols-5'>
            <Helmet>
                <title>Volunteer Venue || Update</title>

            </Helmet>
            <div className=' hidden lg:flex h-full  items-center lg:col-span-2'>
                <div className="carousel-item flex  relative w-full">
                    <img src={updateBg} className="w-full  rounded-lg" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg   ">
                        <div className='text-white p-4 font-raleway space-y-4'>
                            <p className='text-xl'> Update Your Volunteer Need Post!</p>
                            <p>Welcome to the Update Page! Here, you can easily modify your volunteer opportunity post to ensure it iss always accurate and engaging </p>
                        </div>
                    </div>

                </div >
            </div>
            <div className=' lg:col-span-3 py-4 rounded-2xl border-l-8 border-b-2 border-rose-500 shadow-2xl px-7'>
                <form onSubmit={handleUpdate}>
                    {/* thumbnail */}
                    <div className="mb-4">
                        <label htmlFor="thumbnail" className="block font-semibold mb-1">Thumbnail:</label>
                        <input defaultValue={Posts.thumbnail} required name='thumbnail' type="text" id="thumbnail" className="w-full border border-gray-300 rounded p-2" />
                    </div>

                    {/* title */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block font-semibold mb-1">Post Title:</label>
                        <input defaultValue={Posts.title} required name='title' type="text" id="title" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>

                    {/* description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-semibold mb-1">Description:</label>
                        <textarea defaultValue={Posts.description} required name='description' id="description" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" rows="4"></textarea>
                    </div>

                    {/* location  and category */}
                    <div className='md:flex gap-2'>
                        {/* category */}
                        <div className="mb-4 flex-auto ">
                            <label htmlFor="category" className="block font-semibold mb-1">Category:</label>
                            <select defaultValue={Posts.category} required name='category' id="category" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500">
                                <option value="">Select Category</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Education">Education</option>
                                <option value="Social Service">Social Service</option>
                                <option value="Animal Welfare">Animal Welfare</option>
                            </select>
                        </div>

                        {/* location */}
                        <div className="mb-4 flex-auto">
                            <label htmlFor="location" className="block font-semibold mb-1">Location:</label>
                            <input defaultValue={Posts.location} required name='location' type="text" id="location" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>

                    <div className='md:flex gap-4'>
                        {/* No.V needs */}
                        <div className="mb-4 flex-auto">
                            <label htmlFor="volunteersNeeded" className="block font-semibold mb-1">No. of Volunteers Needed:</label>
                            <input defaultValue={Posts.volunteerNeed} required name='volunteerNeed' type="number" id="volunteersNeeded" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                        </div>
                        {/* date picker */}
                        <div className="mb-4 ">
                            <label htmlFor="deadline" className="block font-semibold mb-1">Deadline:</label>
                            <DatePicker
                                className="border p-2 rounded-md"

                                selected={deadline} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>



                    {/* Organizer Name */}
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Organizer Name:</label>
                        <input defaultValue={Posts.postBy.name} required name='OrganizerName' readOnly type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>


                    {/* Organizer Email */}
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Organizer Email:</label>
                        <input defaultValue={Posts.postBy.email} required name='organizerEmail' readOnly type="email" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>

                    <input type="submit" className='btn btn-outline w-full btn-ghost' value="Update Post" />
                </form>
            </div>
        </div>
    );
};

export default Update;