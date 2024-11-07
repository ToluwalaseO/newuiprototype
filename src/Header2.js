import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import './header2.css';

const Header2 = () => {
    return (
        <div className="header2">
            <h1 className="header2-title">Blue Chips Chicago</h1>
            <p className="header2-subtitle">Diam nullam quis nunc at pretium augue</p>
            <div className="header2-platforms">
                <div className="header2-tiktok">
                    <p>Tiktok</p>
                </div>
                <div className="header2-instagram">
                    <p>Instagram</p>
                </div>
                <div className="header2-facebook">
                    <p>Facebook</p>
                </div>
            </div>
            <div className="header2-campaign">
                <p className="header2-created">Created on</p>
                <p className="header2-date">August 20, 2021</p>
                <p className="header2-status">Status</p>
                <p className="header2-active">Active</p>
            </div>
            <p className='logored'>
                <FontAwesomeIcon icon={faBandcamp} style={{ color: '#63E6BE' }} />
            </p>
        </div>
    );
};

export default Header2;