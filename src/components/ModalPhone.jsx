import React from 'react'
import phoneCode from '../assets/phoneCode.svg'

export default function ({phoneNumber, setOpenModal, setPage}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
        <button
        className='closeButton'
        onClick={()=>{setOpenModal(false)}}
        >x</button>
        <div className='modalHeader'>
            <h2>Verifica tu teléfono celular</h2>
        </div>
        <div className='modalBody'>
            <div className='icon'><img src={phoneCode}></img></div>
            <div className='modalFooter'>
            <p className='modalText'>Hemos enviado un código único de 6 dígitos a tu teléfono celular</p>
            </div>
            
            <h4>{phoneNumber}</h4>
            <br/>
            <p className='small-text'>Tu código expira en 2 minutos</p>
            <div className='code-container'>
            <input
            maxLength={1}
            className="phoneCode-input"
            ></input>
            <input
            maxLength={1}
            className="phoneCode-input"
            ></input>
            <input
            maxLength={1}
            className="phoneCode-input"
            ></input>
            <input
            maxLength={1}
            className="phoneCode-input"
            ></input>
            </div>
            <div
            className='modalFooter'>
              <p
              className='modalText'>¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo nuevamente</p>
            </div>
            
            <button
            className='button sendSMSButton'
            >Reenvíar SMS</button>
        </div>
        <div className='footer modalFooter'>
            <button
            onClick={()=>{setOpenModal(false)}}
            className='button button-form cancelButton'
            >Cancelar</button>
            <button
            className='button button-form'
            onClick={()=>{setPage(currPage => currPage + 1)}}
            >Validar código</button>
        </div>
        </div>
    </div>
  )
}
