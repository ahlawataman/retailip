import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
// Importing axios from api folder (base url already mentioned)
import axios from '../../api/axios';
import './loginForm.css'
import useAuth from '../../hooks/useAuth'

const LOGIN_URL = '/api/login'

export default function LoginForm() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const { auth, setAuth } = useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [errMsg, setErrMsg] = useState('')

  const onSubmit = async (data) => {
    console.log(data)

    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({email: data.email, password: data.password }), 
        {headers: { 'Content-Type': 'application/json'}, withCredentials: true }
        )
        // console.log(JSON.stringify(response?.data))
        const jwtToken = response?.data?.jwt;
        const user = response?.data?.name;
        setAuth({user, jwtToken})
        navigate(from, { replace: true })
    } catch (err) {
      // MENTION THESE STATUS IN THE BACKEND
      if(!err?.response) {
        setErrMsg('No Server Response');
        // console.log('No Server Response');
      } else if (err.response?.status === 400){
        setErrMsg('Missing Username or Password');
        // console.log('Missing Username or Password');
      } else if(err.response?.status === 401) {
        setErrMsg('Unauthorized');
        // console.log('Unauthorized');
      } else {
        setErrMsg('Login Failed');
        // console.log('Login Failed');
      }
    }
  }


  return (
      <div className="grid">
        <p className={errMsg? "error": "offscreen"}>{errMsg}</p>
        <form className="form login" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__field">
            <label htmlFor="login__username">
              <svg className="icon">
                <PersonIcon/>
              </svg>
              <span className="hidden">Username</span>
            </label>
            <input {...register("email", { required: "*This field is required." })} className="form__input" type="text" placeholder="Email Address" />
          </div>
          {errors.email && <p className="error">{errors.email.message}</p>}

          <div className="form__field">
            <label htmlFor="password">
              <svg className="icon">
                <LockIcon/>
              </svg>
              <span className="hidden">Password</span>
            </label>
            <input {...register("password", { required: "*This field is required.", minLength: {
              value: 8,
              message: "Min length is 8",
            } })} className="form__input" type="password" placeholder="Password" />
          </div>
          {errors.password && <p className="error">{errors.password.message}</p>}

          <input type="submit"/>
        </form>

        <p className="text--center">Not a member? <Link to='/signup'><u><span style={{"fontWeight": "500", "color": "black"}}>Sign up now</span></u></Link> <svg className="icon">
            <ArrowForwardIcon/>
          </svg></p>
      </div>
  );
}