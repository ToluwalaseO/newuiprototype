import React from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './RadarChart.css'; // Import the CSS file

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const FollowerInterestChart = () => {
    const data = {
        labels: ['Interest 1', 'Interest 2', 'Interest 3', 'Interest 4', 'Interest 5'],
        datasets: [
            {
                label: 'Followers',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                data: [20, 30, 40, 50, 60], // Sample data values
            }
        ]
    };

    const options = {
        responsive: true,
        scale: {
            ticks: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };

    return (
        <div className="radar-chart-container">
            <h2 className="radar-chart-header">Follower Interest</h2>
            <Radar data={data} options={options} />
        </div>
    );
};

export default FollowerInterestChart;
