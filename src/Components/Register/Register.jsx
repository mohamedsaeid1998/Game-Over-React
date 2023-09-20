import React, { useState } from 'react'
import style from "./Register.module.css"
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/logo.png"

export default function Register() {
const [isLoading, setIsLoading] = useState(false)
const [MessageError, setMessageError] = useState("")
let navigate = useNavigate()

async function handelRegister(values){
  setIsLoading(true)
let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values).catch((err)=>{
  setIsLoading(false)
  setMessageError(err.response.data.message)
})
if (data.message === "success"){
  navigate("/login")

}

}

let validation = Yup.object({
  name:Yup.string().required("Username is required").min(3,"Username minLength is 3").max(20,"userName maxLength is 20"),
  email:Yup.string().required("Email is required").email("this email is invalid"),
  password:Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{5,10}$/,"password start with a capital char and write between 5 to 10 numbers or char"),
  rePassword:Yup.string().required("RePassword is required").oneOf([Yup.ref("password")] , "rePassword and Password must be same"),
  phone:Yup.string().required("Phone is required").matches(/01[0125][0-9]{8}$/,"phone number must be egyptian number"),
})

let formik = useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:"",
  },
  validationSchema:validation,
  onSubmit:handelRegister
})

return <>
  {/*<!-- ========== Start Fixed ========== -->
  
  <!-- fa-moon   fa-sun --> */}

  <span className="position-fixed bottom-0 end-0 m-3 z-3">
    <i role="button" id="mode" className="fa-regular fa-sun fa-xl p-3"></i>
  </span>
  {/*<!-- ========== End Fixed ========== --> */}
  <main className="container register pt-5 justify-content-center align-items-center hstack">
    <section className="register-area shadow w-100 rounded overflow-hidden">
      <div className="row g-0 " >
        <div className="col-lg-5 d-none d-md-block">
          <div className="image"></div>
        </div>
        <div className="col-lg-7">
          <div className="p-4 text-center">
            <img src={logo}  height={90} alt="" />
            <header className="text-center">
              <h1>Create My Account !</h1>
            </header>

            <form onSubmit={formik.handleSubmit} className="row g-3 my-4" id="register">
              <div className="col-md-6">
                <div className="form-data">

                  <input className='form-control deep-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type="text" id='name' name='name' placeholder='Your Name' />
                  {formik.errors.name && formik.touched.name?<div className='alert alert-danger mt-2 error mb-0'>{formik.errors.name}</div> :null}

                </div>
              </div>

              <div className="col-md-6">
                <div className="form-data">

                <input className='form-control deep-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" id='email' name='email' placeholder='Email Address ' />
                {formik.errors.email && formik.touched.email?<div className='alert alert-danger mt-2 error mb-0'>{formik.errors.email}</div> :null}
                {MessageError?<div className='alert alert-danger'>{MessageError}</div>:null}

                </div>
              </div>

              <div className="col-12">
                <div className="form-data">

                <input className='form-control deep-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" id='password' name='password' placeholder='Password' />
                {formik.errors.password && formik.touched.password?<div className='alert alert-danger mt-2 error mb-0'>{formik.errors.password}</div> :null}

                </div>
              </div>

              <div className="col-12">
                <div className="form-data">

                <input className='form-control deep-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type="password" id='rePassword' name='rePassword' placeholder='rePassword' />
                {formik.errors.rePassword && formik.touched.rePassword?<div className='alert alert-danger mt-2 error mb-0'>{formik.errors.rePassword}</div> :null}

                </div>
              </div>

              <div className="col-12">
                <div className="form-data">

                <input className='form-control deep-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" id='phone' name='phone' placeholder='Your Phone' />
                {formik.errors.phone && formik.touched.phone?<div className='alert alert-danger mt-2 error mb-0'>{formik.errors.phone}</div> :null}

                </div>
              </div>

              <div className="col-12">
                {isLoading?<button type="button deep-dark" className="btn w-100 main-btn" id="btnRegister"><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className=" deep-dark btn w-100 main-btn" id="btnRegister">Create Account</button>}
              </div>

            </form>

            <footer>
              <p className="text-center ">
                Already a member ?
                <Link to="/login" className="link-secondary text-decoration-none" role="button"> LogIn 
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
