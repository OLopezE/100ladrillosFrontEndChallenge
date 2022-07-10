import React from 'react'
import { useState, useEffect } from 'react'
import CreateAccount from './CreateAccount'
import PhoneConfirmation from './PhoneConfirmation'
import UserRegisterInfo from './UserRegisterInfo'
import NewAccount from './NewAccount'
import Curp from './Curp'
import '../styles/form.css'

export default function RegisterForm() {
    const [page, setPage] =useState(0);
    const [mail, setMail] = useState("");
    const [pswd, setPswd] = useState("");
    const [curp, setCurp] = useState("");
    const [confPswd, setConfPswd] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [firstLastName, setFirstLastName] = useState("");
    const [secondLastName, setSecondLastName] = useState("");



    const Pages = 
    [
    <CreateAccount setMail={setMail} setPswd={setPswd} setConfPswd={setConfPswd} pswd = {pswd} confPswd = {confPswd} mail = {mail} setPage ={setPage}/>, 
    <PhoneConfirmation phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setPage={setPage} />, 
    <UserRegisterInfo setFirstName={setFirstName} firstName={firstName} secondName={secondName} firstLastName={firstLastName} secondLastName={secondLastName} setSecondName={setSecondName} setFirstLastName={setFirstLastName} setSecondLastName={setSecondLastName} setPage={setPage}/>,
    <Curp setCurp={setCurp} setPage={setPage}/>,
    <NewAccount name = {firstName + " " + secondName + " " + firstLastName+ " " + secondLastName} mail ={mail} phoneNumber={phoneNumber}/>
    
    ]





    return (

        <div className='form-container'>
            <div className='header'></div>
            <div className='body'>{Pages[page]}</div>
            <div className=' mobile'>
                <div className='text-center'>
                <p>¿Ya tienes una cuenta?</p>
                <a
                href='/'
                className='button'
                >Iniciar sesión</a>
                </div>

            </div>
        </div>
        
    )
}
