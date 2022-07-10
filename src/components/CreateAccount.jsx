import React from 'react'
import { useState, useEffect } from 'react'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import Microsoft from '../assets/microsoft.png'

const caracteresEspeciales = '!"#$%/()=?¿^*@,[]{};:_><,.|`+'

export default function ({setMail, setPswd, setConfPswd, pswd, confPswd, mail, setPage}) {

  const [min6, setMin6] = useState(false);
  const [minNum, setMinNum] = useState(false);
  const [minEspChar, setMinEspChar] = useState(false);
  const [noPhrase, setNoPhrase] = useState(false);
  const [noConsecutive, setNoConsecutive] = useState(false);
  const [noSequence, setNoSequence] = useState(false);
  const [validInputs, setValidInputs]= useState(false);



  useEffect(()=>{
    if(pswd.length >= 6){
      setMin6(true);
    }else{
      setMin6(false);
    }
    if(/\d/.test(pswd)){
      setMinNum(true);
    }else{
      setMinNum(false);
    }if(pswd !="100Ladrillos"){
      setNoPhrase(true);
    }else{ setNoPhrase(false)}
    if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pswd)){
      setMinEspChar(true);
    }
    else{setMinEspChar(false)}
    if(true){
      setNoConsecutive(true)
    }else{ console.log("no son tres seguidos")}
    if(true){
      setNoSequence(true)
    }else{ console.log("no son tres consecutivos")}

    if(mail!="" && pswd==confPswd && noConsecutive && noSequence && min6 && minEspChar && minNum && noPhrase){
      setValidInputs(true)
      console.log("valido")

    }else{setValidInputs(false)}


},[pswd, mail, confPswd])

  return (
    <div className='form-container'>
      <div>
      <div className='nav-circle-container mobile'>
            <div className='nav-circle selected'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
        </div>
      <h2>Crear tu cuenta</h2>
        <p>Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro <a href='/'>Aviso de Privacidad, Derechos Arco</a> y nuestros <a href="/">Términos y Condiciones</a>.</p>
        <p>¿Cuál es tu correo electrónico?</p>
        <input 
        className="input"
        placeholder={"tu@correo.com"}
        value = {mail}
        onChange={(event)=>{setMail(event.target.value)}}
        ></input>
        <br/>
        <p>Ingresa una contraseña</p>
        <input 
        className="input"
        type={'password'}
        placeholder={"Contraseña"}
        value = {pswd}
        onChange={(event)=>{setPswd(event.target.value)}}
        ></input>
        <div
        hidden={mail==""}>
        <div className='small-text'>
        <p>Por razones de seguridad tu contraseña debe tener las siguientes características:</p>
        <ul>
          <li style={{color:min6?'#74cc15':'gray'}}>
            <p>Mínimo 6 caracteres (letras, números y caracteres especiales).</p>
          </li>
          <li style={{color:minNum?'#74cc15':'gray'}}>
            <p>Mínimo 1 número.</p>
          </li>
          <li style={{color:minEspChar?'#74cc15':'gray'}}>
            <p>Mínimo 1 de estos caracteres especiales {caracteresEspeciales} </p>
          </li>
          <li style={{color:noPhrase?'#74cc15':'gray'}}>
            <p>No tener la frase "100Ladrillos"</p>
          </li>
          <li style={{color:noConsecutive?'#74cc15':'gray'}}>
            <p>No tener más de 3 caracteres idénticos en forma consecutiva (ej: aaa)</p>
          </li>
          <li style={{color:noSequence?'#74cc15':'gray'}}>
          <p>No tener más de 3 caracteres numericos y/o letras en forma secuencial (ej: 123)</p>
          </li>
        </ul>
        </div>
        <p>Confirma tu contraseña</p>
        <input 
        className="input" 
        type={'password'}
        placeholder={"Contraseña"}
        value = {confPswd}
        onChange={(event)=>{setConfPswd(event.target.value)}}
        ></input>

        </div>

        <div
        hidden={mail!=""}>
          <div className='modalFooter'>
          <p>o regístrate con:</p>
          </div>
          <ul className='modalFooter register-icons'>
            <li><div className='icon-container'><img className='register-icon' src={Google}></img></div></li>
            <li><div className='icon-container'><img className='register-icon' src={Microsoft}></img></div></li>
            <li><div className='icon-container'><img className='register-icon' src={Facebook}></img></div></li>
          </ul>
        </div>
        <div className='footer'>
                <button
                className='button button-form' 
                disabled={!true}
                hidden = {mail==""}
                onClick={()=>{setPage(currPage => currPage + 1)}}
                >Siguiente</button>
                
            </div>
            <div className='nav-circle-container desktop'>
            <div className='nav-circle selected'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
            <div className='nav-circle'></div>
        </div>
      </div>
    </div>
  )
}
