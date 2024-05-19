import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Row } from 'react-bootstrap';
import axios from 'axios';
import { theadSchoolData, theadAssistantData, theadHeadmasterData, theadInspectorData, theadStudentData, theadTeacherData } from '../data/TheadData';

function Profil({ profileType, ProfileData }) {
    const [image, setImage] = useState('');
    const [theadData, setTheadData] = useState([]);

    useEffect(() => {
        switch (profileType) {
            case 'enseignant':
                setTheadData(theadTeacherData);
                break;
            case 'assistant':
                setTheadData(theadAssistantData);
                break;
            case 'directeur':
                setTheadData(theadHeadmasterData);
                break;
            case 'inspecteur':
                setTheadData(theadInspectorData);
                break;
            case 'élève':
                setTheadData(theadStudentData);
                break;
            case 'école':
                setTheadData(theadSchoolData);
                break;
            default:
                setTheadData([]);
        }
    }, [profileType]);

    useEffect(() => {
        // Fetch data from MongoDB using Axios
        axios.get(`/api/${profileType}/data`)
            .then(response => {
                // Assuming response.data is an array of objects containing the required data
                const newData = theadData.map(item => ({
                    value: response.data[item.sortingValue], // Assuming response.data contains values based on sortingValue
                }));
                setTheadData(newData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [profileType, theadData]); // Add theadData to dependencies array

    return (
        <div>
            <div className="col-lg-12">
                <Card>
                    <div className="text-center p-3 overlay-box">
                        <div className="profile-photo">
                            <img src={image} width="100" className="img-fluid rounded-circle" alt="" />
                        </div>
                        <h3 className="mt-3 mb-1 text-white">nom</h3>
                        <p className="text-white mb-0">{profileType}</p>
                    </div>
                </Card>
            </div>
            <Row>
                <div className="col-lg-6">
                    <Card>
                        <CardHeader>
                            <h2 className="card-title">Les informations</h2>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <ul className="list-group list-group-flush">
                                    {theadData.map((item, ind) => (
                                        <li className="list-group-item d-flex px-0 justify-content-between" key={ind}>
                                            {item.heading} : {item.value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </Row>
        </div>
    );
}

export default Profil;
