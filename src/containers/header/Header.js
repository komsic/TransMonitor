import React, { useState } from 'react';
import './Header.css';
import bell from '../../assets/images/bell.svg';
import profilePhoto from '../../assets/images/komsic.jpg';
import Search from '../../components/search/Search';

const Header = () => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value: v } }) => setValue(v);

  return (
    <header className="header">
      <h1 className="header__title">TransMonitor</h1>

      <nav className="header__nav">
        <Search
          value={value}
          onSearchChange={handleChange}
        />

        <a href="#" className="nav-item">Support</a>
        <a href="#" className="nav-item">FAQ</a>

        <div className="nav-item notification">
          <img src={bell} alt="notification bell icon" />

          <span className="badge">8</span>
        </div>

        <div className="profile">
          <div className="profile__greet">
            <p>Hello</p>
            <p>Oluwakele Ojo</p>
          </div>

          <img src={profilePhoto} alt="profile" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
