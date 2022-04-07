import React from 'react';
import api from '../../utils/api';

import './Card.css';

const Card = () => {

  return (
    <div className="card">
      <div className="card__image-container">
        <div className="card__creator-box">
          <p className="card__text">created by</p>
          <p className="card__creator-name">Fkgjghgnhfj Rtgjgjhkhk</p>
        </div>
        <h2 className="card__title">Ferrgtgrgtg ggh Frgrgergeg gghjkyt</h2>
      </div>
      <ul className="card__price-box">
        <li>
          <p className="card__numbers-title">available</p>
          <p className="card__numbers">1 of 50</p>
        </li>
        <li>
          <p className="card__numbers-title card__numbers-title_right-column">price</p>
          <p className="card__numbers card__numbers_right-column">0.07 ETH</p>
        </li>
      </ul>
    </div>
  );
}

export default Card;
