import React from 'react';
import img2 from './images/welfare-02.png';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleButtonClick = () => {
    navigate('/find-van'); // use navigate instead of history.push
  };
    return (
      <div className='about-section'>
        <div className='about-image'>
           <img src={img2} alt="img" /> 
        </div>
        <div className='about-info'>
          <h3>Don`t squeeze in a sedan when you could relax in a van.</h3>
          <p>Our mission is to enliven your road trip with the perfect travel van rental.Our vans are
             recertified before each trip to ensure your travel plans can go off without a hitch.
             (Hitch costs extra😜)
          </p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 
            4 wheels.
          </p>
          <div className='coloured-part'>
            <h4>Your destination is waiting.<br/>Your van is ready.</h4>
            <button className='explore-btn' onClick={handleButtonClick}>Explore our vans</button>
          </div>
        </div>
      </div>
    );   
}

export default AboutPage;