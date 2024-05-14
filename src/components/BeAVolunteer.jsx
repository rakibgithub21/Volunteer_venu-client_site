import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const BeAVolunteer = () => {
    const { user } = useContext(AuthContext)
    const datas = useLoaderData()

    const [deadline, setStartDate] = useState(new Date(datas.deadline) || new Date());


    const navigate = useNavigate()
    





    const handleBeAVolunteer = (e) => {
        e.preventDefault()
        if (user?.email === datas.postBy.email) {
            return Swal.fire({
                title: "Opps!",
                text: "You post for this volunteer. You can,t be a volunteer",
                icon: "warning"
            });
        }
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteerNeed = parseInt(form.volunteerNeed.value);
        if (volunteerNeed === 0) {
            return Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "No Volunteer Need. Volunteer Need is 0 !!",
               
            });
        }
        const OrganizerName = form.OrganizerName.value;
        const organizerEmail = form.organizerEmail.value;
        const volunteerName = form.volunteerName.value;
        const volunteerEmail = form.volunteerEmail.value;
        const status = form.status.value;
        const suggestion = form.suggestion.value;
        const allData = {
            post_id: datas._id,
            thumbnail,
            title,
            description,
            category,
            location,
            volunteerNeed,
            deadline,
            postBy: {
                name: OrganizerName,
                email: organizerEmail
            },
            volunteerDetails: {
                email: volunteerEmail,
                name: volunteerName
            },
            status,
            suggestion
        }
        axios.post('https://b9-a11-serversite.vercel.app/beVolunteer', allData)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "REQUEST DONE?",
                        text: "Your Request has been done",
                        icon: "success"
                    });

                    axios.patch(`https://b9-a11-serversite.vercel.app/all/${datas._id}`)
                        .then(res => {
                            // console.log(res.data);
                        })
                    navigate('/need-volunteer')
                    
                //    window.location.reload()
                }


            })


    }
    return (
        <div className="container mx-auto px-4 md:px-0">
            <form onSubmit={handleBeAVolunteer}>
                {/* thumbnail */}
                <div className="md:flex md:gap-4">
                    <div className="mb-4 flex-auto">
                        <label htmlFor="thumbnail" className="block font-semibold mb-1">Thumbnail:</label>
                        <input defaultValue={datas.thumbnail} readOnly name='thumbnail' type="text" id="thumbnail" className="w-full border border-gray-300 rounded p-2" />
                    </div>

                    {/* title */}
                    <div className="mb-4 flex-auto">
                        <label htmlFor="title" className="block font-semibold mb-1">Post Title:</label>
                        <input defaultValue={datas.title} readOnly name='title' type="text" id="title" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>

                {/* description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block font-semibold mb-1">Description:</label>
                    <textarea readOnly defaultValue={datas.description} name='description' id="description" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" rows="4"></textarea>
                </div>

                {/* location  and category */}
                <div className='md:flex gap-4'>
                    {/* category */}
                    <div className="mb-4 flex-auto ">
                        <label htmlFor="category" className="block font-semibold mb-1">Category:</label>
                        <select disabled defaultValue={datas.category} name='category' id="category" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500">
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
                        <input readOnly defaultValue={datas.location} name='location' type="text" id="location" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>

                <div className='md:flex gap-4'>
                    {/* No.V needs */}
                    <div className="mb-4 flex-auto">
                        <label htmlFor="volunteersNeeded" className="block font-semibold mb-1">No. of Volunteers Needed:</label>
                        <input defaultValue={datas.volunteerNeed} readOnly name='volunteerNeed' type="number" id="volunteersNeeded" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    {/* date picker */}
                    <div className="mb-4 ">
                        <label htmlFor="deadline" className="block font-semibold mb-1">Deadline:</label>
                        <DatePicker
                            readOnly
                            className="border p-2 rounded-md"
                            selected={deadline} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>



                <div className="md:flex gap-4">
                    {/* Organizer Name */}
                    <div className="mb-4 flex-auto">
                        <label className="block font-semibold mb-1">Organizer Name:</label>
                        <input defaultValue={datas.postBy.name} required name='OrganizerName' readOnly type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>


                    {/* Organizer Email */}
                    <div className="mb-4 flex-auto">
                        <label className="block font-semibold mb-1">Organizer Email:</label>
                        <input defaultValue={datas.postBy.email} required name='organizerEmail' readOnly type="email" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>
                <div className="mt-2">
                    <h3 className="text-3xl font-medium font-roboto text-center">Volunteer Details</h3>
                    <div className="grid max-w-3xl mx-auto my-10 shadow-xl border border-rose-500 p-4 grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Volunteer Name</label>
                            <input defaultValue={user?.displayName} id="username" name="volunteerName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Volunteer Email Address</label>
                            <input defaultValue={user?.email} readOnly name="volunteerEmail" id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="status">Status</label>
                            <input name="status" readOnly defaultValue={'requested'} id="status" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="suggestion">Suggestion</label>
                            <textarea required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="suggestion" id="suggestion"></textarea>
                        </div>


                    </div>
                </div>

                <input type="submit" className='btn btn-outline w-full btn-ghost' value="Request" />
            </form>
        </div>
    );
};

export default BeAVolunteer;