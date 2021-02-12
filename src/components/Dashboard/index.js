import React from 'react';

import './dashboard.scss';
import FacebookLogo from '../../../public/images/icon-facebook.svg';
import TwitterLogo from '../../../public/images/icon-twitter.svg';
import InstagramLogo from '../../../public/images/icon-instagram.svg';
import YoutubeLogo from '../../../public/images/icon-youtube.svg';
import UpLogo from '../../../public/images/icon-up.svg';
import DownLogo from '../../../public/images/icon-down.svg';


import DashboardItem from './DashboardItem';

const Dashboard = () => (
  <div className="dashboard">
    <DashboardItem id="@nathanf" counter="1987" dailyCounter="12" socialLogo={FacebookLogo} counterLogo={UpLogo} />
    <DashboardItem id="@nathanf" counter="1044" dailyCounter="99" socialLogo={TwitterLogo} counterLogo={UpLogo} />
    <DashboardItem id="@realnathanf" counter="11K" dailyCounter="1099" socialLogo={InstagramLogo} counterLogo={UpLogo} />
    <DashboardItem id="Nathan F." counter="8239" dailyCounter="144" socialLogo={YoutubeLogo} counterLogo={DownLogo} />
  </div>
);

export default Dashboard;
