import React from 'react';

import './overview.scss';

import OverviewItem from './OverviewItem';
import FacebookLogo from '../../../public/images/icon-facebook.svg';
import TwitterLogo from '../../../public/images/icon-twitter.svg';
import InstagramLogo from '../../../public/images/icon-instagram.svg';
import YoutubeLogo from '../../../public/images/icon-youtube.svg';
import UpLogo from '../../../public/images/icon-up.svg';
import DownLogo from '../../../public/images/icon-down.svg';

const Overview = () => (
  <div className="overview">
    <OverviewItem
      description="Page Views"
      socialLogo={FacebookLogo}
      counter="87"
      progressionLogo={UpLogo}
      progression="3"
      counterGrowth="Up"
    />
    <OverviewItem
      description="Likes"
      socialLogo={FacebookLogo}
      counter="52"
      progressionLogo={DownLogo}
      progression="2"
      counterGrowth="Down"
    />
    <OverviewItem
      description="Likes"
      socialLogo={InstagramLogo}
      counter="5462"
      progressionLogo={UpLogo}
      progression="2257"
      counterGrowth="Up"
    />
    <OverviewItem
      description="Profile Views"
      socialLogo={InstagramLogo}
      counter="52K"
      progressionLogo={UpLogo}
      progression="3"
      counterGrowth="Up"
    />
    <OverviewItem
      description="Retweets"
      socialLogo={TwitterLogo}
      counter="117"
      progressionLogo={UpLogo}
      progression="303"
      counterGrowth="Up"
    />
    <OverviewItem
      description="Likes"
      socialLogo={TwitterLogo}
      counter="507"
      progressionLogo={UpLogo}
      progression="553"
      counterGrowth="Up"
    />
    <OverviewItem
      description="Likes"
      socialLogo={YoutubeLogo}
      counter="107"
      progressionLogo={DownLogo}
      progression="19"
      counterGrowth="Down"
    />
    <OverviewItem
      description="Total Views"
      socialLogo={YoutubeLogo}
      counter="1407"
      progressionLogo={DownLogo}
      progression="12"
      counterGrowth="Down"
    />
  </div>
);

export default Overview;
