// src/components/AuthHeader.js
import React from 'react';
import { Link,useLocation } from 'react-router-dom';

function AuthHeader() {
  const location = useLocation();
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/' className='logo-link'>#CarRental</Link>
      </div>
      <div className='nav-links'>
        <Link to='/sign-in' className={location.pathname === "/sign-in" ? "active":""}style={{textDecoration: location.pathname === "/sign-in" ? "underline":"none"}}>Host</Link>
        <Link to='/about' className={location.pathname === "/about" ? "active":""}style={{textDecoration: location.pathname === "/about" ? "underline":"none"}}>About</Link>
        <Link to='/find-van' className={location.pathname === "/find-van" ? "active":""}style={{textDecoration: location.pathname === "/find-van" ? "underline":"none"}}>Vans</Link>
        <Link to='https://travel-app-host.vercel.app/'><i class="ri-account-circle-line"></i></Link>
      </div>
    </nav>
  );
}

export default AuthHeader;
