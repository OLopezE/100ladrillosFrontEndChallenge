import React from 'react'
import { useState } from 'react'
import ModalPhone from './ModalPhone'

export default function ({phoneNumber, setPhoneNumber, setPage}) {

  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal(){
    if(phoneNumber!=""){
      setOpenModal(true)
    }else{
      setOpenModal(false)
    }
  }
  
  return (
    <div>
      <div className='nav-circle-container mobile'>
            <div className='nav-circle'></div>
            <div className='nav-circle selected'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
        </div>
        <h2>¿Cuál es tu telefono celular?</h2>
        <input 
        className="input"
        placeholder='1234-5678'
        value ={phoneNumber}
        onChange={(e)=>{setPhoneNumber(e.target.value)}}
        ></input>
        {openModal && <ModalPhone phoneNumber={phoneNumber} setOpenModal={setOpenModal} setPage={setPage}/>}
        <div
        className='footer mobile-footer'>
                <button 
                hidden={openModal}
                className='button button-form back'
                onClick={()=>{setPage(currPage => currPage - 1)}}
                >Anterior</button>
                <button
                hidden={openModal}
                disabled = {phoneNumber == ""}
                className='button button-form' 
                onClick={()=>{handleOpenModal()}}
                >Siguiente</button>
            </div>
            <div className='nav-circle-container desktop'>
            <div className='nav-circle '></div>
            <div className='nav-circle selected'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
        </div>
    </div>
  )
}
