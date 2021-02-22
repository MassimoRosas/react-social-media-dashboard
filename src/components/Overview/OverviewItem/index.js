import React from 'react';
import PropTypes from 'prop-types';

import './overviewitem.scss';

const OverviewItem = ({
  description,
  socialLogo,
  counter,
  progression,
  progressionLogo,
  counterGrowth,
}) => (
  <div className="overview-item">
    <div className="overview-item-first-line">
      <h3 className="overview-item-description">{description}</h3>
      <img className="overview-item-logo" src={socialLogo} alt="social-logo" />
    </div>
    <div className="overview-item-second-line">
      <p className="overview-item-counter">{counter}</p>
      <div className="overview-item-progression">
        <img className="overview-item-progression-logo" src={progressionLogo} alt="progression-logo" />
        <p className={
        counterGrowth === 'Up' ? 'overview-item-progression-counter overview-item-progression-counter--is-up' : 'overview-item-progression-counter overview-item-progression-counter--is-down'
        }
        >{progression}%
        </p>
      </div>
    </div>
  </div>
);

OverviewItem.propTypes = {
  description: PropTypes.string.isRequired,
  socialLogo: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired,
  progression: PropTypes.string.isRequired,
  progressionLogo: PropTypes.string.isRequired,
  counterGrowth: PropTypes.string.isRequired,
};

export default OverviewItem;
