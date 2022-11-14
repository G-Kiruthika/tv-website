import React from 'react'
import './navbar.css'
import { NavLink} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo from '../../asserts/images/nav-logo.webp'
function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-light py-2">
    <div className="container-fluid">
      <img src={logo} alt="" width="200px" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <NavLink className="nav-link" aria-current="page" ></NavLink>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/products">Product</NavLink>
          <NavLink className="nav-link">Global</NavLink>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar