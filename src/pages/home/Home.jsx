import React from 'react'
import './home.css'
import useAuth from '../../hooks/useAuth'
import { Link } from "react-router-dom";

export default function Home() {

  const { auth } = useAuth()
  console.log("Home Auth", auth)



  return (
    <div className='home'>
      Home
      <p><Link to="/dashboard">Open dashboard</Link></p>
    </div>
    
  )
}
