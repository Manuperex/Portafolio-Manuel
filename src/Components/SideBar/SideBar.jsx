import React from 'react'
import "./SideBar.css"
import home from "../../assets/SideBar/home.svg"
import user from "../../assets/SideBar/user.svg"
import portfolio from "../../assets/SideBar/portfolio.svg"
import graduationCap from "../../assets/SideBar/graduation-cap.svg"
import edificio from "../../assets/SideBar/edificio.svg"
import chat from "../../assets/SideBar/chat.svg"
const SideBar = () => {
  return (
    <div className='SideBar'>
      <div>
        <a href="#"><img src={home} alt="#" /></a>
      </div>
      <div>
        <a href="#"><img src={user} alt="" /></a>
      </div>
      <div>
        <a href="#"><img src={portfolio} alt="" /></a>
      </div>
      <div>
        <a href="#"><img src={graduationCap} alt="" /></a>
      </div>
      <div>
        <a href="#"><img src={edificio} alt="" /></a>
      </div>
      <div>
        <a href="#"><img src={chat} alt="" /></a>
      </div>

    </div>
  )
}

export default SideBar