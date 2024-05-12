import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const BeAVolunteer = () => {
    const datas = useLoaderData()
    const [deadline, setStartDate] = useState(new Date(datas.deadline) || new Date());
    console.log(datas);
    return (
        <div className="container mx-auto px-4 md:px-0">
            <form >
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
                        <select readOnly defaultValue={datas.category} name='category' id="category" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500">
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
                        <input required name='OrganizerName' readOnly type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>


                    {/* Organizer Email */}
                    <div className="mb-4 flex-auto">
                        <label className="block font-semibold mb-1">Organizer Email:</label>
                        <input required name='organizerEmail' readOnly type="email" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>

                <input type="submit" className='btn btn-outline w-full btn-ghost' value="POST" />
            </form>
        </div>
    );
};

export default BeAVolunteer;