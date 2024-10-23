import React from 'react';
// import Sidebar from './Sidebar'; // Adjust path if needed
// import './mainpage.css'; // Ensure there's no conflicting styles
// import CampaignReach from './CampaignReach';
// import InfluencersSection from './Influencers';
import Dashboard from './Dashboard';
import Header from './Header1'; // Use the correct header component
// import Header2 from './Header2'; // Include if needed
// import RadarChartComponent from './radarchart'; // Include if needed
// import AgeGenderChart from './genderchart'; // Include if needed
 import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className="App-sidebar">
        <Sidebar />
      </div> */}
      <div className="App-header1">
        <Header /> {/* Adding Header component */}
      </div> 
      {/* <div className="App-header2">
        <Header2 />
      </div> */}
      {<div className="App-dashboard">
        <Dashboard />
      </div> }
      {/* <div className="App-influencers">
        <InfluencersSection />
      </div> */}
      {/* <div className="App-campaign-reach">
        <CampaignReach />
      </div> */}
      {/* <div className="App-radar-chart">
        <RadarChartComponent /> {/* Adding Radar Chart Component if needed */}
      {/* </div> */}
      {/* <div className="App-age-gender-chart">
        <AgeGenderChart /> {/* Adding Age Gender Chart Component if needed */}
      {/* </div> */}
    </div>
  );
}

export default App;