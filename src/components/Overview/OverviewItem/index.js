import React from 'react';
import PropTypes from 'prop-types';

import './overviewitem.scss';

const OverviewItem = ({
  description,
  socialLogo,
  counter,
  progression,
  progressionLogo,
}) => (
  <div className="overview-item">
    <h3 className="overview-item-description">{description}</h3>
    <img className="overview-item-logo" src={socialLogo} alt="social-logo" />
    <p className="overview-item-counter">{counter}</p>
    <img className="overview-item-progression-logo" src={progressionLogo} alt="progression-logo" />
    <p className="overview-item-progression">{progression}%</p>
  </div>
);

OverviewItem.propTypes = {
  description: PropTypes.string.isRequired,
  socialLogo: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired,
  progression: PropTypes.string.isRequired,
  progressionLogo: PropTypes.string.isRequired,
};

export default OverviewItem;
