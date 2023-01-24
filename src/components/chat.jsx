import React from 'react'
import  "../styles/chat.css"
import { useState } from 'react'
import { MdAddIcCall } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Chat = ({ setChat }) => {
    const [profile, setProfile] = useState("")
    const [message, setMessage] = useState("")
    return (
        <div className="chat">
            <div className="relative">
                <div className="">
                    <img onClick={() => setChat(false)} onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)} className='absolute rounded-full object-cover -top-14 left-4 cursor-pointer border-2 border-white' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={50} height={50} alt="" />

                    {profile &&
                        <div className=" bg-gray-300 rounded-lg  w-32 h-11 absolute -top-14 left-20">
                            <span className='font-semibold text-sm px-2'>Goutham Reddy</span>
                            <p className='text-xs px-2'>Online</p>
                        </div>
                    }
                </div>
                <div className="flex p-3 ">
                    <div className="chat-left">
                        <div onClick={()=> setMessage(true)} className="p-0.5 flex justify-between items-center border-b shadow-md mb-2 cursor-pointer">
                            <img className='h-8 w-8 object-cover rounded-full' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                            <div className="flex flex-col">
                                <span className='text-xs'>user name</span>
                                <p className='text-sm font-semibold'>Sanjiv Kumar</p>
                            </div>
                        </div>
                        <div className="p-0.5 flex justify-between items-center border-b shadow-md mb-2 cursor-pointer">
                            <img className='h-8 w-8 object-cover rounded-full' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                            <div className="flex flex-col">
                                <span className='text-xs'>user name</span>
                                <p className='text-sm font-semibold'>Sanjiv Kumar</p>
                            </div>
                        </div>
                        <div className="p-0.5 flex justify-between items-center border-b shadow-md mb-2 cursor-pointer">
                            <img className='h-8 w-8 object-cover rounded-full' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                            <div className="flex flex-col">
                                <span className='text-xs'>user name</span>
                                <p className='text-sm font-semibold'>Sanjiv Kumar</p>
                            </div>
                        </div>
                        <div className="p-0.5 flex justify-between items-center border-b shadow-md mb-2 cursor-pointer">
                            <img className='h-8 w-8 object-cover rounded-full' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                            <div className="flex flex-col">
                                <span className='text-xs'>user name</span>
                                <p className='text-sm font-semibold'>Sanjiv Kumar</p>
                            </div>
                        </div>
                        <div className="p-0.5 flex justify-between items-center border-b shadow-md mb-2 cursor-pointer">
                            <img className='h-8 w-8 object-cover rounded-full' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                            <div className="flex flex-col">
                                <span className='text-xs'>user name</span>
                                <p className='text-sm font-semibold'>Sanjiv Kumar</p>
                            </div>
                        </div>
                        <div className="p-0.5 flex justify-between items-center border-b shadow-md mb-2 cursor-pointer">
                            <img className='h-8 w-8 object-cover rounded-full' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                            <div className="flex flex-col">
                                <span className='text-xs'>user name</span>
                                <p className='text-sm font-semibold'>Sanjiv Kumar</p>
                            </div>
                        </div>
                        <div className="p-0.5 flex justify-between items-center border-b shadow-md mb-2 cursor-pointer">
                            <img className='h-8 w-8 object-cover rounded-full' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                            <div className="flex flex-col">
                                <span className='text-xs'>user name</span>
                                <p className='text-sm font-semibold'>Sanjiv Kumar</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-right">
                        {message === 0 && <span className='flex justify-center my-4'> start conversation</span>}
                        {message &&
                            <>
                                <div className="flex items-center p-2 shadow-md justify-between ">
                                    <Link href={"../profilepage"}>
                                        <div className="flex gap-1 items-center">
                                            <img className=' rounded-full object-cover w-8 cursor-pointer border-2 border-white' src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"} width={1000} height={1000} alt="" />
                                            <div className="text-xs">
                                                <span className='font-semibold'>Goutham Reddy</span>
                                                <p>Online</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <MdAddIcCall className='mx-2 text-xl cursor-pointer' />
                                </div>
                                <div className="flex flex-col gap-1 overflow-y-scroll scr h-60">
                                    <div className="bg-emerald-200 text-sm m-1 rounded-md self-start px-2 py-1">left</div>
                                    <div className="bg-pink-300 text-sm px-2 py-1 rounded-md self-end">right message </div>
                                </div>
                                <div className="flex w-full p-1 absolute bottom-2">
                                    <input className='w-full px-2 py-0.5 focus:outline-none rounded-md placeholder:text-sm' type="text" placeholder='Type here...' />
                                    <button className='px-2 py-0.5 bg-blue-600 rounded-md hover:bg-blue-500 text-white text-sm '>Send</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
