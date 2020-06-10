import React, { useEffect } from 'react';
import Chart from 'chart.js';

const ChartPractice = (props) => {

    useEffect(() => {
        var ctx = document.getElementsByClassName('myRadarChart')[props.index].getContext('2d');
        
        var data = {
            labels: ['Running', 'Swimming', 'Eating', 'Cycling', "Sleeping"],
            datasets: [{
                data: [100, 70, 50, 50, 80],
                backgroundColor: 'rgba(245, 66, 135, 0.1)',
                borderColor: 'rgba(245, 66, 135, 0.1)'
            }]
        }

        var options = {
            scale: {
                angleLines: {
                    display: true
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        };

        var myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: data,
            options: options
        });
        
    }, []);

    return (
        <div>
            <canvas className="myRadarChart" width="270" height="270"></canvas>
        </div>
    );
};

export default ChartPractice;