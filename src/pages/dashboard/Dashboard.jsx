import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from "react-router-dom";

export default function Dashboard() {

  const { auth } = useAuth()
  console.log("Hi", auth?.user)


  return (
    <div>Dashboard
      <p><Link to="/">Go back to home</Link></p>
    </div>
  )
}
