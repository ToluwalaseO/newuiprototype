import React from 'react';
import Sidebar from './Sidebar'; // Adjust path if needed
import InfluencerTable from './Influencers';
import Dashboard from './Dashboard';
import CampaignReach from './CampaignReach'; // Include if needed
import Header from './Header1'; // Use the correct header component
import Header2 from './Header2'; // Include if needed
import FollowerInterestRadarChart from './radarchart'; // Include if needed
import AudienceAgeGenderChart from './genderchart'; // Include if needed
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header1">
        <Header /> {/* Adding Header component */}
      </div>
      <div className="App-sidebar">
        <Sidebar />
      </div> 
      
      <div className="App-header2">
        <Header2 />
      </div> 
      <div className="App-dashboard">
        <Dashboard />
      </div>
      <div className="App-campaign-reach">
        <CampaignReach /> 
      </div>
      <div className="App-influencers">
        <InfluencerTable />
      </div> 
      <div className="App-radar-chart">
        <FollowerInterestRadarChart /> 
      </div> 
      <div className="App-age-gender-chart">
        <AudienceAgeGenderChart /> {/* Corrected the name to match the import */}
      </div> 
    </div>
  );
}

export default App;
