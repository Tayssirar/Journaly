import React, { useState } from 'react';
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, CardTitle, Form, Row } from 'react-bootstrap';
import { EventTypeOptions } from '../../data/OptionData';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AddEvent = () => {
  // State hooks for each form input
  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState(EventTypeOptions[0]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [details, setDetails] = useState('');
  const navigate = useNavigate();


  // Submit handler
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submit action (page refresh)

    const eventData = {
      title,
      eventType: eventType.value,
      startDate,
      endDate,
      details
    };

    try {
      const response = await axios.post('http://localhost:5000/api/events/add', eventData);
      console.log("Form Submitted with the following data:");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div>
      <PageTitle activeMenu={"Ajouter un évènement"} motherMenu={"Évènements"} />
      <Row>
        <Card>
          <CardHeader>
            <CardTitle>Ajouter un énvènement </CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Title">Titre</label>
                    <input 
                      id="Title" 
                      placeholder='Titre' 
                      type="text" 
                      className="form-control" 
                      required 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Type d'évènement</label>                                           
                    <Select 
                      options={EventTypeOptions} 
                      isSearchable={false}
                      value={eventType}
                      onChange={(option) => setEventType(option)}
                      className="custom-react-select" 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="datepicker">Date de début</label>
                    <div className="input-hasicon mb-xl-0 mb-3">                                                
                      <DatePicker 
                        placeholder="Date de début" 
                        className="picker-suit"
                        value={startDate}
                        onChange={(value) => setStartDate(value)}
                      />
                      <div className="icon"><i className="far fa-calendar" /></div>                                           
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="datepicker1">Date de fin</label>
                    <div className="input-hasicon mb-xl-0 mb-3">                                                                                                
                      <DatePicker 
                        placeholder="Date de fin" 
                        className="picker-suit"
                        value={endDate}
                        onChange={(value) => setEndDate(value)}
                      />
                      <div className="icon"><i className="far fa-calendar" /></div>     
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="form-label" htmlFor="Event_Details">Ajouter plus de détails</label>
                    <textarea 
                      id="Event_Details" 
                      placeholder="écrire des détails pertinents: le temps, le lieu.." 
                      className="form-control" 
                      rows="5" 
                      required 
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn btn-primary me-1">Envoyer</button>
                  <button type="button" className="btn btn-danger light" onClick={() => navigate('/AllEvents')}>Annuler</button>
                </div>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default AddEvent;
