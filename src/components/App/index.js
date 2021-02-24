// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';

import Header from '../Header';
import Dashboard from '../Dashboard';
import Overview from '../Overview';

// == Composant
const App = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light');

  function handleClick() {
    if (theme === 'dark') {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
    else {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <div className={`app ${theme}`}>
      <Header handleClick={handleClick} />
      <Dashboard />
      <h2 className="overview-title">Overview - Today</h2>
      <Overview />
    </div>
  );
};

// == Export
export default App;
