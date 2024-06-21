import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageTitle from '../../components/PageTitle';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Table, Button, Row, Col } from 'react-bootstrap';

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Tous les élèves"} motherMenu={"Élèves"} />
      <Row>
        <Col xl={12} xxl={12} sm={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title">Tous les élèves</h5>
              <Link to={"/AddStudent"} className="btn btn-primary">+ Ajouter Un Nouveau</Link>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Date de naissance</th>
                    <th>Genre</th>
                    <th>Région</th>
                    <th>Classe</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student._id}>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{new Date(student.birthDate).toLocaleDateString()}</td>
                      <td>{student.gender}</td>
                      <td>{student.region}</td>
                      <td>{student.classe}</td>
                      <td>
                        <Link to={`/UpdateStudent/${student._id}`} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                        <Link onClick={() => handleDelete(student._id)} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AllStudents;
