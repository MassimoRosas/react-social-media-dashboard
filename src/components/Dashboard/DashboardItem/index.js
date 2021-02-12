import React from 'react';

import './dashboarditem.scss';

const DashboardItem = () => (
  <div className="dashboard-item">
    <img className="dashboard-logo" src="#" alt="social-logo" />
    <h4 className="dashboard-id">@nathanf</h4>
    <p className="dashboard-counter">1987</p>
    <p className="dashboard-followers">Followers</p>
    <img className="dashboard-daily-counter-logo" src="#" alt="counter-logo" />
    <p className="dashboard-daily-counter">12 Today</p>
  </div>
);

export default DashboardItem;
