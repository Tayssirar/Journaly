import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap';
import DefaultCard from '../../components/TeacherCard';
import DonutChart from '../../components/TeacherDonutChart';
import GroupPerformance from '../../components/GroupePerform';

function HeadmasterDashboard() {
  const [data, setData] = useState({
    students: { boys: 0, girls: 0 },
    teachers: { male: 0, female: 0 },
    classes: []
  });

  useEffect(() => {
    fetch('/api/headmaster-dashboard')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Row>
        <DefaultCard />
      </Row>
      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <CardHeader>
              <h3 className="card-title">Statistiques des étudiants</h3>
            </CardHeader>
            <CardBody>
              <DonutChart boys={data.students.boys} girls={data.students.girls} />
            </CardBody>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <Card>
            <CardHeader>
              <h3 className="card-title">Statistiques des enseignants</h3>
            </CardHeader>
            <CardBody>
              <DonutChart maleTeachers={data.teachers.male} femaleTeachers={data.teachers.female} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        {Array.isArray(data.classes) && data.classes.length > 0 ? (
          data.classes.map((classe, index) => (
            <React.Fragment key={index}>
              <Col xl={6} lg={6}>
                <Card>
                  <CardHeader>
                    <h3 className="card-title">{classe.className} - {classe.groupName}</h3>
                  </CardHeader>
                  <CardBody>
                    <GroupPerformance group={classe.groupName} />
                  </CardBody>
                </Card>
              </Col>
            </React.Fragment>
          ))
        ) : (
          <Col>
            <Card>
              <CardBody>
                <p>No classes available</p>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default HeadmasterDashboard;
