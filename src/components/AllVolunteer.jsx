
const AllVolunteer = ({ volunteer }) => {
    // console.log(volunteer);
    const { category, description, thumbnail, volunteerNeed, title,postBy } = volunteer;
    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover w-full h-64" src={thumbnail} alt="Article"/>

                <div className="p-6">
                    <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                    <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">{title }</p>
                    <p title={description} className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description.substring(0,150)}...</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200"  role="link">Jone Doe</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AllVolunteer;