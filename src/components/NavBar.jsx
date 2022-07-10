import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/navBar.css'
import LogoDesktop from '../assets/100ladrilloslogo.svg'
import LogoMobile from '../assets/100ladrilloswhite.svg'
import Angel from '../assets/angel.png'

export default function NavBar() {
    
  return (
    <div >
        <div className='nav' >
            <div className='hamburger'>
                <button
                className='button'>
                    <div className='burger-icon'/>
                </button>
            </div>
            <div className='nav-logo'>
                <a href="/"><div className='logo'/></a>
            </div>
            <ul>
            <li>
                <button className='button howitworks'>Cómo funciona</button>
            </li>
            <li>
                <button className='button enter'>Entrar</button>
            </li>
            <li>
                <button className='button register'>Registrarme</button>
            </li>
            </ul>
        </div>
    
    </div>
  )
}
