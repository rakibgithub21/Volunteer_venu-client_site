import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


const UserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const handleUpdateUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const imageURL = e.target.image.value;
        const email = e.target.email.value;
        updateUserProfile(name, imageURL, email)
            .then(res => {
               
                window.location.reload()
            })
            .catch(err => {

            })

    }

    return (
        <div className="flex flex-col items-center justify-center mt-10 min-h-[65vh] ">

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-white">Update Your Profile</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                    Welcome, <span className="font-semibold text-lg"></span>! You can update your details below:
                </p>
                <form onSubmit={handleUpdateUser} className="max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                        <input name="name" defaultValue={user?.displayName} type="text" id="name" className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Profile Link</label>
                        <input name="image" defaultValue={user?.photoURL} type="text" id="link" className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                        <input name="email" readOnly defaultValue={user?.email} type="email" id="email" className="bg-gray-100 cursor-not-allowed dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-semibold rounded-lg text-sm py-2.5 w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;