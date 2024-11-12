// Sidebar.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img src="https://i.pravatar.cc/150?img=3" alt="Profile" className="icon" />
        <div className="name1">
          <h4>Justinus Lhaksana</h4>
          <p className="email">justinusl@mail.com</p>
        </div>
        <div className="justus1">
          <FontAwesomeIcon icon={faArrowsUpDown} style={{ color: '#b3b3b3' }} />
        </div>
        <div className="justus2">
          <FontAwesomeIcon icon={faBandcamp} style={{ color: '#63E6BE' }} />
        </div>
      </div>

      {/* Search Bar */}
      <input type="text" placeholder="Search..." className="sidebar-search" />

      {/* Menu Items */}
      <ul className="menu">
        <li className="menu-item home">
          <i className="axis">🏠</i> Home
        </li>
        <li className="menu-item campaign">
          <i className="axis">📊</i> Campaign
        </li>
        <li className="menu-item payments">
          <i className="axis">💳</i> Payments
        </li>
        <li className="menu-item influencer">
          <i className="axis">🤝</i> Influencer
        </li>

        {/* Settings Menu Item with Dropdown (Always Displayed) */}
        <li className="menu-item settings">
          <i className="axis">⚙️</i> Settings
          <ul className="settings-dropdown">
            <li>
              <i className="icon2">🔗</i> Connected Service
            </li>
            <li>
              <i className="icon2">🔒</i> Password & Security
            </li>
          </ul>
        </li>

        <li className="menu-item team">
          <i className="axis">👥</i> Team
        </li>
      </ul>
      <li className="menu-item campaign2">
          <i className="axis">📊</i> Campaign
        </li>
        <li className="menu-item payments2">
          <i className="axis">💳</i> Payments
        </li>
        <li className="menu-item influencer2">
          <i className="axis">🤝</i> Influencer
        </li>


      {/* Upgrade Section */}
      <div className="upgrade-section">
        <h4>Become Pro Access</h4>
        <p>Try your experience for using more features</p>
        <button className="upgrade-button">Upgrade Pro</button>
      </div>
    </div>
  );
};

export default Sidebar;