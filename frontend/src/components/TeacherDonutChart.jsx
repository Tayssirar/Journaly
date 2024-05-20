import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = ({ boys, girls, maleTeachers, femaleTeachers }) => {
  const studentSeries = [girls, boys];
  const teacherSeries = [femaleTeachers, maleTeachers];
  
  const StudentOptions = {
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

  const teacherOptions = {
    ...StudentOptions,
    labels: ["Femmes", "Hommes"]
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={StudentOptions}
        series={studentSeries}
        type="donut"
        height={300}
      />
      <ReactApexChart
        options={teacherOptions}
        series={teacherSeries}
        type="donut"
        height={300}
      />
    </div>
  );
};

export default DonutChart;
