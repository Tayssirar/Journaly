import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, CardTitle, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';

// Assuming you have a list of school types or other relevant options
const SchoolTypeOptions = [
  { value: 'public', label: 'Public' },
  { value: 'private', label: 'Private' },
  // Add more options as needed
];

const AddSchool = () => {
  // State hooks for each form input
  const [name, setName] = useState('');
  const [schoolType, setSchoolType] = useState(SchoolTypeOptions[0]);
  const [establishedDate, setEstablishedDate] = useState(null);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  // Submit handler
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submit action (page refresh)

    const schoolData = {
      name,
      schoolType: schoolType.value,
      establishedDate,
      address,
      phone,
      email
    };

    try {
      const response = await axios.post('http://localhost:5000/api/schools', schoolData);
      console.log("Form Submitted with the following data:");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter une école"} motherMenu={"École"} />
      <Row>
        <Card>
          <CardHeader>
            <CardTitle>Ajouter une école</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Name">Nom</label>
                    <input 
                      id="Name" 
                      placeholder='Nom' 
                      type="text" 
                      className="form-control" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Type d'école</label>                                           
                    <Select 
                      options={SchoolTypeOptions} 
                      isSearchable={false}
                      value={schoolType}
                      onChange={(option) => setSchoolType(option)}
                      className="custom-react-select" 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="datepicker">Date de création</label>
                    <div className="input-hasicon mb-xl-0 mb-3">                                                
                      <DatePicker 
                        placeholder="Date de création" 
                        className="picker-suit"
                        value={establishedDate}
                        onChange={(value) => setEstablishedDate(value)}
                      />
                      <div className="icon"><i className="far fa-calendar" /></div>                                           
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Address">Adresse</label>
                    <input 
                      id="Address" 
                      placeholder='Adresse' 
                      type="text" 
                      className="form-control" 
                      required 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Phone">Téléphone</label>
                    <input 
                      id="Phone" 
                      placeholder='Téléphone' 
                      type="text" 
                      className="form-control" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Email">Email</label>
                    <input 
                      id="Email" 
                      placeholder='Email' 
                      type="email" 
                      className="form-control" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn btn-primary me-1">Envoyer</button>
                  <button type="button" className="btn btn-danger light" onClick={() => navigate('/AllSchools')}>Annuler</button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default AddSchool;
