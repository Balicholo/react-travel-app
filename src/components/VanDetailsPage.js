// src/components/VanDetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';
import img154 from './images/Rectangle-154.png';
import img163 from './images/Rectangle-163.png';
import img55 from './images/image-55.png';
import img57 from './images/image-57.png';
import img153 from './images/Rectangle-153.png';
import img156 from './images/Rectangle-156.png';

const vanData = [
  { id: 1, type: 'simple', name: 'Modest Explorer', price: 60, img: img154, description: 'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!' },
  { id: 2, type: 'rugged', name: 'Beach Bum', price: 80, img: img163, description: 'Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you wont find in an ordinary camper.' },
  { id: 3, type: 'luxury', name: 'Reliable Red', price: 100, img: img55, description: 'Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. Theres a small kitchen, so you can cook if you need to. Youll feel like home as soon as you step out of it.' },
  { id: 4, type: 'simple', name: 'Dreamfinder', price: 65, img: img57, description: 'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.' },
  { id: 5, type: 'luxury', name: 'The Cruiser', price: 120, img: img153, description: 'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.' },
  { id: 6, type: 'rugged', name: 'Green Wonder', price: 70, img: img156, description: 'With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle thats perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.' },
];

function VanDetailsPage() {
  const { id } = useParams();
  const van = vanData.find((van) => van.id === parseInt(id));
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleButtonClick = () => {
    navigate('/sign-in'); // use navigate instead of history.push
  };

  if (!van) {
    return <div>Van not found!</div>;
  }

  return (
    <div className="van-details-page">
      <Link to="/find-van" className="back-link"><i class="ri-arrow-left-line"></i>Back to all vans</Link> {/* Add back link */}
      <div className='description-info'>
        <div className='car-image'>
         <img src={van.img} alt={van.name} />
        </div>
        <div className='information'>
          <p className='type'>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</p>
          <p>{van.name}</p>
          <p>${van.price} /day</p>
          <p>{van.description}</p>
          <button className='rent-button' onClick={handleButtonClick}>Rent this van</button>
        </div>
      </div>

    </div>
  );
}

export default VanDetailsPage;
