import React, { useState } from 'react';
import './sidebar.css'; // Ensure you have the relevant styles

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to handle the search input

  const menuItems = [
    { icon: "fa-solid fa-square", label: "Home" },
    { icon: "fa-solid fa-angles-right", label: "Campaign" },
    { icon: "fa-solid fa-building-columns", label: "Payments", color: '#2357d1' },
    { icon: "fa-solid fa-link", label: "Influencer" },
    { icon: "fa-regular fa-square-check", label: "Settings" },
    { icon: "fa-regular fa-square-check", label: "Connected Service" },
    { icon: "fa-regular fa-square-check", label: "Password & Security" },
    { icon: "fa-solid fa-arrows-up-down-left-right", label: "Team" },
    { icon: "fa-solid fa-user", label: "Campaign" },
    { icon: "fa-solid fa-users", label: "Payments" },
    { icon: "fa-solid fa-users", label: "Influencer" },
  ];

  // Filter items based on the search term
  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="sidebar-search"
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ color: item.color || 'inherit' }}>
            <i className={item.icon} style={{ color: item.color || 'inherit' }}></i> {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
