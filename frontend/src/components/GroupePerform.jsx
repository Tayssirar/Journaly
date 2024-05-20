import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'

const GroupePerformance = ({ groupe }) => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (groupe) {
      // Fetch the performance data for the group
      const staticData = {
        exams: [
          { examType: "prérequis", averageScore: 75 },
          { examType: "trimestre 1", averageScore: 80 },
          { examType: "trimestre2", averageScore: 85 },
        ],
      };

//      fetch(`/api/group-performance?groupName=${groupe}`)
//        .then(response => response.json())
//        .then(data => {
          const labels = staticData.exams.map(exam => exam.examType); // Assuming each exam has a examType
          const scores = staticData.exams.map(exam => exam.averageScore); // Assuming each exam has an average score

          setChartData({
            labels,
            datasets: [
              {
                label: ` Performance du ${groupe} `,
                data: scores,
                borderColor: 'rgba(106,115,250,1)',
                borderWidth: 2,
                backgroundColor: 'rgba(106,115,250,0.2)',
                pointBackgroundColor: 'rgba(106,115,250,1)',
                tension: 0.4,
              },
            ],
          });

          setChartOptions({
            plugins: {
              legend: { display: true },
              tooltip: { intersect: false },
              hover: { intersect: true },
            },
            scales: {
              y: {
                ticks: {
                  color: '#000',
                  beginAtZero: true,
                  max: 100,
                  min: 0,
                  stepSize: 20,
                  padding: 10,
                },
              },
              x: {
                ticks: {
                  color: '#000',
                  padding: 5,
                },
              },
            },
          });
//        })
//        .catch(error => console.error('Error fetching group performance data:', error));
    }
  }, [groupe]);

  return (
    <div>
      {chartData ? (
        <Line data={chartData} options={chartOptions} height={150} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default GroupePerformance;
