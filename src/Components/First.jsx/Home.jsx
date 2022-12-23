import React from 'react'
import './Home.css'
import Ellipse from "../../assets/home/Ellipse 1.png"
import instagram from "../../assets/home/instagram.svg"
import twitter from "../../assets/home/Twitter.svg"
import linkedin from "../../assets/home/linkedin.svg"
import github from "../../assets/home/github-sign.svg"


const First = () => {
  return (
    <div className='container'>
      <div className='first'>
        <div className='first-container'>
          <div className='first-picture'>
            <img className='picture' src={Ellipse} alt="" />
          </div>
          <div className='first-title'>
            <h2>Manuel Perez</h2>
          </div>
          <div className='first-paragraph'>
            <h3>Soy full stack web developer</h3>
          </div>
          <div className='first-icons'>
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
          </div>
          <div className='first-btn-principal'>
            <button className='btn-principal-btn'>
              <p className='btn-principal-p'>
                Contactame
              </p>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default First