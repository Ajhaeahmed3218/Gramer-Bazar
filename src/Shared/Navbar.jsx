import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {

    const {user, logOut, setUser } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
        setUser(null)
    }
    const navLink = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? " border-2 border-none bg-[#] py-3 px-5 font-bold rounded-xl text-orange-600 " : "font-bold py-3 px-5 lg:text-black "}>Home</NavLink></li>

        <li><NavLink to={"/membership"} className={({ isActive }) => isActive ? " border-2 border-none bg- text-orange-600  py-3 px-5 font-bold rounded-xl" : "font-bold py-3 px-5 lg:text-bla"}>About</NavLink></li>

        <li><NavLink to={"/servises"} className={({ isActive }) => isActive ? " border-2 border-none text-orange-600  py-3 px-5 font-bold rounded-xl" : "font-bold py-3 px-5 lg:text-black"}>Servises</NavLink></li>

        <li><NavLink to={"/login"} className={({ isActive }) => isActive ? " border-2 border-none text-orange-600  py-3 px-5 font-bold rounded-xl" : "font-bold py-3 px-5 lg:text-black"}>Join</NavLink></li>

        {/* { user && <li><NavLink to={"dashbord"} className={({ isActive }) => isActive ? " border-2 border-none text-orange-600  py-3 px-5 font-bold rounded-xl" : "font-bold py-3 px-5 lg:text-black"}>Dashbord</NavLink></li>} */}

    </>
    console.log(user);
    return (
        <div>
            <div className="navbar bg-[#eeeeee] lg:container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <Link to={'/'} className="flex justify-center items-center gap-1 text-xl "><FaHome className="lg:text-3xl text-[#fc6934]" /><div className="lg:font-bold font-semibold lg:text-2xl">Gramer<span className="text-[#fc6934]">Bazar</span></div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?<Link onClick={handleLogout} className="btn">Logout</Link> :<Link to={'/login'} className="btn">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;