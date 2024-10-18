import React from 'react';
import { Radar } from 'react-chartjs-2';
import  'chart.js/auto'; 

const RadarChartComponent = () => {
    const data = {
        labels: ['Technology', 'Cars', 'Memes', 'Watches', 'Others'],
        datasets: [
            {
                label: 'TikTok',
                data: [80, 60, 95, 50, 70],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 2
            },
            {
                label: 'Twitter',
                data: [70, 55, 75, 65, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            },
            {
                label: 'Facebook',
                data: [60, 85, 50, 75, 80],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }
        ]
    };

    const options = {
        scale: {
            ticks: { beginAtZero: true }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    };

    return (
        <div style={{ width: '700px', height: '500px' }}>
            <h2>Social Media Comparison</h2>
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChartComponent;
