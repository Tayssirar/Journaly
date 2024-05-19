import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = ({ boys, girls }) => {
  const series = [girls, boys]; // Data series
  const options = {
    chart: {
      type: 'donut',
      height: 300,
    },
    labels: ["Filles", "Garçons"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    colors: ['#FF6384', '#36A2EB'],
    legend: {
      position: 'bottom',
      show: true,
    },
    responsive: [
      {
        breakpoint: 1800,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={300}
      />
    </div>
  );
};

export default DonutChart;
