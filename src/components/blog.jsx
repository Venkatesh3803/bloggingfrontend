
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { AiOutlineShareAlt, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/blogpage.css"
import axios from 'axios';
import { useParams } from "react-router-dom"

const BlogsPage = () => {
    const { id } = useParams()
    const [comment, setComment] = useState()
    const user = useSelector((state) => state.user.user)
    const [currentPost, setCurrentPost] = useState("")
    useEffect(() => {
        const fetchingPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/post/${id}`)
            setCurrentPost(res.data)
        }
        fetchingPost()
    }, [id])

    console.log(currentPost)

    return (
        <div>
            <div className="mt-10 ">
                <h1 className='text-2xl px-10 font-semibold '>Blog</h1>
                <div className="container">
                    <div className="blog-left">
                        <div className="">
                            <img src={currentPost.image?.url} width={1150} height={500} alt="" />
                        </div>
                        <div className="px-10 flex flex-col gap-2 relative">
                            <div className="flex mb-5 items-center gap-3 justify-between">
                                <Link to={`/profilepage/${user._id}`}>
                                    <div className="flex gap-3">
                                        <img className='object-cover rounded-full w-10 h-10' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                        <div className="flex flex-col text-center">
                                            <h2 className='font-medium'>stefew</h2>
                                            <p className='self-start text-xs'>12:35 pm</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-1">
                                        <AiFillLike className='text-2xl cursor-pointer' />
                                        <span className='text-xs text-gray-600'>125</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <AiOutlineComment onClick={() => setComment(!comment)} className='text-2xl cursor-pointer' />
                                        <span className='text-xs text-gray-600'>22</span>
                                    </div>
                                    <AiOutlineShareAlt className='text-2xl cursor-pointer' />
                                </div>
                            </div>
                            {comment &&
                                <div className=" w-2/4 bg-slate-200 absolute right-10 max-h-96 overflow-y-auto top-10 p-4 ">
                                    <div className="relative flex flex-col gap-3 rounded-lg">
                                        <Link to={"/profilepage"}>
                                            <div className="flex gap-3">
                                                <img className='object-cover rounded-full w-10 h-10' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                                <div className="flex flex-col text-center">
                                                    <h2 className='font-medium'>stefew</h2>
                                                    <p className='self-start text-xs'>12:35pm</p>
                                                </div>
                                                <div className="border border-gray-400 p-2 rounded-md text-sm">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, a est. Odit ratione placeat, nostrum expedita vero esse sint natus nulla quo est! Provident, necessitatibus!
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={"/profilepage"}>
                                            <div className="flex gap-3">
                                                <img className='object-cover rounded-full w-10 h-10' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                                <div className="flex flex-col text-center">
                                                    <h2 className='font-medium'>stefew</h2>
                                                    <p className='self-start text-xs'>12:35pm</p>
                                                </div>
                                                <div className="border border-gray-400 p-2 rounded-md text-sm">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, a est. Odit ratione placeat, nostrum expedita vero esse sint natus nulla quo est! Provident, necessitatibus!
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={"/profilepage"}>
                                            <div className="flex gap-3">
                                                <img className='object-cover rounded-full w-10 h-10' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                                <div className="flex flex-col text-center">
                                                    <h2 className='font-medium'>stefew</h2>
                                                    <p className='self-start text-xs'>12:35pm</p>
                                                </div>
                                                <div className="border border-gray-400 p-2 rounded-md text-sm">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, a est. Odit ratione placeat, nostrum expedita vero esse sint natus nulla quo est! Provident, necessitatibus!
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={"/profilepage"}>
                                            <div className="flex gap-3">
                                                <img className='object-cover rounded-full w-10 h-10' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                                <div className="flex flex-col text-center">
                                                    <h2 className='font-medium'>stefew</h2>
                                                    <p className='self-start text-xs'>12:35pm</p>
                                                </div>
                                                <div className="border border-gray-400 p-2 rounded-md text-sm">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, a est. Odit ratione placeat, nostrum expedita vero esse sint natus nulla quo est! Provident, necessitatibus!
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={"/profilepage"}>
                                            <div className="flex gap-3">
                                                <img className='object-cover rounded-full w-10 h-10' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                                <div className="flex flex-col text-center">
                                                    <h2 className='font-medium'>stefew</h2>
                                                    <p className='self-start text-xs'>12:35pm</p>
                                                </div>
                                                <div className="border border-gray-400 p-2 rounded-md text-sm">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, a est. Odit ratione placeat, nostrum expedita vero esse sint natus nulla quo est! Provident, necessitatibus!
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="border flex  border-gray-400 justify-between rounded-md overflow-hidden">
                                            <input className='px-3 py-1 bg-transparent w-full focus:outline-none' type="text" placeholder='Comment' />
                                            <button className='px-4 bg-slate-300 hover:bg-slate-400 '>Post</button>
                                        </div>
                                    </div>
                                </div>

                            }

                            <h1 className=' font-bold text-xl'>{currentPost.title}</h1>
                            <p className='pb-10'>{currentPost.desc}</p>
                        </div>
                    </div>
                    <div className="blog-right">
                        <h1 className='text-xl'>Similar Blogs</h1>
                        <div className="p-4">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className='object-cover rounded-xl w-full h-full' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                        <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">


                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className='object-cover rounded-xl w-full h-full' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                        <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className='object-cover rounded-xl w-full h-full' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div className="flex items-center flex-wrap">
                                        <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BlogsPage
