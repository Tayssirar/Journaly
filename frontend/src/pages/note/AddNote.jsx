import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { Accordion, Button, Card, CardBody, CardHeader, CardTitle, Dropdown, DropdownButton, Form, Nav, OverlayTrigger, Row, Tab, TabContainer, TabContent, TabPane, Table, Tooltip } from 'react-bootstrap';
import Select from 'react-select';
import { ClasseOption, EvaluationTypeOption, NoteOption } from '../../data/OptionData';
import { EcritCritere, LectureCritere, OralCritere, RecitationCritere } from '../../data/TheadData';

function AddNote() {
  const [classe, setClasse] = useState([]);
  const [groupeOption, setGroupeOption] = useState([]);
  const [evaTypeOption, setEvaTypeOption] = useState([]);
  const [noteOption, setNoteOption] = useState([]);
  const [student, setStudent] = useState([
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Bob Johnson' },
    { name: 'Alice Williams' },
  ]);
  const [recitationValues, setRecitationValues] = useState({});
  const [oralValues, setOralValues] = useState({});
  const [lectureValues, setLectureValues] = useState({});
  const [ecritValues, setEcritValues] = useState({});

  const handleRecitationChange = (index, value) => {
    setRecitationValues({ ...recitationValues, [index]: value });
  };

  const handleOralChange = (index, value) => {
    setOralValues({ ...oralValues, [index]: value });
  };

  const handleLectureChange = (index, value) => {
    setLectureValues({ ...lectureValues, [index]: value });
  };

  const handleEcritChange = (index, value) => {
    setEcritValues({ ...ecritValues, [index]: value });
  };

  const calculateTotal = (values) => {
    return Object.values(values).reduce((total, value) => total + (parseFloat(value) || 0), 0);
  };

  return (
    <div>
      <PageTitle motherMenu={'Note'} activeMenu={'Attribuer les notes'} />
      <Row>
        <Card>
          <CardHeader>
            <Form className='row'>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label">Classe</label>
                  <Select isSearchable={false} options={ClasseOption} className="custom-react-select" value={classe} onChange={(e) => setClasse(e.target.value)} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label">Groupe</label>
                  <Select isSearchable={false} options={groupeOption} className="custom-react-select" value={groupeOption} onChange={(e) => setGroupeOption(e.target.value)} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label">Type d'évaluation</label>
                  <Select isSearchable={false} options={EvaluationTypeOption} className="custom-react-select" value={evaTypeOption} onChange={(e) => setEvaTypeOption(e.target.value)} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label">Type d'attribution de note</label>
                  <Select isSearchable={false} options={NoteOption} className="custom-react-select" value={noteOption} onChange={(e) => setNoteOption(e.target.value)} />
                </div>
              </div>
            </Form>
          </CardHeader>
          <CardBody>
            <TabContainer defaultActiveKey="recitation">
              <Nav variant="tabs" className="nav nav-tabs">
                <Nav.Item>
                  <Nav.Link eventKey="recitation">Récitation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="oral">Oral</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="lecture">Lecture</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ecrit">Écrit</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="recitation">
                  <Table responsive bordered>
                    <thead className="table-active">
                      <tr>
                        <th className='text-secondary '>Nom et prénom</th>
                        {RecitationCritere.map((d, i) => (
                          <th key={i} >
                            <OverlayTrigger
                              trigger="hover" // Change trigger as needed (hover, click, etc.)
                              placement="top" // Adjust placement as needed
                              overlay={
                                <Tooltip className='toltip-popover' id={`popover-positioned-${i}`}>
                                  <strong className="p-2 d-block">
                                  {d.text}
                                  </strong>
                                </Tooltip>
                              }
                            >
                              <Button style={{ width: '70px' }} variant="secondary tp-btn-light">{d.title}</Button>
                            </OverlayTrigger>
                          </th>
                        ))}
                        <th className='text-secondary '>Totale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.map((student, index) => (
                        <tr key={index}>
                          <td>{student.name}</td>
                          {RecitationCritere.map((criterion, idx) => (
                            <td key={idx}>
                              <input value={recitationValues[`${index}-${idx}`] || ''}
                              onChange={(e) => handleRecitationChange(`${index}-${idx}`, e.target.value)} 
                              style={{ width: '90px' }} />
                            </td>
                          ))}
                          <td>{calculateTotal(recitationValues)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </TabPane>
                <TabPane eventKey="oral">
                  <Table bordered>
                    <thead className="table-active">
                      <tr>
                        <th className='text-secondary '>Nom et prénom</th>
                        {OralCritere.map((d, i) => (
                          <th key={i}>
                            <OverlayTrigger
                              trigger="hover" // Change trigger as needed (hover, click, etc.)
                              placement="top" // Adjust placement as needed
                              overlay={
                                <Tooltip className='toltip-popover' id={`popover-positioned-${i}`}>
                                  <strong className="p-2 d-block">
                                  {d.text}
                                  </strong>
                                </Tooltip>
                              }
                            >
                              <Button style={{ width: '70px' }} variant="secondary tp-btn-light">{d.title}</Button>
                            </OverlayTrigger>
                          </th>
                        ))}
                        <th className='text-secondary '>Totale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.map((student, index) => (
                        <tr key={index}>
                          <td>{student.name}</td>
                          {OralCritere.map((criterion, idx) => (
                            <td key={idx}>
                              <input value={oralValues[`${index}-${idx}`] || ''} onChange={(e) => handleOralChange(`${index}-${idx}`, e.target.value)} style={{ width: '70px' }} />
                            </td>
                          ))}
                          <td>{calculateTotal(oralValues)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </TabPane>
                <TabPane eventKey="lecture">
                  <Table bordered>
                    <thead className="table-active">
                      <tr>
                        <th className='text-secondary '>Nom et prénom</th>
                        {LectureCritere.map((d, i) => (
                          <th key={i}>
                            <OverlayTrigger
                              trigger="hover" // Change trigger as needed (hover, click, etc.)
                              placement="top" // Adjust placement as needed
                              overlay={
                                <Tooltip className='toltip-popover' id={`popover-positioned-${i}`}>
                                  <strong className="p-2 d-block">
                                  {d.text}
                                  </strong>
                                </Tooltip>
                              }
                            >
                              <Button style={{ width: '70px' }} variant="secondary tp-btn-light">{d.title}</Button>
                            </OverlayTrigger>
                          </th>
                        ))}
                        <th className='text-secondary '>Totale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.map((student, index) => (
                        <tr key={index}>
                          <td>{student.name}</td>
                          {LectureCritere.map((criterion, idx) => (
                            <td key={idx}>
                              <input value={lectureValues[`${index}-${idx}`] || ''} 
                              onChange={(e) => handleLectureChange(`${index}-${idx}`, e.target.value)}
                               style={{ width: '70px' }} />
                            </td>
                          ))}
                          <td>{calculateTotal(lectureValues)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </TabPane>
                <TabPane eventKey="ecrit">
                  <Table bordered>
                    <thead className="table-active">
                      <tr>
                        <th className='text-secondary '>Nom et prénom</th>
                        {EcritCritere.map((d, i) => (
                          <th key={i}>
                            <OverlayTrigger
                              trigger="hover" // Change trigger as needed (hover, click, etc.)
                              placement="top" // Adjust placement as needed
                              overlay={
                                <Tooltip className='toltip-popover' id={`popover-positioned-${i}`}>
                                  <strong className="p-2 d-block">
                                  {d.text}
                                  </strong>
                                </Tooltip>
                              }
                            >
                              <Button style={{ width: '70px' }} variant="secondary tp-btn-light">{d.title}</Button>
                            </OverlayTrigger>
                          </th>
                        ))}
                        <th className='text-secondary '>Totale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.map((student, index) => (
                        <tr key={index}>
                          <td>{student.name}</td>
                          {EcritCritere.map((criterion, idx) => (
                            <td key={idx}>
                              <input value={ecritValues[`${index}-${idx}`] || ''} 
                              onChange={(e) => handleEcritChange(`${index}-${idx}`, e.target.value)} 
                              style={{ width: '70px' }} />
                            </td>
                          ))}
                          <td>{calculateTotal(ecritValues)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </TabPane>
              </TabContent>
            </TabContainer>
          </CardBody>
        </Card>
      </Row>
    </div>
  )
}

export default AddNote