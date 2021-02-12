import React from 'react';
import PropTypes from 'prop-types';

import './dashboarditem.scss';

const DashboardItem = ({
  id,
  counter,
  dailyCounter,
  socialLogo,
  counterLogo,
}) => (
  <div className="dashboard-item">
    <img className="dashboard-logo" src={socialLogo} alt="social-logo" />
    <h4 className="dashboard-id">{ id }</h4>
    <p className="dashboard-counter">{ counter }</p>
    <p className="dashboard-followers">Followers</p>
    <img className="dashboard-daily-counter-logo" src={counterLogo} alt="counter-logo" />
    <p className="dashboard-daily-counter">{dailyCounter} Today</p>
  </div>
);

DashboardItem.propTypes = {
  id: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired,
  dailyCounter: PropTypes.string.isRequired,
  socialLogo: PropTypes.string.isRequired,
  counterLogo: PropTypes.string.isRequired,
};

export default DashboardItem;
