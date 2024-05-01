import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectRoleAction } from '../../store/actions/AuthActions';

function ChooseUser(props) {
    const handleRoleSelect = (role) => {
        props.selectRole(role);
    };

    return (
        <div className="fix-wrapper">
            <div className="container">
                <Row>
                    <Col xl="6">
                        <Card>
                            <Link
                                to="/login?role=admin"
                                className="card-link"
                                onClick={() => handleRoleSelect('admin')}
                            >
                                <Card.Header className="border-0 pb-0">
                                    <Card.Title>Admin</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Connectez-vous en tant qu'un administrateur pour gérer les données.
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl="6">
                        <Card>
                            <Link
                                to="/login?role=headmaster"
                                className="card-link"
                                onClick={() => handleRoleSelect('headmaster')}
                            >
                                <Card.Header className="border-0 pb-0">
                                    <Card.Title>Directeur</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Connectez-vous en tant que directeur pour gérer les données.
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl="6">
                        <Card>
                            <Link
                                to="/login?role=inspector"
                                className="card-link"
                                onClick={() => handleRoleSelect('inspector')}
                            >
                                <Card.Header className="border-0 pb-0">
                                    <Card.Title>Inspecteur</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Connectez-vous en tant qu'un inspecteur.
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl="6">
                        <Card>
                            <Link
                                to="/login?role=assistant"
                                className="card-link"
                                onClick={() => handleRoleSelect('assistant')}
                            >
                                <Card.Header className="border-0 pb-0">
                                    <Card.Title>Assistant</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Connectez-vous en tant qu'un assistant.
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col xl="6 ">
                        <Card>
                            <Link
                                to="/login?role=teacher"
                                className="card-link"
                                onClick={() => handleRoleSelect('teacher')}
                            >
                                <Card.Header className="border-0 pb-0">
                                    <Card.Title>Enseignant</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Connectez-vous en tant qu'un enseignant.
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default connect(null, { selectRole: selectRoleAction })(ChooseUser);