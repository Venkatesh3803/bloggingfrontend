import React from 'react'
import { useState } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios'
import { toast } from "react-toastify"

const Form = () => {
    const user = useSelector((state) => state.user.user)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")



    const handleChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        }
        else if (e.target.name === "desc") {
            setDesc(e.target.value)
        }
        if (e.target.name === "category") {
            setCategory(e.target.value)
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0]
        setFileToBase(file);
        console.log(file)
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("https://blooging-backend.onrender.com/api/post/create", {
            title,
            desc,
            category,
            image,
            username: user.username,
        })
        await (res.data)
        if (res.data) {
            toast.success("posted sucessfully")
        }
    }

    return (
        <div>
            <h1 className='text-center text-xl font-semibold mb-4'>Add Artical</h1>
            <div className="m-auto mx-2">
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form onSubmit={handleSubmit}>
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Title</label>
                                        <input type="text" name="title" id="first-name" autoComplete="given-name" onChange={handleChange} value={title} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Category</label>
                                        <select type="text" name="category" id="first-name" onChange={handleChange} value={category} autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                                            <option className='shadow-sm border-b border-gray-70000'></option>
                                            <option className='shadow-sm border-b border-gray-200'>News</option>
                                            <option className='shadow-sm border-b border-gray-200'>Entertainment</option>
                                            <option className='shadow-sm border-b border-gray-200'>Movies</option>
                                            <option className='shadow-sm border-b border-gray-200'>Games</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <span className='border border-gray-500 rounded-lg px-4 py-3 '>
                                            <input type="file" onChange={handleImage} rows="8" name="image" id="street-address" autoComplete="street-address" className="mt-1  w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </span>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Artical</label>
                                        <textarea type="text" rows="8" onChange={handleChange} value={desc} name="desc" id="street-address" autoComplete="street-address" className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>

                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Publish</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
