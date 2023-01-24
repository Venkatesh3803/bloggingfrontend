// import Image from 'next/image'
import React from 'react'
// import styles from "../styles/profilepage.module.css"
import { ImLocation } from "react-icons/im";
import { GrEdit } from "react-icons/gr";
import "../styles/blogpage.css"
const Profilepage = () => {
    return (
        <div className="md:w-3/5 mx-auto ">
            <div className="mx-24 mt-40 mb-20 border border-gray-400 rounded-xl shadow-md relative  ">
                <GrEdit className=' text-2xl cursor-pointer rounded-full absolute right-3 top-3 ' />
                <img className='image' src={"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"} alt="" />
                <div className="mt-20 text-center">
                    <div className="flex flex-col gap-5 p-5 ">
                        <h1 className='font-semibold text-xl'>Jhon Doe</h1>
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
                    <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
                        <div className="h-26 w-full overflow-hidden">      <img className='object-cover rounded-xl w-full h-full' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" /> </div>
                        <div className="grid p-2">
                            <div className="font-bold text-lg text-black m-2 mt-10">Love is like wildflowers; it is often found in the
                                most unlikely places. </div>
                            <div className="text-gray-500 m-2 text-sm"><p>Flowers are a beautiful way to show your appreciation
                                for someone. They are also a great way to show your love. Flowers can be delivered in a variety
                                of ways, including through mail, messenger, or even in person.</p></div>
                        </div>
                    </div>
                    <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
                        <div className="grid p-2">
                            <div className="font-bold text-lg text-black m-2 mt-10">However alert we are, antiquity remains an unknown,
                                unanticipated galaxy. </div>
                            <div className="text-gray-500 m-2 text-sm"><p>The Universe is a vast and ever-expanding place. It is
                                composed of an estimated 100 billion galaxies, each with billions of stars. It is estimated that
                                there are as many as 100 billion galaxies in the observable universe. </p></div>
                        </div>
                        <div className="h-26 w-full overflow-hidden">      <img className='object-cover rounded-xl w-full h-full' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" /> </div>
                    </div>
                    <div className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
                        <div className="h-26 w-full overflow-hidden">      <img className='object-cover rounded-xl w-full h-full' src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} width={1000} height={1000} alt="" /> </div>
                        <div className="grid p-2">
                            <div className="font-bold text-lg text-black m-2 mt-10">It is the friends you can call up at 4 a.m. that
                                matter. </div>
                            <div className="text-gray-500 m-2 text-sm"><p>The bond of friendship is one that is often unspoken
                                and unrivaled. It is a relationship that is founded on mutual respect and understanding.
                                Friendship is something that can be found in all walks of life, and is often the foundation of a
                                successful life. </p></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profilepage
