import React from 'react'
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import PageTitle from '../../components/PageTitle';
import { Card, CardBody, CardHeader, CardTitle, Form, Row } from 'react-bootstrap';
import { EventTypeOptions } from '../../data/OptionData';

function AddEvent() {
  return (
    <div>
      <PageTitle activeMenu={"Ajouter un évènements"} motherMenu={"Évènements"}/>
      <Row>
        <Card>
          <CardHeader>
            <CardTitle>Ajouter un énvènement </CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <div className="col-sm-6">
                  <div className="form-group">
                      <label className="form-label" htmlFor="Title">Titre</label>
                      <input id="Title" placeholder='Titre' type="text" className="form-control" required />
                  </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label">Type d'évènement</label>                                           
                        <Select 
                            options={EventTypeOptions} 
                            isSearchable={false}
                            defaultValue={EventTypeOptions[0]}
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
                            />
                            <div className="icon"><i className="far fa-calendar" /></div>     
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                        <label className="form-label" htmlFor="Event_Details">Ajouter plus de détails</label>
                        <textarea id="Event_Details" 
                            placeholder="écrire des détails pertinents: le temps, le lieu.." 
                            className="form-control" rows="5" required 
                        />
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="btn btn-primary me-1">Envoyer</button>
                    <button type="submit" className="btn btn-danger light">Annuler</button>
                </div>
              </Row>
            </Form>

          </CardBody>
        </Card>
      </Row>

      
    </div>
  )
}

export default AddEvent
