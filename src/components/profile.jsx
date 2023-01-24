import React, { useEffect, useState } from 'react'
import { ImLocation } from "react-icons/im";
import { GrEdit } from "react-icons/gr";
import "../styles/blogpage.css"
import axios from 'axios';

const Profilepage = ({ posts, username }) => {

    const [currentUser, setCurrentUser] = useState("")

    useEffect(() => {
        const fetchingUser = async () => {
            const res = await axios.get(`https://blooging-backend.onrender.com/api/user?username=${username}`)
            setCurrentUser(res.data)
        }
        fetchingUser()
    }, [username])

    return (
        <div className="md:w-3/5 mx-auto ">
            <div className="mx-24 mt-40 mb-20 border border-gray-400 rounded-xl shadow-md relative  ">
                <GrEdit className=' text-2xl cursor-pointer rounded-full absolute right-3 top-3 ' />
                <img className='image' src={currentUser.image? currentUser.image.url :"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="" />
                <div className="mt-20 text-center">
                    <div className="flex flex-col gap-5 p-5 ">
                        <h1 className='font-semibold text-xl'>{currentUser.username}</h1>
                        <p className='text-sm px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique excepturi cum consequuntur voluptatum reprehenderit expedita veritatis, quod iure explicabo! Voluptatem harum voluptate dolorum officia, ipsum dicta doloribus quos ratione numquam fugit aliquid. Voluptate, perspiciatis veniam ut corporis eius ipsam maxime at ipsum exercitationem dignissimos tempora possimus assumenda, </p>
                        <div className="flex items-center self-center ">
                            <ImLocation />
                            <span>Hyderbad</span>
                        </div>
                        <div className=" flex justify-around mt-4">
                            <div className="flex flex-col items-center">
                                <h3 className='font-semibold text-lg'>Followers</h3>
                                <span>1545</span>
                            </div>
                            <div className="border-r"></div>
                            <div className="flex flex-col items-center">
                                <h3 className='font-semibold text-lg'>Following</h3>
                                <span>54</span>
                            </div>
                            <div className="border-r"></div>
                            <div className="flex flex-col items-center">
                                <h3 className='font-semibold text-lg'>Articals</h3>
                                <span>122</span>
                            </div>
                        </div>

                        <div className="w-2/3 mx-auto flex justify-around my-10">
                            <button className='px-8 py-2 bg-blue-400 rounded-md text-white  '>Follow</button>
                            <button className='px-8 py-2 bg-orange-400 rounded-md text-white '>Message</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex flex-col max-w-7xl justify-center items-center">
                    {posts?.map((p) => {
                        return (
                            <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center" key={p._id}>
                                <div className="h-26 w-full overflow-hidden" style={{ flex: "1.5" }}>
                                    <img className='object-cover rounded-xl' style={{ width: "100%", height: "100%", maxHeight: "20vh" }} src={p.image?.url} alt="" />
                                </div>
                                <div className=" p-2" style={{ flex: "4.5" }}>
                                    <div className="font-bold text-lg text-black m-2 mt-10">{p.title} </div>
                                    <div className="text-gray-500 m-2 text-sm"><p>{p.desc}</p></div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default Profilepage
