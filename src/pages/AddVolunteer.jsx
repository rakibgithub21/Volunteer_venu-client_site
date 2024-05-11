import volunteer from '../assets/volunteering-background.webp'

const AddVolunteer = () => {

    const handlePostButton = (e) => {
        e.preventDefault()
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteerNeed = form.volunteerNeed.value;
        const OrganizerName = form.OrganizerName.value;
        const organizerEmail = form.organizerEmail.value;
        const allData = { thumbnail, title, description, category, location, volunteerNeed, OrganizerName, organizerEmail }
        // console.log(thumbnail, title, description, category, location, volunteerNeed, OrganizerName, organizerEmail);
console.log(allData);
    }

    return (
        <div className='grid container gap-10 mx-auto p-4 lg:grid-cols-5'>
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
                <form onSubmit={handlePostButton}>
                    {/* thumbnail */}
                    <div className="mb-4">
                        <label htmlFor="thumbnail" className="block font-semibold mb-1">Thumbnail:</label>
                        <input name='thumbnail' type="text" id="thumbnail" className="w-full border border-gray-300 rounded p-2" />
                    </div>

                    {/* title */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block font-semibold mb-1">Post Title:</label>
                        <input name='title' type="text" id="title" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>

                    {/* description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-semibold mb-1">Description:</label>
                        <textarea name='description' id="description" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" rows="4"></textarea>
                    </div>

                    {/* location  and category */}
                    <div className='md:flex gap-2'>
                        {/* category */}
                        <div className="mb-4 flex-auto ">
                            <label htmlFor="category" className="block font-semibold mb-1">Category:</label>
                            <select name='category' id="category" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500">
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
                            <input name='location' type="text" id="location" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>

                    {/* No.V needs */}
                    <div className="mb-4">
                        <label htmlFor="volunteersNeeded"  className="block font-semibold mb-1">No. of Volunteers Needed:</label>
                        <input name='volunteerNeed' type="number" id="volunteersNeeded" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
                    </div>

                    {/* date picker */}
                    <div className="mb-4">
                        <label htmlFor="deadline" className="block font-semibold mb-1">Deadline:</label>
                        {/* <DatePicker id="deadline" selected={deadline} onChange={(date) => setDeadline(date)} className="w-full border border-gray-300 rounded p-2" /> */}
                    </div>

                    {/* Organizer Name */}
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Organizer Name:</label>
                        <input name='OrganizerName' type="text" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"  />
                    </div>


                    {/* Organizer Email */}
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Organizer Email:</label>
                        <input name='organizerEmail' type="email" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"  />
                    </div>

                    <input type="submit" className='btn btn-outline w-full btn-ghost' value="POST" />
                </form>
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