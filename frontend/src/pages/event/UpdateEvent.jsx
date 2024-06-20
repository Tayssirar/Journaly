import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DatePicker } from 'rsuite';
import Select from 'react-select';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, CardTitle, Form, Row } from 'react-bootstrap';
import { EventTypeOptions } from '../../data/OptionData';

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [eventType, setEventType] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [details, setDetails] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/${id}`);
        const event = response.data;
        setTitle(event.title);
        setEventType(EventTypeOptions.find(option => option.value === event.eventType));
        setStartDate(new Date(event.startDate));
        setEndDate(new Date(event.endDate));
        setDetails(event.details);
      } catch (error) {
        console.error('There was an error fetching the event!', error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedEvent = {
      title,
      eventType: eventType.value,
      startDate,
      endDate,
      details
    };

    try {
      await axios.put(`http://localhost:5000/api/events/update/${id}`, updatedEvent);
      navigate('/AllEvents');
    } catch (error) {
      console.error('There was an error updating the event!', error);
    }
  };

  if (!eventType) {
    return <div>Loading...</div>; // Show a loading state while fetching event data
  }

  return (
    <div>
      <PageTitle activeMenu={"Modifier l'évènement"} motherMenu={"Évènements"} />
      <Row>
        <Card>
          <CardHeader>
            <CardTitle>Modifier l'évènement</CardTitle>
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
}

export default UpdateEvent;
