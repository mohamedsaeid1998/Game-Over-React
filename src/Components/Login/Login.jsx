import React, { useState } from 'react'
import style from "./Login.module.css"
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/logo.png"


export default function Login({userData}) {
const [isLoading, setIsLoading] = useState(false)
const [MessageError, setMessageError] = useState("")
let navigate = useNavigate()

async function handelLogin(values){
  setIsLoading(true)
let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).catch((err)=>{
  setIsLoading(false)
  setMessageError(err.response.data.message)
})
if (data.message === "success"){
  localStorage.setItem("userToken",data.token)
  userData()
  navigate("/")

}
}

let validation = Yup.object({
  email:Yup.string().required("Email is required").email("this email is invalid"),
  password:Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{5,10}$/,"password start with a capital char and write between 5 to 10 numbers or char"),
})

let formik = useFormik({
  initialValues:{
    email:"",
    password:"",

  },
  validationSchema:validation,
  onSubmit:handelLogin
})

return <>
  {/*
  <!-- ========== Start Fixed ========== -->
  <!-- fa-moon   fa-sun --> */}

<span className="position-fixed bottom-0 end-0 m-3 z-3">
    <i role="button" id="mode" className="fa-regular fa-sun fa-xl p-3"></i>
  </span>
  {/*
  <!-- ========== End Fixed ========== --> */}
  <main className="container register pt-5 hstack">
    <section className="register-area shadow w-100 rounded overflow-hidden">
      <div className="row g-0">
        <div className="col-lg-5 d-none d-md-block">
          <div className="image"></div>
        </div>
        <div className="col-lg-7">
          <div className="p-4 text-center">
          <img src={logo}  height={90} alt="" />
            <header className="text-center">
              <h1>Log in to GameOver</h1>
            </header>

            <form onSubmit={formik.handleSubmit} className="row g-3 my-4" id="login">

              <div className="col-12">
                <div className="form-data">

                <input className='form-control w-75 deep-dark mx-auto  ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" id='email' name='email' placeholder='Email Address ' />
                {formik.errors.email && formik.touched.email?<div className='alert alert-danger mt-2 w-75 mx-auto error mb-0'>{formik.errors.email}</div> :null}
                {MessageError?<div className='alert alert-danger w-75 mx-auto error'>{MessageError}</div>:null}

                </div>
              </div>

              <div className="col-12">
                <div className="form-data ">

                <input className='form-control w-75 deep-dark mx-auto' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" id='password' name='password' placeholder='Password' />
                {formik.errors.password && formik.touched.password?<div className='alert alert-danger mt-2 w-75 mx-auto error mb-0'>{formik.errors.password}</div> :null}

                </div>
              </div>

              <div className="col-12 d-flex justify-content-center">
                {isLoading?<button type="button" className="btn deep-dark main-btn w-75" id="btnLogin"><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className=" deep-dark btn w-75 main-btn" id="btnLogin">Login</button>}
              </div>

            </form>

            <footer>
              <p className="text-center ">
              Not a member yet ?
                <Link to="/register" className="link-secondary text-decoration-none" role="button"> Create Account 
                <i className="fa-solid fa-angle-right"></i></Link>
              </p>
            </footer>

          </div>
        </div>
      </div>
    </section>
  </main>
</>
}





