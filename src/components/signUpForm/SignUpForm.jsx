import React, { useEffect, useRef } from 'react';
import './signUpForm.css'
import { useForm } from "react-hook-form";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Axios from 'axios';

export default function SignUpForm() {
  const { register, handleSubmit, formState: {errors}, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  // useEffect(() => {
  //   Axios.get('https://reqres.in/api/users/2').then((response) => {
  //     console.log(response.data.data);
  //   });
  // }, []);

  const onSubmit = async data => {
    console.log(data);
    window.location = 'http://localhost:3000/login'
  }

  return (
    <div className="grid">
        <form className="form login" autoComplete="off" onSubmit={e => e.preventDefault()}>

          <div className="form__field">
            <label htmlFor="name">
              <svg className="icon">
                <PersonIcon/>
              </svg>
              <span className="hidden">Name</span>
            </label>
            <input {...register("name", { required: "*This field is required." })} className="form__input" type="text" placeholder="Name" />
          </div>
          {errors.name && <p className="error">{errors.name.message}</p>}

          <div className="form__field">
            <label htmlFor="email">
              <svg className="icon">
                <MailIcon/>
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
              message: "Pasword must have atleast 8 characters",
            } })} className="form__input" type="password" placeholder="Password" />
          </div>

          <div className="form__field">
            <label htmlFor="password_confirm">
              <svg className="icon">
                <LockIcon/>
              </svg>
              <span className="hidden">Confirm Password</span>
            </label>
            <input {...register("password_confirm", { validate: value => value == password.current || "The passwords do not match"})} className="form__input" type="password" placeholder="Confirm Password" />
          </div>
          {errors.password_confirm && <p className="error">{errors.password_confirm.message}</p>}

          <input type="submit" onClick={handleSubmit(onSubmit)}/>
        </form>

      </div>
  )
}

