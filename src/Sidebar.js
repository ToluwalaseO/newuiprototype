// Sidebar.js
import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://i.pravatar.cc/150?img=3" alt="Profile" className="icon" />
        <div className="name1">
          <h4>Justinus Lhaksana</h4>
          <p className="email">justinusl@mail.com</p>
        </div>
      </div>

      <input type="text" placeholder="Search..." className="sidebar-search" />

      <ul className="menu">
        <li className="menu-item home"><i className="axis">🏠</i> Home</li>
        <li className="menu-item campaign"><i className="axis">📊</i> Campaign</li>
        <li className="menu-item payments"><i className="axis">💳</i> Payments</li>
        <li className="menu-item influencer"><i className="axis">🤝</i> Influencer</li>

        <li className="settings" onClick={toggleSettings}>
          <i className="axis">⚙️</i> Settings
          {settingsOpen && (
            <ul className="settings-dropdown">
              <li><i className="icon2">🔗</i> Connected Service</li>
              <li><i className="icon2">🔒</i> Password & Security</li>
            </ul>
          )}
        </li>

        <li className="menu-item team"><i className="axis">👥</i> Team</li>
      </ul>

      <div className="upgrade-section">
        <h4>Become Pro Access</h4>
        <p>Try your experience for using more features</p>
        <button className="upgrade-button">Upgrade Pro</button>
      </div>
    </div>
  );
};

export default Sidebar;