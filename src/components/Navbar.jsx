import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown font-raleway">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'text-lg hover:text-rose-500 '} to={'/'}>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#0aa9be] underline rounded' : 'hover:text-rose-500 text-lg '} to={'/need-volunteer'}>Need Volunteer</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Volunteer Venue</a>
            </div>
            <div className="navbar-center hidden lg:flex font-raleway">
                <ul className="menu menu-horizontal gap-2 px-1">
                    <NavLink data-tooltip-id="my-tooltip-2" className={({ isActive }) => isActive ? 'border-2 font-semibold  text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/'}>Home</NavLink>
                    <NavLink data-tooltip-id="my-tooltip-2" className={({ isActive }) => isActive ? 'border-2 font-semibold   text-[#10be0a] border-[#a3da5aee] py-3 rounded-xl px-5' : 'py-3 px-5  rounded-xl hover:bg-cyan-100 hover:text-blue-500 '} to={'/need-volunteer'}>Need Volunteer</NavLink>
                   
                </ul>
            </div>
            <div className="navbar-end  gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <button className="btn btn-outline  btn-error">Logout</button>
                <button className="btn btn-success">Login</button>

            </div>
        </div>
    );
};

export default Navbar;