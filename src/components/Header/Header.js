import React from 'react';

import './Header.css';

const Header = ({ onClick }) => {

  return (
    <div className="header">
      <h1 className="header__title">Explore</h1>
      <div className="header__sort-box">
        <p className="header__subtitle">Buy and sell digital fashion NFT art</p>
        <button
          type="button"
          className="header__button"
          onClick={onClick}
        >
          available
        </button>
      </div>
    </div>
  );
}

export default Header;
