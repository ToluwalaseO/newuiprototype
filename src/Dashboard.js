import React from 'react';
import './dashboard.css'; // Make sure to create this CSS file

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="card">
                <span className="icon">👍</span>
                <h3>Total Likes</h3>
                <p>350,809</p>
            </div>
            <div className="card">
                <span className="icon">💬</span>
                <h3>Total Comments</h3>
                <p>186,072</p>
            </div>
            <div className="card">
                <span className="icon">📣</span>
                <h3>Total Shares</h3>
                <p>120,043</p>
            </div>
            <div className="card">
                <span className="icon">👀</span>
                <h3>Engagement</h3>
                <p>48,07%</p>
            </div>
        </div>
    );
};

export default Dashboard;
