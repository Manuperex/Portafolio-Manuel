import React from 'react'
import './App.css'
import SideBar from './Components/SideBar/SideBar'
import Home from './Components/First.jsx/Home'
import AboutMe from './Components/Second/AboutMe'

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className='contenedor1'>
        <Home />
        <AboutMe />
      </div>
    </div>
  )
}

export default App
