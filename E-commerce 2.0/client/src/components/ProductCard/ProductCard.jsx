import React from 'react';
import manette from '../../assets/havicManette.png';
import './ProductCard.css';
import StarRating from '../StartRating/StartRating';

const ProductCard = () => {
  const handleRatingChange = (selectedRating) => {
    // Do something with the selectedRating, such as storing it in state
    console.log('Selected Rating:', selectedRating);
  };

  return (
    <div className='allCard'>
      <div className='prudCard'>
        <img className='prodImg' src={manette} alt="" />
        <div className='addToCart'>
          <p className='addText'>Add to Cart</p>
        </div>
      </div>
      <div className='productDetails'>
        <p className='productName'>HAVIT HV-G92 GAMEPAD</p>
        <div className='price'>
          <p className='productPrice'>$120</p>
          <p className='oldPrice'><del>$160</del></p>
        </div>
        <StarRating onChange={handleRatingChange} />
      </div>
    </div>
  );
};

export default ProductCard;
