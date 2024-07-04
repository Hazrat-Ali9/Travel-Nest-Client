import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { isUrl } from "check-valid-url";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light')

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
        document.querySelector('html').setAttribute('class', localTheme)
    }, [theme])

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const NavLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all-tourists-spot"}>All Tourists Spot</NavLink></li>
        {
            user
                ? <>
                    <li><NavLink to={"/add-tourists-spot"}>Add Tourists Spot</NavLink></li>
                    <li><NavLink to={"/my-list"}>My List</NavLink></li>
                </>
                : <></>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">TravelNest</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ? <>
                                <button onClick={handleLogout} className="btn btn-sm md:btn mr-4">Logout</button>
                                <div>
                                    <label className='cursor-pointer grid place-items-center'>
                                        <input
                                            type='checkbox'
                                            onChange={handleToggle}
                                            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
                                        />
                                        <svg
                                            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='14'
                                            height='14'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <circle cx='12' cy='12' r='5' />
                                            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                                        </svg>
                                        <svg
                                            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='14'
                                            height='14'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                                        </svg>
                                    </label>
                                </div>
                                <div className="dropdown dropdown-end" id="my-anchor-element">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div
                                            className="w-10 rounded-full"
                                            data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}
                                        >
                                            <img alt="Profile Pic" src={isUrl(user?.photoURL) ? user?.photoURL : "https://i.ibb.co/XDrnjqc/image.png"} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                            : <>
                                <Link to={"/login"} className="btn btn-sm md:btn">Login</Link>
                                <Link to={"/register"} className="btn btn-sm md:btn ml-4">Register</Link>
                            </>
                    }


                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default NavBar;