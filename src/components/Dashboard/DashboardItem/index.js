import React from 'react';
import PropTypes from 'prop-types';

import './dashboarditem.scss';

const DashboardItem = ({
  id,
  counter,
  dailyCounter,
  socialLogo,
  counterLogo,
  socialMedia,
}) => (
  <div className="dashboard-item" id={socialMedia}>
    <div className="dashboard-user">
      <img className="dashboard-logo" src={socialLogo} alt="social-logo" />
      <span className="dashboard-id">{ id }</span>
    </div>
    <p className="dashboard-counter">{ counter }</p>
    <p className="dashboard-followers">Followers</p>
    <div className="dashboard-progression">
      <img className="dashboard-daily-counter-logo" src={counterLogo} alt="counter-logo" />
      <span className="dashboard-daily-counter">{dailyCounter} Today</span>
    </div>
  </div>
);

DashboardItem.propTypes = {
  id: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired,
  dailyCounter: PropTypes.string.isRequired,
  socialLogo: PropTypes.string.isRequired,
  counterLogo: PropTypes.string.isRequired,
  socialMedia: PropTypes.string.isRequired,
};

export default DashboardItem;
