import React from "react";
import { Link} from "react-router-dom";
import logo from "./assets/logo.jpg";
import './App.css';

function Navbar() {
  return ( 
    <>
    <div className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <Link to="/" >
             <img src={logo} alt="Logo" className="logo" />
            </Link>
           
            <Link to="/" className="brand-name">Wings!</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile"> Employes</Link></li>
            <li><Link to="/contact">Profile</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>
      </div>
    </div>

   
    </>
    
  );
}

export default Navbar;
