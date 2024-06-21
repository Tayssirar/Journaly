import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, Table, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const AllHeadmasters = () => {
    const [headmasters, setHeadmasters] = useState([]);

    useEffect(() => {
        const fetchHeadmasters = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/headmasters');
                setHeadmasters(response.data);
            } catch (error) {
                console.error('Error fetching headmasters:', error);
            }
        };

        fetchHeadmasters();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/headmasters/${id}`);
            setHeadmasters(headmasters.filter(headmaster => headmaster._id !== id));
        } catch (error) {
            console.error('Error deleting headmaster:', error);
        }
    };

    return (
        <div>
            <PageTitle activeMenu={"Tous les directeurs"} motherMenu={"Directeurs"} />
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <h4 className="card-title">Tous les directeurs</h4>
                            <Link to={"/AddHeadmaster"} className="btn btn-primary">+ Ajouter un nouveau</Link>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Prénom</th>
                                        <th>Nom</th>
                                        <th>Genre</th>
                                        <th>Date de naissance</th>
                                        <th>Région</th>
                                        <th>École</th>
                                        <th>Numéro du téléphone</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {headmasters.map((headmaster, index) => (
                                        <tr key={index}>
                                            <td>{headmaster.firstName}</td>
                                            <td>{headmaster.lastName}</td>
                                            <td>{headmaster.gender}</td>
                                            <td>{new Date(headmaster.birthDate).toLocaleDateString()}</td>
                                            <td>{headmaster.region}</td>
                                            <td>{headmaster.school.name}</td>
                                            <td>{headmaster.phone}</td>
                                            <td>{headmaster.email}</td>
                                            <td>
                                                <Link to={`/UpdateHeadmaster/${headmaster._id}`} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                                <Link onClick={() => handleDelete(headmaster._id)} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></Link>
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

export default AllHeadmasters;
