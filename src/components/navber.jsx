import React from 'react'
import { BiSearch } from "react-icons/bi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/authSlice';

const Navber = () => {
    const user = useSelector((state) => state.user.user)
    const [profile, setProfile] = useState()
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <>
            <header className="text-black body-font sticky top-0 z-30 shadow-lg  bg-orange-100">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Daily Blogs</span>
                    </p>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to={"/"}>
                            <p className="mr-5 hover:text-gray-900">Home</p>
                        </Link>
                        <Link to={"/blogs"}>
                            <p className="mr-5 hover:text-gray-900">Blogs</p>
                        </Link>
                        <Link to={"/aboutus"}>
                            <p className="mr-5 hover:text-gray-900">About Us</p>
                        </Link>
                        <Link to={"/contactus"}>
                            <p className="mr-5 hover:text-gray-900">Contact Us</p>
                        </Link>

                    </nav>
                    <div className="flex items-center justify-around gap-3 relative">
                        <div className="flex items-center border-2 border-gray-400 rounded-md relative pr-2 py-1 ">
                            <input className='px-3 bg-transparent py-0 focus:outline-none' type="text" placeholder='search here...' />
                            <BiSearch className='text-xl font-semibold cursor-pointer' />
                        </div>
                        {user ?
                            <img onMouseEnter={() => setProfile(true)} className='w-8 h-8 rounded-full object-cover cursor-pointer' src={"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"} alt="" />
                            :
                            <Link to={"../login"}>
                                <button>Log In</button>
                            </Link>
                        }

                        {profile &&
                            <div onMouseLeave={() => setProfile(false)} className="bg-purple-300 absolute top-8 right-3 p-5 rounded-lg text-gray-800">
                                <ul className='p-2 text-lg rounded-lg hover:bg-purple-200'>
                                    <Link to={"/profilepage"}>
                                        <li>Profile</li>
                                    </Link>
                                </ul>
                                <ul className='p-2 text-lg rounded-lg hover:bg-purple-200'>
                                    <Link to={"../dashboard"}>
                                        <li>Dashboard</li>
                                    </Link>
                                </ul>
                                <ul className='p-2 text-lg rounded-lg hover:bg-purple-200'>
                                    <li>Setting</li>
                                </ul>

                                <ul onClick={handleLogOut} className='p-2 text-lg rounded-lg hover:bg-purple-200 cursor-pointer'>
                                    <li>Log Out</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navber


