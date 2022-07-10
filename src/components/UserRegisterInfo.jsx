import React from 'react'

export default function UserRegisterInfo({setFirstName, firstName, secondName, firsLastName, secondLastName, setSecondName,setFirstLastName, setSecondLastName,setPage}) {
  return (
    <div className='form-container'>
      <div className='nav-circle-container mobile'>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle selected'></div>
            <div className='nav-circle'></div>
        </div>
        <h3>¿Cómo te llamas?</h3>
        <p>Primer nombre</p>
        <input
        className="input"
        placeholder='Primer nombre'
        value ={firstName}
        onChange={(e)=>{setFirstName(e.target.value)}} 
        ></input>
        <p>Segundo nombre (Opcional)</p>
        <input
        className="input"
        placeholder='Segundo nombre'  
        value={secondName}
        onChange={(e)=>{setSecondName(e.target.value)}} 
        ></input>
        <p>Primer apellido</p>
        <input
        className="input"
        placeholder='Primer apellido'
        value={firsLastName}
        onChange={(e)=>{setFirstLastName(e.target.value)}}   
        ></input>
        <p>Segundo apellido (Opcional)</p>
        <input
        className="input"
        placeholder='Segundo apellido' 
        value={secondLastName}
        onChange={(e)=>{setSecondLastName(e.target.value)}} 
        ></input>
        <div className='footer mobile-footer'>
                <button 
                className='button button-form back'
                onClick={()=>{setPage(currPage => currPage - 1)}}
                >Anterior</button>
                <button
                disabled={!(firstName!="" && firsLastName !="")}
                className='button button-form' 
                onClick={()=>{setPage(currPage => currPage + 1)}}
                >Siguiente</button>

            </div>
            <div className='nav-circle-container desktop'>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle selected'></div>
            <div className='nav-circle'></div>
        </div>
    </div>
  )
}
