import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../components/footer'
import Navber from '../components/navber'
import Profile from '../components/profile'
import { useLocation } from "react-router-dom"
import axios from 'axios'

const ProfilePage = () => {
    const location = useLocation()
   const username = (location.pathname.split("/")[2])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchingPosts = async () => {
            const res = await axios.get(`https://blooging-backend.onrender.com/api/post?username=${username}`)
            setPosts(res.data)
        }
        fetchingPosts()
    }, [username])

    return (
        <div>
            <Navber />
            <Profile posts = {posts} username = {username}/>
            <Footer />
        </div>
    )
}

export default ProfilePage
