import React from "react";
import { NavLink} from "react-router-dom";
import logo from "./assets/logo.jpg";
import './App.css';

function Navbar() {
  return ( 
    <>
    <div className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <NavLink to="/" >
             <img src={logo} alt="Logo" className="logo" />
            </NavLink>
           
            <NavLink to="/" className="brand-name">Wings!</NavLink>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/profile"> Employes</NavLink></li>
            <li><NavLink to="/contact">Profile</NavLink></li>
            <li><NavLink to="/form">Form</NavLink></li>
            <li><NavLink to="/login">Login/Register</NavLink></li>



          </ul>
        </nav>
      </div>
    </div>

   
    </>
    
  );
}

export default Navbar;
