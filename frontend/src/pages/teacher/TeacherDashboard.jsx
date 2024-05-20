import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap';
import { DefaultCard } from '../../components/TeacherCard';
import GenreDonutChart from '../../components/TeacherDonutChart';
import GroupePerformance from '../../components/GroupePerform';

function TeacherDashboard() {
  const [classes, setClasses] = useState([{
    "className": "Class 1",
    "groupName": "Group A",
    "boys": 10,
    "girls": 15
  },
  {
    "className": "Class 1",
    "groupName": "Group B",
    "boys": 12,
    "girls": 13
  }]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/classes-data')
      .then(response => response.json())
      .then(data => {
        setClasses(data.classes);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Row>
        <DefaultCard />
        {classes.map((classe, index) => (
          <React.Fragment key={index}>
            <Col xl={3} xxl={3} sm={6}>
              <Card>
                <CardHeader>
                  <h3 className="card-title"> {classe.className} - {classe.groupName}</h3>
                </CardHeader>
                <CardBody>
                  <GenreDonutChart boys={classe.boys} girls={classe.girls} />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <h3 className="card-title">{classe.className} - {classe.groupName}</h3>
                </Card.Header>
                <Card.Body>
                  <GroupePerformance groupe={classe.groupName} />
                </Card.Body>
              </Card>
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
}

export default TeacherDashboard;
