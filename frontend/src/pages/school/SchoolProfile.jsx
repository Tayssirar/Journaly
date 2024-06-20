import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, Row, Col } from 'react-bootstrap';

function SchoolProfile() {
  const { id } = useParams(); // Get the school ID from the URL parameters
  const [school, setSchool] = useState(null); // State to hold the school data
  const profileType = 'école'; 

  useEffect(() => {
    // Fetch school data from the backend
    const fetchSchool = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/schools/${id}`);
        setSchool(response.data);
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    };

    fetchSchool();
  }, [id]);

  return (
    <div>
      <PageTitle activeMenu={`Profile de ${profileType}`} motherMenu={"Profile"} />
      {school ? (
        <Card>
          <CardHeader>
            <h4 className="card-title">Profile de l'école</h4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="4">
                <img className="img-fluid rounded-circle" src={school.profile} alt={school.name} />
              </Col>
              <Col md="8">
                <ul className="list-group mb-3 list-group-flush">
                  <li className="list-group-item"><strong>Nom:</strong> {school.name}</li>
                  <li className="list-group-item"><strong>Type:</strong> {school.schoolType}</li>
                  <li className="list-group-item"><strong>Date de création:</strong> {new Date(school.establishedDate).toLocaleDateString()}</li>
                  <li className="list-group-item"><strong>Adresse:</strong> {school.address}</li>
                  <li className="list-group-item"><strong>Téléphone:</strong> {school.phone}</li>
                  <li className="list-group-item"><strong>Email:</strong> {school.email}</li>
                </ul>
              </Col>
            </Row>
          </CardBody>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SchoolProfile;
