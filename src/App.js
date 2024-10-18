import React from 'react';
import Sidebar from './Sidebar'; // Adjust path if needed
import './mainpage.css'; // Ensure there's no conflicting styles
import CampaignReach from './CampaignReach';
import InfluencersSection from './Influencers';
import Dashboard from './Dashboard';
import Header from './Header1'; // Use the correct header component
import Header2 from './Header2'; // Include if needed
import RadarChartComponent from './radarchart'; // Include if needed
import AgeGenderChart from './genderchart'; // Include if needed

function App() {
  return (
    <div className="App">
     <Sidebar />
      <Header /> {/* Adding Header component */}
      <Header2 /> 
      
      <Dashboard />
      <InfluencersSection />
      <CampaignReach />
      <RadarChartComponent /> {/* Adding Radar Chart Component if needed */}
      <AgeGenderChart /> {/* Adding Age Gender Chart Component if needed */}
    </div>
  );
}

export default App;