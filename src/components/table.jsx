
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import axios from "axios"

const Table = () => {
    const user = useSelector((state) => state.user.user)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchUserData = async () => {
            const res = await axios.get(`https://blooging-backend.onrender.com/api/post?username=${user.username}`)
            setPosts(res.data)
        }
        fetchUserData()
    }, [user.username])

    return (
        <div>
            {posts.length === 0 ? <span className='text-3xl font-semibold flex justify-center'>You Dont Have Articals</span>
                :
                <>
                    <div className=' flex justify-between items-center mb-4'>
                        <h1 className=' text-xl font-semibold '>Data</h1>
                        <input className='px-2 py-1 bg-transparent rounded-md border border-gray-400 focus:outline-none' type="text" placeholder='search' />
                    </div>
                    <table className=' border border-gray-400 shadow-md '>
                        <thead>
                            <tr className='border border-gray-400'>
                                <td className='px-4 py-3 hidden md:block title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Id</td>
                                <td className='md:px-4 px-2 md:py-3 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Title</td>
                                <td className='md:px-4 px-2 md:py-3 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Image</td>
                                <td className='md:px-4 px-2 md:py-3 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Artical</td>
                                <td className='md:px-4 px-2 md:py-3 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'></td>
                                <td className='md:px-4 px-2 md:py-3 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'></td>
                            </tr>
                        </thead>
                        <tbody>
                            {posts?.map((p) => {
                                return (
                                    <tr className='border border-gray-400'>
                                        <td className='px-4 py-3 hidden md:block'>{p._id.slice(0, 8)}</td>
                                        <td className='md:px-4 px-2 md:py-3 py-1 text-sm md:text-base font-semibold w-[25%]'>{p.title.slice(0, 30)}</td>
                                        <td className='md:px-4 px-2 md:py-3 py-1 '><img className='w-20 h-16 rounded-lg object-cover' src={p.image?.url} alt="" /></td>
                                        <td className='md:px-4 px-2 md:py-3 py-1 text-sm md:text-base w-[100%]'>{p.desc.slice(0, 100)}</td>
                                        <td className='md:px-4 px-2 md:py-3 py-1 '><button className='md:px-4 px-1 md:py-2 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 text-sm md:text-base'> edit</button></td>
                                        <td className='md:px-4 px-2 md:py-3 py-1'><button className='md:px-4 px-1 md:py-2 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400 text-sm md:text-base'> delete</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </>
            }
        </div>
    )
}

export default Table
