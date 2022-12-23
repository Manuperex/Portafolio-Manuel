import React from 'react'
import './AboutMe.css'

const Second = () => {
    return (
        <div className='container-second-principal'>
            <div className='container-second'>
                <div className='second-title'>
                    <h2>
                        Sobre mi
                    </h2>
                </div>
                <div className='container-second-about'>
                    <div className='container-about-img'>
                        <img className='about-img' src="../../../public/Second/Ellipse 1.png" alt="" />
                    </div>
                    <div className='about-info'>
                        <div>
                            <p className='about-paragraph'>
                                Hola soy Manuel Perez, web developer de Colombia, resido en Bogotá, tengo conocimientos en construcción y personalización de sitios web, me destaco en el trabajo en equipo y soy un ciclista fan del single speed y del piñón fijo.
                            </p>
                        </div>
                        <div className='second-btn-principal'>
                            <button className='btn-second-btn'>
                                <p className='btn-second-p'>
                                    Descargar CV
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second