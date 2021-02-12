// == Import npm
import React from 'react';

// == Import
import './styles.css';

import Header from '../Header';
import Dashboard from '../Dashboard';
import Overview from '../Overview';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Dashboard />
    <h2 className="overview-title">Overview - Today</h2>
    <Overview />
  </div>
);

// == Export
export default App;
