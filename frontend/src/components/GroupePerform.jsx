import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const GroupePerformance = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/chart-data') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        // Assuming the backend returns data in a format that can be directly used
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "My First dataset",
              data: data.firstDataset,
              borderColor: "rgba(106,115,250,1)",
              borderWidth: "2",
              backgroundColor: "rgba(106,115,250,1)",
              pointBackgroundColor: "rgba(106,115,250, 1)",
              tension: 0.4,
            },
            {
              label: "My Second dataset",
              data: data.secondDataset,
              borderColor: "rgba(255,97,117,0.6)",
              borderWidth: "2",
              backgroundColor: "transparent",
              pointBackgroundColor: "rgba(255,97,117,0.6)",
              tension: 0.4,
            },
          ],
        });

        setChartOptions({
          plugins: {
            legend: false,
            tooltips: {
              intersect: false,
            },
            hover: {
              intersect: true,
            },
          },
          scales: {
            y: {
              ticks: {
                color: "#fff",
                beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 20,
                padding: 10,
              },
            },
            x: {
              ticks: {
                color: "#fff",
                padding: 5,
              },
            },
          },
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {chartData.labels ? (
        <Line data={chartData} options={chartOptions} height={150} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GroupePerformance;
