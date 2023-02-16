import React from 'react'
import '../style/sidebar.css'
// import SidebBarTop from './Sidebartop';
import SidebBarTop from './Sidebartop';
import Sidebarbuttom from './sidebuttom';
function Sidebar() {
  return (
    <div className='container'>
      <SidebBarTop/>
      <Sidebarbuttom/>
    </div>
  )
}

export default Sidebar;