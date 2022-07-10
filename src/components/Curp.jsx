import React from 'react'

export default function Curp({setCurp, setPage}) {
  return (
    <div>
        <div className='nav-circle-container mobile'>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle selected'></div>
        </div>
        <h2>¿Cuál es tu CURP?</h2>
        <input 
        className='input'
        onChange={(e)=>{setCurp(e.target.value)}}
        ></input>
        <p>Consulta tu <a href="/">CURP</a></p>
        <p>Si soy extranjero <a href="/">¿Cómo solicito mi CURP?</a></p>
        <div className='footer mobile-footer'>
        <button
        className='button button-form back'
        onClick={()=>{setPage(currPage => currPage - 1)}}
        >Anterior</button>
        <button
        className='button button-form'
        onClick={()=>{setPage(currPage => currPage + 1)}}
        >Crear cuenta</button>
        </div>
        <div className='nav-circle-container desktop'>
            <div className='nav-circle '></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle selected'></div>
        </div>
        
    </div>
  )
}
