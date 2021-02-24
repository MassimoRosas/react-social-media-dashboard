/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ handleClick }) => (
  <header className="header">
    <div className="header-title">
      <h1 className="title">Social Media Dashboard</h1>
      <h3 className="total-followers">Total Followers: 23,004</h3>
    </div>
    <div className="color-mode">
      <h3 className="color-mode-text">Dark Mode</h3>
      <label className="switch">
        <input type="checkbox" onClick={() => handleClick()} />
        <span className="slider round" />
      </label>
    </div>
  </header>
);

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Header;
