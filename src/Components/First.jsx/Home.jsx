import React from 'react'
import './Home.css'


const First = () => {
  return (
    <div className='container'>
      <div className='first'>
        <div className='first-container'>
          <div className='first-picture'>
            <img className='picture' src="../../../public/First/Ellipse 1.png" alt="" />
          </div>
          <div className='first-title'>
            <h2>Manuel Perez</h2>
          </div>
          <div className='first-paragraph'>
            <h3>Soy full stack web developer</h3>
          </div>
          <div className='first-icons'>
            <img src="../../../public/First/instagram.svg" alt="" />
            <img src="../../../public/First/Twitter.svg" alt="" />
            <img src="../../../public/First/linkedin.svg" alt="" />
            <img src="../../../public/First/github-sign.svg" alt="" />
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