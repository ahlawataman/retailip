import React from 'react'
import './login.css'
import image from '../../images/logo.jpg'
import LoginForm from '../../components/loginForm/LoginForm'
import { Link } from 'react-router-dom'

export default function Login() {

  return (
    <div className="flex-container">

        <div className="flex-child1">
            <Link to='/'><img className="logo" src={image}/></Link>
            <div className='heading'>
              <div className='heading1'>Welcome to</div>
              <div className='heading2'>Retail Insights Platform</div>
            </div>
        </div>
        <div className="flex-child2">
            <LoginForm/>
        </div>
  
    </div>
  )
}
