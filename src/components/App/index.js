// == Import npm
import React from 'react';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <header className="header">
      <h1 className="title">Social Media Dashboard</h1>
      <h3 className="total-followers">Total Followers: 23,004</h3>
      <h3 className="color-mode">Dark Mode</h3>
    </header>
    <div className="dashboard">
      <div className="dashboard-item">
        <img className="dashboard-logo" src="#" alt="social-logo" />
        <h4 className="dashboard-id">@nathanf</h4>
        <p className="dashboard-counter">1987</p>
        <p className="dashboard-followers">Followers</p>
        <img className="dashboard-daily-counter-logo" src="#" alt="counter-logo" />
        <p className="dashboard-daily-counter">12 Today</p>
      </div>
      <div className="dashboard-item">
        <img className="dashboard-logo" src="#" alt="social-logo" />
        <h4 className="dashboard-id">@nathanf</h4>
        <p className="dashboard-counter">1044</p>
        <p className="dashboard-followers">Followers</p>
        <img className="dashboard-daily-counter-logo" src="#" alt="counter-logo" />
        <p className="dashboard-daily-counter">99 Today</p>
      </div>
      <div className="dashboard-item">
        <img className="dashboard-logo" src="#" alt="social-logo" />
        <h4 className="dashboard-id">@realnathanf</h4>
        <p className="dashboard-counter">11k</p>
        <p className="dashboard-followers">Followers</p>
        <img className="dashboard-daily-counter-logo" src="#" alt="counter-logo" />
        <p className="dashboard-daily-counter">1099 Today</p>
      </div>
      <div className="dashboard-item">
        <img className="dashboard-logo" src="#" alt="social-logo" />
        <h4 className="dashboard-id">Nathan F.</h4>
        <p className="dashboard-counter">8239</p>
        <p className="dashboard-followers">Subscribers</p>
        <img className="dashboard-daily-counter-logo" src="#" alt="counter-logo" />
        <p className="dashboard-daily-counter">144 Today</p>
      </div>
    </div>
    <h2 className="overview-title">Overview - Today</h2>
    <div className="overview">
      <div className="overview-item">
        <h3 className="overview-item-description">Page Views</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">87</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">3%</p>
      </div>
      <div className="overview-item">
        <h3 className="overview-item-description">Likes</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">52</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">2%</p>
      </div>
      <div className="overview-item">
        <h3 className="overview-item-description">Likes</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">5462</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">2257%</p>
      </div>
      <div className="overview-item">
        <h3 className="overview-item-description">Profile Views</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">52K</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">1375%</p>
      </div>
      <div className="overview-item">
        <h3 className="overview-item-description">Reviews</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">117</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">303%</p>
      </div>
      <div className="overview-item">
        <h3 className="overview-item-description">Likes</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">507</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">553%</p>
      </div>
      <div className="overview-item">
        <h3 className="overview-item-description">Likes</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">107</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">19%</p>
      </div>
      <div className="overview-item">
        <h3 className="overview-item-description">Total Views</h3>
        <img className="overview-item-logo" src="#" alt="social-logo" />
        <p className="overview-item-counter">1407</p>
        <img className="overview-item-progression-logo" src="#" alt="progression-logo" />
        <p className="overview-item-progression">12%</p>
      </div>
    </div>
  </div>
);

// == Export
export default App;
