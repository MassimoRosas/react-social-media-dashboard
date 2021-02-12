import React from 'react';

import './overviewitem.scss';

const OverviewItem = () => (
  <div className="overview-item">
    <h3 className="overview-item-description">Page Views</h3>
    <img className="overview-item-logo" src="#" alt="social-logo" />
    <p className="overview-item-counter">87</p>
    <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
    <p className="overview-item-progression">3%</p>
  </div>
);

export default OverviewItem;
