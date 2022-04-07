import React from 'react';

import './Card.css';

const Card = ({ card }) => {

  return (
    <div className="card">
      <div className="card__image-container">
        <div className="card__creator-box">
          <p className="card__text">created by</p>
          <p className="card__creator-name">{card.created_by.display_name}</p>
        </div>
        <h2 className="card__title">{card.name}</h2>
      </div>
      <ul className="card__price-box">
        <li>
          <p className="card__numbers-title">available</p>
          <p className="card__numbers">{card.quantity_available} of {card.quantity}</p>
        </li>
        <li>
          <p className="card__numbers-title card__numbers-title_right-column">price</p>
          <p className="card__numbers card__numbers_right-column">{card.initial_price} ETH</p>
        </li>
      </ul>
    </div>
  );
}

export default Card;
