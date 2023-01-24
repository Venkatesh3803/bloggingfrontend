
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
// import { useGetUsersPostMutation } from '../redux/postApi'
import axios from "axios"

const Table = () => {
    const {id} = useParams()
    const username = useSelector((state) => state.user.user.username)
    useEffect(() => {
        const fetchUserData = async () => {
            const res = await axios.get(`http://localhost:5000/api/user/users/${id}`, {
                username : username ,
            })
            console.log(res.data)
        }
        fetchUserData()
    }, [username, id])

    return (
        <div>
            <div className=' flex justify-between items-center mb-4'>
                <h1 className=' text-xl font-semibold '>Data</h1>
                <input className='px-2 py-1 bg-transparent rounded-md border border-gray-400 focus:outline-none' type="text" placeholder='search' />
            </div>
            <table className=' border border-gray-400 shadow-md '>
                <thead>
                    <tr className='border border-gray-400'>
                        <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Id</td>
                        <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Title</td>
                        <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Image</td>
                        <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Artical</td>
                        <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'></td>
                        <td className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border border-gray-400'>
                        <td className='px-4 py-3'>554645646</td>
                        <td className='px-4 py-3 font-semibold '>Best 5 satergies</td>
                        <td className='px-4 py-3 '><img className='w-20 h-16 rounded-lg object-cover' src={"https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"} alt="" /></td>
                        <td className='px-4 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quis!</td>
                        <td className='px-4 py-3 '><button className='px-3 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 '> edit</button></td>
                        <td className='px-4 py-3'><button className='px-3 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400 '> delete</button></td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='px-4 py-3'>554645646</td>
                        <td className='px-4 py-3 font-semibold '>Best 5 satergies</td>
                        <td className='px-4 py-3 '><img className='w-20 h-16 rounded-lg object-cover' src={"https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"} alt="" /></td>
                        <td className='px-4 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quis!</td>
                        <td className='px-4 py-3 '><button className='px-3 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 '> edit</button></td>
                        <td className='px-4 py-3'><button className='px-3 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400 '> delete</button></td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='px-4 py-3'>554645646</td>
                        <td className='px-4 py-3 font-semibold '>Best 5 satergies</td>
                        <td className='px-4 py-3 '><img className='w-20 h-16 rounded-lg object-cover' src={"https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"} alt="" /></td>
                        <td className='px-4 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quis!</td>
                        <td className='px-4 py-3 '><button className='px-3 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 '> edit</button></td>
                        <td className='px-4 py-3'><button className='px-3 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400 '> delete</button></td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='px-4 py-3'>554645646</td>
                        <td className='px-4 py-3 font-semibold '>Best 5 satergies</td>
                        <td className='px-4 py-3 '><img className='w-20 h-16 rounded-lg object-cover' src={"https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"} alt="" /></td>
                        <td className='px-4 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quis!</td>
                        <td className='px-4 py-3 '><button className='px-3 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 '> edit</button></td>
                        <td className='px-4 py-3'><button className='px-3 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400 '> delete</button></td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='px-4 py-3'>554645646</td>
                        <td className='px-4 py-3 font-semibold '>Best 5 satergies</td>
                        <td className='px-4 py-3 '><img className='w-20 h-16 rounded-lg object-cover' src={"https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"} alt="" /></td>
                        <td className='px-4 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quis!</td>
                        <td className='px-4 py-3 '><button className='px-3 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 '> edit</button></td>
                        <td className='px-4 py-3'><button className='px-3 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400 '> delete</button></td>
                    </tr>
                    <tr className='border border-gray-400'>
                        <td className='px-4 py-3'>554645646</td>
                        <td className='px-4 py-3 font-semibold '>Best 5 satergies</td>
                        <td className='px-4 py-3 '><img className='w-20 h-16 rounded-lg object-cover' src={"https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"} alt="" /></td>
                        <td className='px-4 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quis!</td>
                        <td className='px-4 py-3 '><button className='px-3 py-1 bg-green-300 rounded-md text-gray-white hover:bg-green-400 '> edit</button></td>
                        <td className='px-4 py-3'><button className='px-3 py-1 bg-red-300 rounded-md text-gray-white hover:bg-red-400 '> delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
