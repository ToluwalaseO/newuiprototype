import React from 'react';
import './influencers.css'; // Ensure the correct path to your CSS file

const Influencers= () => {
  const influencers = [
    { name: 'Malik Wiwoho', projects: 23 ,followers: '1,620,201'},
    { name: 'Nancy Aulia',projects: 34 , followers: '1,224,820'},
    { name: 'Natasha Viresta',projects: 12 , followers: '1,100,491' },
    { name: 'Wilona Hamda', projects: 8, followers: '927,421' },
    { name: 'Rava Nanda',projects: 10, followers: '827,810' },
  ];

  return (
    <div className="influencers-section">
      <h3>Influencers</h3>
      <div className="table-header">
        <div className="table-cell"><strong>Influencer Name</strong></div>
        <div className="table-cell"><strong>Projects</strong></div>
        <div className="table-cell"><strong>Followers</strong></div>
      </div>
      {influencers.map((influencer, index) => (
        <div className="table-row" key={index}>
          <div className="table-cell">{influencer.name}</div>
          <div className="table-cell">{influencer.followers}</div>
          <div className="table-cell">{influencer.projects}</div>
        </div>
      ))}
    </div>
  );
};

export default Influencers;
