import volunteer from '../assets/volunteering-background.webp'

const AddVolunteer = () => {

    return (
        <div className='grid container gap-10 mx-auto lg:grid-cols-5'>
            <div className=' hidden lg:flex h-full  items-center lg:col-span-2'>
                <div className="carousel-item flex  relative w-full">
                    <img src={volunteer} className="w-full  rounded-lg" />
                    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg   ">
                        <div className='text-white p-4 font-raleway space-y-4'>
                            <p className='text-xl'> Post Your Volunteer Opportunities Today!</p>
                            <p>Welcome to our community of changemakers! Are you in need of helping hands for a cause close to your heart? Look no further – our Add Volunteer Post page is here to connect you with passionate individuals ready to make a difference. </p>
                        </div>
                    </div>

                </div >
            </div>
            <div className=' lg:col-span-3 py-4 rounded-2xl border-l-8 border-t-2 border-rose-500 shadow-2xl px-7'>
                {/* thumbnail */}
                <div className="mb-4">
                    <label htmlFor="thumbnail" className="block font-semibold mb-1">Thumbnail:</label>
                    <input type="text" id="thumbnail" className="w-full border border-gray-300 rounded p-2" />
                </div>

                {/* title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block font-semibold mb-1">Post Title:</label>
                    <input type="text" id="title" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                </div>

                {/* description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block font-semibold mb-1">Description:</label>
                    <textarea id="description" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" rows="4"></textarea>
                </div>

                {/* location  and category */}
                <div className='md:flex gap-2'>
                    {/* category */}
                    <div className="mb-4 flex-auto ">
                        <label htmlFor="category" className="block font-semibold mb-1">Category:</label>
                        <select id="category" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500">
                            <option value="">Select Category</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="education">Education</option>
                            <option value="social_service">Social Service</option>
                            <option value="animal_welfare">Animal Welfare</option>
                        </select>
                    </div>

                    {/* location */}
                    <div className="mb-4 flex-auto">
                        <label htmlFor="location" className="block font-semibold mb-1">Location:</label>
                        <input type="text" id="location" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>

                {/* No.V needs */}
                <div className="mb-4">
                    <label htmlFor="volunteersNeeded" className="block font-semibold mb-1">No. of Volunteers Needed:</label>
                    <input type="number" id="volunteersNeeded" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                </div>

                {/* date picker */}
                <div className="mb-4">
                    <label htmlFor="deadline" className="block font-semibold mb-1">Deadline:</label>
                    {/* <DatePicker id="deadline" selected={deadline} onChange={(date) => setDeadline(date)} className="w-full border border-gray-300 rounded p-2" /> */}
                </div>

                {/* Organizer Name */}
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Organizer Name:</label>
                    <input type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" readOnly />
                </div>


                {/* Organizer Email */}
                <div className="mb-4">
                    <label className="block font-semibold mb-1">Organizer Email:</label>
                    <input type="email" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" readOnly />
                </div>

                <input type="submit" className='btn btn-outline w-full btn-ghost' value="POST" />
            </div>
        </div>
    );
};

export default AddVolunteer;



//     style={
//         {
//             backgroundImage: `url(${volunteer})`, backgroundSize: 'cover',
//                 backgroundPosition: 'center',
// }
// }