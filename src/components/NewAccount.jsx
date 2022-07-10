import React from 'react'
import checkMark from '../assets/checkMark.svg'

export default function NewAccount({name, mail, phoneNumber}) {
  return (
    <div className='container'>
        <div className='icon'><img src={checkMark}></img></div>
        <h2>Haz creado una cuenta</h2>
        <p>Tu número de cliente es: ####</p>
        <br/>
        <h1>{name}</h1>
        <p>{mail}</p>
        <p>{phoneNumber}</p>
        <br></br>
        <button className='button'>Iniciar sesión</button>
        <br/>
        <br/>
        <div className='nav-circle-container desktop'>
            <div className='nav-circle '></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle selected'></div>
        </div>
    </div>
  )
}
