import React from 'react'
import '../style/Dashboard.css'
import '../style/Sidebar.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer  from './Footer'
import '../style/Body.css'
function Dashboard() {
  return (
    <div className='Dashboard'>
            <div className='sidebar'>  
                    <Sidebar/>              
            </div>
            <div className='body'>
                    <Header/>
                    <Footer/>
            </div>
    </div>
  )
}

export default Dashboard
