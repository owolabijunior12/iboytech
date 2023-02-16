import React from 'react'
import '../style/Dashboard.css'
import Header from './Header'
import Sidebar from './sidebar'
import Footer  from './Footer'
function Dashboard() {
  return (
    <div className='Dashboard'>
            <div className='sidebarcontainer'>  
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
