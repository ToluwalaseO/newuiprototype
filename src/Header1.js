import React from 'react';
import './Header1.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'; 
import { faBandcamp } from '@fortawesome/free-brands-svg-icons'; 
import { faCircle } from '@fortawesome/free-solid-svg-icons'; // Import the circle icon if it's part of FontAwesome

function Header() {
  return (
    <div className="header">
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search something" />
      </div>
      <div className="icon1">
        <FontAwesomeIcon icon={faBandcamp} style={{ color: '#63E6BE' }} />
      </div>
      <div className="icon2">
        <FontAwesomeIcon icon={faBell} style={{ color: '#a0a2a1' }} />
      </div>
      <div className="icon3">
        <FontAwesomeIcon icon={faCircle} style={{ color: '#ff0040' }} />
      </div>
      <div className="name">
        Joxy Inc.
      </div>
      <div className="name2">
        Brand
      </div>
    </div>
  );
}

export default Header;
