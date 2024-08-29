// src/components/ContactPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleButtonClick = () => {
    navigate('/home'); // use navigate instead of history.push
  };
  return (
    <div className='contact-page'>
      <h1>Sorry, the page you were looking for was not found.</h1>
      {/* Add your contact form here */}
      <div className='btn3'>
        <button className='return-button' onClick={handleButtonClick}>Return to home</button>
      </div>

    </div>
  );
}

export default ContactPage;
