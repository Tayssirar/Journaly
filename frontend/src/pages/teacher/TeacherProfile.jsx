import React from 'react';
import PageTitle from '../../components/PageTitle';
import Profil from '../../components/Profil';
import TeacherTimetable from '../calendar/TimeTable';
import { Row, Tab, Card, Nav } from 'react-bootstrap';
import TeacherPlan from '../planification/TeacherPlan';
import TeacherJournal from '../../components/Journal/TeacherJournal';
import TeacherExam from '../../components/Exam/TeacherExam';
import TeacherRapport from '../../components/Rapport/TeacherRapport';

function TeacherProfile() {
  const profileType = 'enseignant'; 

  return (
    <div>
      <PageTitle activeMenu={"Profil de " + profileType} motherMenu={"Profil"} />
      <Row>
      <Card>
        <Card.Body>
          <div className="default-tab">
            <Tab.Container defaultActiveKey="profile">
              <Nav variant="tabs" className="nav nav-tabs">
                  <Nav.Item >
                    <Nav.Link eventKey="profile">
                      Profil
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="emploi">
                      Emploi
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="plan">
                      Planification
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="journal">
                      Journal
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="exam">
                     Évaluation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item >
                    <Nav.Link eventKey="rapport">
                     Rapport
                    </Nav.Link>
                  </Nav.Item>
              </Nav>
              <Tab.Content className="pt-4">
                  <Tab.Pane eventKey="profile">
                    <Profil profileType={profileType} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="emploi">
                    <TeacherTimetable />
                  </Tab.Pane>
                  <Tab.Pane eventKey="plan">
                    <TeacherPlan/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="journal">
                    <TeacherJournal/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="exam">
                    <TeacherExam/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="rapport">
                    <TeacherRapport/>
                  </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Card.Body>
      </Card>
      </Row>
    </div>
  );
}

export default TeacherProfile;
