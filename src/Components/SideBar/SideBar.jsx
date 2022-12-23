import React from 'react'
import "./SideBar.css"
import home from "../../assets/SideBar/home.svg"
const SideBar = () => {
  return (
    <div className='SideBar'>
      <div>
        <a href="#"><img src={home} alt="#" /></a>
      </div>
      <div>
        <a href="#"><img src="../../assets/SideBar/user.svg" alt="" /></a>
      </div>
      <div>
        <a href="#"><img src=".../../assets/SideBar/portfolio.svg" alt="" /></a>
      </div>
      <div>
        <a href="#"><img src="../../../public/SideBar/graduation-cap.svg" alt="" /></a>
      </div>
      <div>
        <a href="#"><img src="../../../public/SideBar/edificio.svg" alt="" /></a>
      </div>
      <div>
        <a href="#"><img src="../../../public/SideBar/chat.svg" alt="" /></a>
      </div>

    </div>
  )
}

export default SideBar