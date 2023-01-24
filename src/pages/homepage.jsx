import React from 'react'
import Navber from '../components/navber'
import Hero from "../components/hero"
import Footer from "../components/footer"
import Card from '../components/card'

const Homepage = () => {
    return (
        <div>
            <Navber />
            <Hero />
            <Card />
            <Footer />
        </div>
    )
}

export default Homepage
