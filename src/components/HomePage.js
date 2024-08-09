// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleButtonClick = () => {
    navigate('/find-van'); // use navigate instead of history.push
  };

  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement.
          Rent the perfect van to make your perfect road trip.
        </p>
        <button onClick={handleButtonClick}>Find your van</button>
      </div>
    </section>
  );
}

export default HomePage;
