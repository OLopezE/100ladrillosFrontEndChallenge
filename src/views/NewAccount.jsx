import React from 'react'
import Angel from '../assets/angel.png'
import CreateAccount from '../components/CreateAccount'
import RegisterForm from '../components/RegisterForm'
import '../styles/form.css'

export default function NewAccount() {
  return (
    <div className='flex'>
        <div className='image-container'>
            <img className='image' src={Angel}></img>
        </div>
        <div className='form'>
            <RegisterForm/>
        </div> 
    </div>
  )
}
