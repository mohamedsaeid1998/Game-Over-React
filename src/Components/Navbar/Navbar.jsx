import React from 'react'
import style from "./Navbar.module.css"
import logo from "../../Assets/logo.png"
import { Link } from 'react-router-dom'

export default function Navbar({token,logout}) {

  return <>
<nav className="navbar navbar-expand-lg  fixed-top mb-5 navbar-dark bg-dark align-items" id="navbar-example">
    <div className="container ">
    <Link to="/" className='navbar-brand me-5 text-decoration'><img src={logo}  height={50}  alt=''/><span className='h6'>GAME OVER</span></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">

      {token !== null?<ul className="navbar-nav me-auto mt-2 mt-lg-0">

<li className="nav-item ">
  <Link className="nav-link " to="/">Home</Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="all">All</Link>
</li>

<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PlatForms</Link>
  <div className="dropdown-menu" aria-labelledby="dropdownId">
    <Link className="dropdown-item " to="pc/pc">pc</Link>
    <Link className="dropdown-item " to="browser/browser">browser</Link>
  </div>
</li>

<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort-by</Link>
  <div className="dropdown-menu" aria-labelledby="dropdownId">
    <Link className="dropdown-item" to="release/release-date">release-date</Link>
    <Link className="dropdown-item" to="popularity/popularity">popularity</Link>
    <Link className="dropdown-item" to="alphabetical/alphabetical">alphabetical</Link>
    <Link className="dropdown-item" to="relevance/relevance">relevance</Link>
  </div>
</li>
<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</Link>
  <div className="dropdown-menu" aria-labelledby="dropdownId">
    <Link className="dropdown-item" to="racing/racing">racing</Link>
    <Link className="dropdown-item" to="sports/sports">sports</Link>
    <Link className="dropdown-item" to="social/social">social</Link>
    <Link className="dropdown-item" to="shooter/shooter">shooter</Link>
    <Link className="dropdown-item" to="openWorld/open-world">openWorld</Link>
    <Link className="dropdown-item" to="zombie/zombie">zombie</Link>
    <Link className="dropdown-item" to="fantasy/fantasy">fantasy</Link>
    <Link className="dropdown-item" to="actionRpg/action-rpg">action-rpg</Link>
    <Link className="dropdown-item" to="action/action">action</Link>
    <Link className="dropdown-item" to="flight/flight">flight</Link>
    <Link className="dropdown-item" to="battleRoyale/battle-royale">battle-royale</Link>
  </div>
</li>

</ul>:null }
      
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

{token === null ?

<>
<li className="nav-item">

<Link className="nav-link btn btn-outline-primary mx-2" to="login">Login</Link>

</li>

<li className="nav-item">

<Link className="nav-link btn btn-outline-warning mx-2" to="register">Join Free</Link>

</li>
</>


:
<li className="nav-item">

<span onClick={()=>{logout()}} className="nav-link btn btn-outline-danger mx-2" >Logout</span>

</li> 
}









        
      </ul>
    </div>
  </div>
</nav>


  </>
}







<nav className="navbar navbar-expand-lg nav-bg border-bottom border-dark">
<div className="container">
   <h5 className="navbar-brand mb-0 text-uppercase">
      <img src="./assets/images/logo-sm.png" alt="logo photo" style="max-width: 40px" /> GameOver
   </h5>
   <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
   >
      <span className="navbar-toggler-icon "></span>
   </button>
   <div className="collapse small navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 menu">
         <li className="nav-item h5">
            <a role="button" className="nav-link active text-uppercase" aria-current="page" data-category="mmorpg">mmorpg</a>
         </li>
         <li className="nav-item">
            <a role="button" className="nav-link text-uppercase" data-category="shooter">shooter</a>
         </li>
         <li className="nav-item">
            <a role="button" className="nav-link text-uppercase" data-category="sailing">sailing</a>
         </li>
         <li className="nav-item">
            <a role="button" className="nav-link text-uppercase" data-category="permadeath">permadeath</a>
         </li>
         <li className="nav-item">
            <a role="button" className="nav-link text-uppercase" data-category="superhero">superhero</a>
         </li>
         <li className="nav-item">
            <a role="button" className="nav-link text-uppercase" data-category="pixel">pixel</a>
         </li>
         <li className="nav-item">
            <a role="button" className="nav-link text-uppercase" data-category="pvp">pvp</a>
         </li>
         <li className="nav-item">
            <a role="button" className="nav-link text-uppercase" data-category="action">action</a>
         </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0">
         <li className="nav-item">
            <span role="button" className="nav-link btn logout-btn btn-outline-warning" id="logout-btn">LogOut</span>
         </li>
      </ul>
   </div>
</div>
</nav>