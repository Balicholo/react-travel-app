import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function AuthHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/home' className='logo-link'>#CarRental</Link>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link
          to='/signin'
          className={location.pathname === '/signin' ? 'active' : ''}
          style={{ textDecoration: location.pathname === '/signin' ? 'underline' : 'none' }}
          onClick={handleLinkClick}
        >
          Host
        </Link>
        <Link
          to='/about'
          className={location.pathname === '/about' ? 'active' : ''}
          style={{ textDecoration: location.pathname === '/about' ? 'underline' : 'none' }}
          onClick={handleLinkClick}
        >
          About
        </Link>
        <Link
          to='/find-van'
          className={location.pathname === '/find-van' ? 'active' : ''}
          style={{ textDecoration: location.pathname === '/find-van' ? 'underline' : 'none' }}
          onClick={handleLinkClick}
        >
          Vans
        </Link>
        <Link to='https://travel-app-host.vercel.app/'>
          <i className='ri-account-circle-line'></i>
        </Link>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        {/* Hamburger icon with animation */}
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default AuthHeader;

