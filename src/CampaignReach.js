import React from 'react';
import './campaignReach.css'; // Create this CSS file for styling

const CampaignReach = () => {
    return (
        <div className="campaign-reach">
            <div className="map">
            <div className="map-placeholder">
    <img src="/image.png" alt="Map" style={{ width: '50%', height: 'auto' }} />
</div>

                <div className="info">
                    <div className="info-box">
                        <span className="country">Canada</span>
                        <span className="users">87,142</span>
                    </div>
                    <div className="info-box">
                        <span className="country">Germany</span>
                        <span className="users">90,069</span>
                    </div>
                    <div className="info-box">
                        <span className="country">Indonesia</span>
                        <span className="users">120,904</span>
                    </div>
                    <div className="info-box">
                        <span className="country">Uruguay</span>
                        <span className="users">85,321</span>
                    </div>
                </div>
            </div>
            <div className="campaign-summary">
                <h3>Campaign Reach</h3>
                <p>12 country</p>
                <h3>User Reached</h3>
                <p>180,807,839 user</p>
                <h3>Period</h3>
                <p>9 month</p>
                <div className="updated">
                    <p>Updated 2s ago</p>
                    <button className="refresh-button">Click to refresh</button>
                </div>
            </div>
        </div>
    );
};

export default CampaignReach;
