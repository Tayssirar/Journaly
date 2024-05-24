import React from 'react';
import PageTitle from '../../components/PageTitle';
import Profil from '../../components/Profil';
import TeacherTimetable from '../calendar/TimeTable';
import { Row, Col } from 'react-bootstrap';

function TeacherProfile() {
  const profileType = 'enseignant'; 

  return (
    <div>
      <PageTitle activeMenu={"Profil de " + profileType} motherMenu={"Profil"} />
      <Row>
        <Col md={4}>
          <Profil profileType={profileType} />
        </Col>
        <Col md={8}>
          <TeacherTimetable />
        </Col>
      </Row>
    </div>
  );
}

export default TeacherProfile;
