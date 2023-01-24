import React from 'react'
import Footer from '../components/footer'
import Form from '../components/form'
import Navber from '../components/navber'
import Table from '../components/table'
import "../styles/dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <Navber />
            <div className="dashboard">
                <div className="dash-left">
                    <Form />
                </div>
                <div className="dash-right">
                    <Table />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
