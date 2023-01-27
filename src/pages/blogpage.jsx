import React, { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Navber from '../components/navber'
import Blog from "../components/blog"
import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import axios from 'axios'

const Blogpage = () => {
    const { id } = useParams()
    const [currentPost, setCurrentPost] = useState("")
    useEffect(() => {
        const fetchingPost = async () => {
            const res = await axios.get(`https://blooging-backend.onrender.com/api/post/${id}`)
            setCurrentPost(res.data)
        }
        fetchingPost()
    }, [id])


    return (
        <div>
            <Navber/>
            <Blog currentPost = {currentPost} username = {currentPost.username} id= {id}/>
            <Footer/>
        </div>
    )
}

export default Blogpage
