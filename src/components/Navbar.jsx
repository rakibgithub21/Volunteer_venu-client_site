import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "./Loading";


const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    // const handleLogout = () => {
    //     logOut()
    //         .then(response => {
    //             axios('http://localhost:5000/logout', {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //         })
    // }
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    if (loading) {
        return <Loading></Loading>
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light');
        }
    }


    return (
        <div className="bg-base-300">
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown font-raleway">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'text-sm hover:text-rose-500 '} to={'/'}>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-sm '} to={'/need-volunteer'}>Need Volunteer</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-sm '} to={'/add-volunteer'}> Add Volunteer</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-sm '} to={'/manage-post'}>Manage My Post</NavLink>
                            <NavLink className={({ isActive }) => isActive ? ' text-sm font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-sm '} to={'/update-profile'}>Update Profile</NavLink>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">Volunteer Venue</Link>
                </div>
                <div className="navbar-center hidden lg:flex font-raleway">
                    <ul className="menu menu-horizontal items-center gap-2 px-1">
                        <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold   text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/need-volunteer'}>Need Volunteer</NavLink>
                        {
                            user && <div className="dropdown">
                                <div tabIndex={0} role="button" className=" bg-base-300 m-1">My Profile</div>
                                <ul tabIndex={0} className="dropdown-content space-y-2 bg-base-200 border border-[#a3da5aee]  z-[100] menu p-2   rounded-box w-52">
                                    <li>
                                        <NavLink className={({ isActive }) => isActive ? 'justify-between border border-[#a3da5aee]' : 'justify-between'} to={'/add-volunteer'} >
                                            Add Volunteer
                                        </NavLink>
                                    </li>
                                    <li><NavLink className={({ isActive }) => isActive ? 'border border-[#a3da5aee]' : 'border'} to={'/manage-post'}>Manage My Post</NavLink></li>
                                    <li><NavLink className={({ isActive }) => isActive ? 'border border-[#a3da5aee]' : 'border'} to={'/update-profile'}>Update Profile</NavLink></li>
                                </ul>
                            </div>
                        }
                    </ul>
                </div>
                <div className="navbar-end  gap-2">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img referrerPolicy='no-referrer' title={user?.displayName} alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                <li>
                                    <button onClick={logOut} className=" btn-outline text-lg btn-error">Logout</button>
                                </li>
                            </ul>
                        </div> : <Link to={'/login'} className="btn btn-success">Login</Link>
                    }

                    {/* <button className="btn btn-outline  btn-error">Logout</button> */}


                </div>
            </div>
        </div>
    );
};

export default Navbar;