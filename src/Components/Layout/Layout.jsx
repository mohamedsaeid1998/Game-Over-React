import React from 'react'
import style from "./Layout.module.css"
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout({token,setToken}) {

  let navigate = useNavigate()

  function logout(){
    localStorage.removeItem("userToken")
    setToken(null)
    navigate('/login')
  }

  return <>
  <Navbar logout={logout} token={token}/>
<Outlet/>
  </>
}
