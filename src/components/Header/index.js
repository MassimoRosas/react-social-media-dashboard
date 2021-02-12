import React from 'react';

import './header.scss';

const Header = () => (
  <header className="header">
    <h1 className="title">Social Media Dashboard</h1>
    <h3 className="total-followers">Total Followers: 23,004</h3>
    <h3 className="color-mode">Dark Mode</h3>
  </header>
);

export default Header;
