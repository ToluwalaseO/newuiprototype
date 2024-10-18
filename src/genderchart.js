import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AgeGenderChart = () => {
    const data = {
        labels: ['15-24', '25-34', '35-44', '45-54', '55-64', '64+'],
        datasets: [
            {
                label: 'Male',
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [-75, -90, -50, -30, -20, -10] // Negative values for left side
            },
            {
                label: 'Female',
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [65, 85, 45, 25, 15, 5] // Positive values for right side
            }
        ]
    };

    const options = {
        indexAxis: 'y', // Make it horizontal
        scales: {
            x: {
                ticks: {
                    callback: function (value) {
                        return Math.abs(value); // Display positive numbers
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'top'
            }
        },
        responsive: true,
    };

    return (
        <div style={{ width: '700px', height: '400px' }}>
            <h2>Audience Age & Gender</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default AgeGenderChart;
