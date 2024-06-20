import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: null,
    gender: '',
    region: '',
    class: '',
    group: '',
    school: ''
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

  const classOptions = [
    { value: '1ère année', label: '1ère année' },
    { value: '2ème année', label: '2ème année' },
    { value: '3ème année', label: '3ème année' },
    { value: '4ème année', label: '4ème année' },
    { value: '5ème année', label: '5ème année' },
    { value: '6ème année', label: '6ème année' }
  ];

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schools');
        console.log('Schools fetched:', response.data); // Add this line
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
    console.log('Form Data:', formData); // Log form data to ensure it's captured correctly
    try {
      const response = await axios.post('http://localhost:5000/api/students', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Student added successfully:', response.data);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error('Error adding student:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un élève"} motherMenu={"Élèves"} />
      <Row>
        <Col xl={12} xxl={12} sm={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title">Les informations d'un élève</h5>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="firstName">Prénom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lastName">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
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
                      <label className="form-label" htmlFor="class">Classe</label>
                      <Select
                        id="class"
                        value={classOptions.find(option => option.value === formData.class)}
                        onChange={(selectedOption) => handleSelectChange(selectedOption, 'class')}
                        options={classOptions}
                        required
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="school">École</label>
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
                      <label className="form-label" htmlFor="group">Son groupe</label>
                      <input
                        type="text"
                        className="form-control"
                        id="group"
                        name="group"
                        value={formData.group}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                    <button type="button" className="btn btn-danger light" onClick={() => console.log("Cancelled")}>Annuler</button>
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

export default AddStudent;
