// AudienceAgeGenderChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import "./genderchart.css"; // Import the CSS file

const data = [
  { age: "15-24", male: 75000, female: 25000 },
  { age: "25-34", male: 100000, female: 75000 },
  { age: "35-44", male: 50000, female: 50000 },
  { age: "45-54", male: 25000, female: 10000 },
  { age: "55-64", male: 10000, female: 5000 },
  { age: "65+", male: 5000, female: 2000 },
];

const AudienceAgeGenderChart = () => {
  return (
    <div className="chart-container">
      <h4 className="chart-title">Audience Age & Gender</h4>
      <ResponsiveContainer width="90%" height="90%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          barSize={10}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 100000]}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <YAxis type="category" dataKey="age" />
          <Tooltip formatter={(value) => `${value.toLocaleString()}`} />
          
          <Bar dataKey="male" fill="#007bff" radius={[0, 10, 10, 0]}>
            <LabelList dataKey="male" position="insideRight" fill="#ffffff" />
          </Bar>
          <Bar dataKey="female" fill="#28a745" radius={[10, 0, 0, 10]}>
            <LabelList dataKey="female" position="insideLeft" fill="#ffffff" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AudienceAgeGenderChart;
