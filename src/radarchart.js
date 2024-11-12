// FollowerInterestRadarChart.js
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./RadarChart.css"; // Import the CSS file

const data = [
  { subject: "Fashion", Tiktok: 90, Twitter: 60, Facebook: 75 },
  { subject: "Cosmetics", Tiktok: 80, Twitter: 70, Facebook: 60 },
  { subject: "Watches", Tiktok: 70, Twitter: 65, Facebook: 50 },
  { subject: "Others", Tiktok: 60, Twitter: 70, Facebook: 55 },
  { subject: "Memes", Tiktok: 50, Twitter: 40, Facebook: 45 },
  { subject: "Cars", Tiktok: 65, Twitter: 80, Facebook: 70 },
  { subject: "Technology", Tiktok: 85, Twitter: 75, Facebook: 80 },
];

const renderLineLegend = (value, entry) => {
  const { color } = entry;
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <span
        style={{
          width: '24px', // Length of the line
          height: '2px', // Thickness of the line
          backgroundColor: color,
          display: 'inline-block',
          marginRight: '8px',
        }}
      ></span>
      {value}
    </span>
  );
};

const FollowerInterestRadarChart = () => {
  return (
    <div className="radar-chart-container">
      <h4 className="chart-title">Follower Interest</h4>
      <ResponsiveContainer width="85%" height ="85%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Tiktok" dataKey="Tiktok" stroke="#fbc02d" fill="#fbc02d" fillOpacity={0.6} />
          <Radar name="Twitter" dataKey="Twitter" stroke="#66bb6a" fill="#66bb6a" fillOpacity={0.6} />
          <Radar name="Facebook" dataKey="Facebook" stroke="#1e88e5" fill="#1e88e5" fillOpacity={0.6} />
          <Legend
            verticalAlign="bottom"
            align="center"
            layout="horizontal"
            formatter={renderLineLegend} // Use custom formatter
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FollowerInterestRadarChart;
