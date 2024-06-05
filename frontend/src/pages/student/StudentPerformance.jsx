import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, Row, Col } from 'react-bootstrap';

const StudentPerformance = () => {
  const { studentId } = useParams(); // Fetch studentId from URL parameters
  const [performanceData, setPerformanceData] = useState([]); // State to hold performance data

  useEffect(() => {
    // Fetch performance data when component mounts or studentId changes
    axios.get(`/api/students/${studentId}/performance`)
      .then(response => setPerformanceData(response.data))
      .catch(error => console.error('Error fetching performance data:', error));
  }, [studentId]);

  // Prepare data for Chart.js
  const data = {
    labels: performanceData.map(item => item.examDate), // X-axis labels
    datasets: [
      {
        label: 'Performance', // Label for the dataset
        data: performanceData.map(item => item.score), // Y-axis data points
        fill: false, // No filling under the line
        backgroundColor: 'rgba(75,192,192,0.4)', // Background color for points
        borderColor: 'rgba(75,192,192,1)', // Line color
      },
    ],
  };

  return (
    <div>
      <PageTitle motherMenu={'Élève'} activeMenu={'La performance'} />
      <Row>
        <Col xl={4} lg={12} sm={12}>
          <Card>
            <CardHeader>
              Performance de l'élève
            </CardHeader>
            <CardBody>
              <Line data={data} /> {/* Render the line chart */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StudentPerformance;
