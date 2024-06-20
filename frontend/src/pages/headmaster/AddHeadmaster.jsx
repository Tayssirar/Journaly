import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AddHeadmaster = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthDate: null,
        gender: '',
        region: '',
        school: '',
        phone: '',
        email: '',
        password: ''
    });
    const [schools, setSchools] = useState([]);

    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ];

    const regionOptions = [
        { value: 'Tunis', label: 'Tunis' },
        { value: 'Ariana', label: 'Ariana' },
        { value: 'Ben Arous', label: 'Ben Arous' },
        { value: 'Manouba', label: 'Manouba' },
        { value: 'Nabeul', label: 'Nabeul' },
        { value: 'Zaghouan', label: 'Zaghouan' },
        { value: 'Bizerte', label: 'Bizerte' },
        { value: 'Beja', label: 'Beja' },
        { value: 'Jendouba', label: 'Jendouba' },
        { value: 'Kef', label: 'Kef' },
        { value: 'Siliana', label: 'Siliana' },
        { value: 'Sousse', label: 'Sousse' },
        { value: 'Monastir', label: 'Monastir' },
        { value: 'Mahdia', label: 'Mahdia' },
        { value: 'Sfax', label: 'Sfax' },
        { value: 'Kairouan', label: 'Kairouan' },
        { value: 'Kasserine', label: 'Kasserine' },
        { value: 'Sidi Bouzid', label: 'Sidi Bouzid' },
        { value: 'Gabes', label: 'Gabes' },
        { value: 'Mednine', label: 'Mednine' },
        { value: 'Tataouine', label: 'Tataouine' },
        { value: 'Gafsa', label: 'Gafsa' },
        { value: 'Tozeur', label: 'Tozeur' },
        { value: 'Kebili', label: 'Kebili' }
    ];

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/schools');
                setSchools(response.data.map(school => ({ value: school._id, label: school.name })));
            } catch (error) {
                console.error('Error fetching schools:', error);
            }
        };

        fetchSchools();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (selectedOption, field) => {
        setFormData({ ...formData, [field]: selectedOption.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, birthDate: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/headmasters', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Headmaster added successfully:', response.data);
            // Handle success (e.g., redirect or show success message)
        } catch (error) {
            console.error('Error adding headmaster:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <PageTitle activeMenu={"Ajouter un directeur"} motherMenu={"Directeurs"} />
            <Row>
                <Col xl={12} xxl={12} sm={12}>
                    <Card>
                        <CardHeader>
                            <h5 className="card-title">Les informations du Directeur</h5>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="firstName">Prénom</label>
                                            <input 
                                                id="firstName" 
                                                placeholder='prénom' 
                                                type="text" 
                                                className="form-control" 
                                                required 
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                name="firstName"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="lastName">Nom</label>
                                            <input 
                                                id="lastName" 
                                                placeholder='Nom de la famille' 
                                                type="text" 
                                                className="form-control" 
                                                required 
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                name="lastName"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="birthDate">Date de naissance</label>
                                            <DatePicker
                                                id="birthDate"
                                                value={formData.birthDate}
                                                onChange={handleDateChange}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="gender">Genre</label>
                                            <Select
                                                id="gender"
                                                value={genderOptions.find(option => option.value === formData.gender)}
                                                onChange={(selectedOption) => handleSelectChange(selectedOption, 'gender')}
                                                options={genderOptions}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="region">Région</label>
                                            <Select
                                                id="region"
                                                value={regionOptions.find(option => option.value === formData.region)}
                                                onChange={(selectedOption) => handleSelectChange(selectedOption, 'region')}
                                                options={regionOptions}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="phone">Numéro du téléphone</label>
                                            <input 
                                                id="phone" 
                                                placeholder="99 999 999" 
                                                type="text" 
                                                className="form-control" 
                                                required 
                                                value={formData.phone}
                                                onChange={handleChange}
                                                name="phone"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="school">Responsable de</label>
                                            <Select
                                                id="school"
                                                value={schools.find(option => option.value === formData.school)}
                                                onChange={(selectedOption) => handleSelectChange(selectedOption, 'school')}
                                                options={schools}
                                                required
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input 
                                                id="email" 
                                                placeholder="exemple@mail.com" 
                                                type="email" 
                                                className="form-control" 
                                                required 
                                                value={formData.email}
                                                onChange={handleChange}
                                                name="email"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="password">Mot de passe</label>
                                            <input 
                                                id="password" 
                                                placeholder="******" 
                                                type="password" 
                                                className="form-control" 
                                                required 
                                                value={formData.password}
                                                onChange={handleChange}
                                                name="password"
                                            />
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <button type="submit" className="btn btn-primary">Envoyer</button>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AddHeadmaster;
