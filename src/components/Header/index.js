import React from 'react';

import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header-title">
      <h1 className="title">Social Media Dashboard</h1>
      <h3 className="total-followers">Total Followers: 23,004</h3>
    </div>
    <div className="color-mode">
      <h3 className="color-mode-text">Dark Mode</h3>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  </header>
);

export default Header;
