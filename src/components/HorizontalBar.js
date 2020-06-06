import React, { useEffect } from 'react';
import Chart from 'chart.js';

const HorizontalBar = () => {

    useEffect(() => {
        var ctx = document.getElementById('myBarChart').getContext('2d');

        var options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        offsetGridLines: true
                    }
                }]
            }
        };

        var myBarChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                datasets: [{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    data: [10, 20, 30, 40, 50, 60, 70]
                }]
            },
            options: options
        });
        
    }, []);

    return (
        <div>
            <canvas id="myBarChart" width="100%"></canvas>
        </div>
    );
};

export default HorizontalBar;