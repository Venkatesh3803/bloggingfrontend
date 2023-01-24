
import Homepage from "./pages/homepage"
import "./styles/app.css"
import { Route, Routes } from "react-router-dom"
import Blogpage from "./pages/blogpage"
import Blogs from "./pages/blogs"
import ProfilePage from "./pages/profilePage"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Register from "./pages/register"
import Contactus from "./pages/contactus"
import Aboutus from "./pages/aboutus"
import Chat from "./components/chat"
import { useState } from "react"
import { BsChatText } from 'react-icons/bs'
import Pagenotfound from "./pages/pagenotfound"


export default function App() {
  const [chat, setChat] = useState()
  return (
    <div className="app">
      {chat ? "" :
        <div onClick={() => setChat(!chat)} className=" flex items-center relative transition-all">
          <span className='bg-red-500 px-1 p-0.5 text-xs fixed rounded-full bottom-24 z-20 right-5 text-white'> +5 </span>
          <BsChatText className='text-5xl fixed bottom-16 right-5 cursor-pointer z-10 bg-gray-400 px-2 py-2 rounded-xl bg-opacity-50 text-black' />
        </div>
      }
      {chat &&
        <Chat setChat={setChat} />
      }
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>

    </div>
  )
}