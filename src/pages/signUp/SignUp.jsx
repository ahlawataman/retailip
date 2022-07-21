import React from 'react'
import './signUp.css'
import image from '../../images/logo.jpg'
import SignUpForm from '../../components/signUpForm/SignUpForm'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="signUp">

        <div className="flex-child1">
            <Link to='/'><img className="logo" src={image}/></Link>
            <div className='heading'>
              <div className='heading1'>Welcome to</div>
              <div className='heading2'>Retail Insights Platform</div>
            </div>
        </div>
        <div className="flex-child2">
            <SignUpForm/>
        </div>
  
    </div>
  )
}
