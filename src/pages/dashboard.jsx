import React from 'react'
import Footer from '../components/footer'
import Form from '../components/form'
import Navber from '../components/navber'
import Table from '../components/table'

const Dashboard = () => {
    return (
        <div>
            <Navber />
            <div className='p-2 md:p-10 flex gap-2 flex-wrap' >
                <div style={{flex:"1.5"}}>
                    <Form />
                </div>
                <div style={{flex:"2.4"}}>
                    <Table />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
