import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const [activeTab, setActiveTab] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Contact/') {
      setActiveTab('Home');
    } else if (location.pathname === '/Contact/add') {
      setActiveTab('AddContact');
    } else if (location.pathname === '/Contact/about') {
      setActiveTab('About');
    }
  }, [location]);
  return (
    <div className="header">
      <p className="logo">Contact App</p>
      <div className="header-right">
        <Link to="/Contact/">
          <p
            className={`${activeTab === 'Home' ? 'active' : ''} `}
            onClick={() => setActiveTab('Home')}
          >
            Home
          </p>
        </Link>
        <Link to="/Contact/add">
          <p
            className={`${activeTab === 'AddContact' ? 'active' : ''} `}
            onClick={() => setActiveTab('AddContact')}
          >
            Add contact
          </p>
        </Link>
        <Link to="/Contact/about">
          <p
            className={`${activeTab === 'About' ? 'active' : ''} `}
            onClick={() => setActiveTab('About')}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
