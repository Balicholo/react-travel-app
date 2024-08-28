import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import img154 from './images/Rectangle-154.png';
import img163 from './images/Rectangle-163.png';
import img55 from './images/image-55.png';
import img57 from './images/image-57.png';
import img153 from './images/Rectangle-153.png';
import img156 from './images/Rectangle-156.png';

const vanData = [
  { id: 1, type: 'simple', name: 'Modest Explorer', price: 60, img: img154 },
  { id: 2, type: 'rugged', name: 'Beach Bum', price: 80, img: img163 },
  { id: 3, type: 'luxury', name: 'Reliable Red', price: 100, img: img55 },
  { id: 4, type: 'simple', name: 'Dreamfinder', price: 65, img: img57 },
  { id: 5, type: 'luxury', name: 'The Cruiser', price: 120, img: img153 },
  { id: 6, type: 'rugged', name: 'Green Wonder', price: 70, img: img156 },
];

function FindVanPage() {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const filteredVans = vanData.filter((van) => (filter ? van.type === filter : true));

  const handleFilterClick = (type) => {
    setFilter(type);
  };

  const handleClearFilters = () => {
    setFilter('');
  };

  const handleCardClick = (van) => {
    navigate(`/van-details/${van.id}`); // Use navigate for redirection
  };

  return (
    <div className='find-van-page'>
      <h1>Explore our van options</h1>
      <div className='options'>
        <p
          className={`simple ${filter === 'simple' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('simple')}
        >
          Simple
        </p>
        <p
          className={`luxury ${filter === 'luxury' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('luxury')}
        >
          Luxury
        </p>
        <p
          className={`rugged ${filter === 'rugged' ? 'selected' : ''}`}
          onClick={() => handleFilterClick('rugged')}
        >
          Rugged
        </p>
        <p
          className={`clear-filters ${filter === '' ? 'selected' : ''}`}
          onClick={handleClearFilters}
        >
          Clear filters
        </p>
      </div>
      <div className='cars-wrapper'>
        {filteredVans.map((van) => (
          <div key={van.id} className='car-card' onClick={() => handleCardClick(van)}>
            <div className='image'>
              <img src={van.img} alt={van.name} />
            </div>
            <div className='text-wrapper'>
              <p className='heading'>{van.name}</p>
              <p>
                <span>${van.price}</span>
                <br /> /day
              </p>
            </div>
            <p className={`${van.type}-tag`}>
              {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindVanPage;
