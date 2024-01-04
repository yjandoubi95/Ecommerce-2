import React, { useState } from 'react';

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? 'star filled' : 'star empty'}
      onClick={() => handleStarClick(index + 1)}
    >
      &#9733;
    </span>
  ));

  return <div className='starRating'>{stars}</div>;
};

export default StarRating;
