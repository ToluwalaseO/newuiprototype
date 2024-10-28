// InfluencerTable.js
import React from "react";
import "./influencers.css";

const influencers = [
  { name: "Malik Wiwoho", projects: 23, followers: "1,620,201" },
  { name: "Nancy Aulia", projects: 34, followers: "1,224,820" },
  { name: "Natasha Viresta", projects: 12, followers: "1,100,491" },
  { name: "Wilona Hamda", projects: 8, followers: "927,421" },
  { name: "Rava Nanda", projects: 10, followers: "827,810" },
];

const InfluencerTable = () => {
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Influencer</h2>
        <button className="add-button">+ Add Influencer</button>
      </div>
      <table className="influencer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Projects</th>
            <th>Follower</th>
          </tr>
        </thead>
        <tbody>
          {influencers.map((influencer, index) => (
            <tr key={index}>
              <td className="name-column">
                <img src={`https://i.pravatar.cc/150?img=${index + 1}`} alt="avatar" className="avatar" />
                {influencer.name}
              </td>
              <td>{influencer.projects}</td>
              <td>{influencer.followers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfluencerTable;
