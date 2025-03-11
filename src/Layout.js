import React from "react";
import { Outlet } from "react-router-dom";  
import Navbar from './Navbar'

function Layout() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className='footer'>
      <div className='footer-container'>
        <h4>Thanks for visiting our Wings!</h4>
        <p>Wings! is a platform where you can find the best wings in the world.</p>
        <p>© 2021 Wings! All Rights Reserved.</p>
        
      </div>
    </footer>
    </div>
  );
}

export default Layout;
