import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import { Button, Card, CardBody, CardHeader, Form, Nav, OverlayTrigger, Row, TabContainer, TabContent, TabPane, Table, Tooltip } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import { ClasseOption, EvaluationTypeOption } from '../../data/OptionData';
import { EcritCritere, LectureCritere, OralCritere, RecitationCritere } from '../../data/TheadData';

function AddNote() {
  const [classe, setClasse] = useState('');
  const [evaTypeOption, setEvaTypeOption] = useState('');
  const [students, setStudents] = useState([]); // Array of students
  const [recitationValues, setRecitationValues] = useState({});
  const [oralValues, setOralValues] = useState({});
  const [lectureValues, setLectureValues] = useState({});
  const [ecritValues, setEcritValues] = useState({});

  const handleClasseChange = async (selectedOption) => {
    setClasse(selectedOption.value);
    try {
      const response = await axios.get(`http://localhost:5000/api/students?classe=${selectedOption.label}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

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

  const handleSubmit = async () => {
    const total = calculateTotal(recitationValues) + calculateTotal(oralValues) + calculateTotal(lectureValues) + calculateTotal(ecritValues);
    const newNote = {
      classe,
      evaluationType: evaTypeOption,
      recitation: recitationValues,
      oral: oralValues,
      lecture: lectureValues,
      ecrit: ecritValues,
      total
    };

    try {
      await axios.post('http://localhost:5000/api/notes', newNote);
      alert('Note added successfully!');
    } catch (error) {
      console.error('Error adding note:', error);
      alert('Error adding note');
    }
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
                  <Select isSearchable={false} options={ClasseOption} className="custom-react-select" value={ClasseOption.find((opt) => opt.value === classe)} onChange={handleClasseChange} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="form-label">Type d'évaluation</label>
                  <Select isSearchable={false} options={EvaluationTypeOption} className="custom-react-select" value={EvaluationTypeOption.find((opt) => opt.value === evaTypeOption)} onChange={(e) => setEvaTypeOption(e.value)} />
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
                          <th key={i}>
                            <OverlayTrigger
                              trigger="hover"
                              placement="top"
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
                      {students.map((student, index) => (
                        <tr key={index}>
                          <td>{student.firstName} {student.lastName}</td>
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
                              trigger="hover"
                              placement="top"
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
                      {students.map((student, index) => (
                        <tr key={index}>
                          <td>{student.firstName} {student.lastName}</td>
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
                            trigger="hover"
                            placement="top"
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
                    {students.map((student, index) => (
                      <tr key={index}>
                        <td>{student.firstName} {student.lastName}</td>
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
                            trigger="hover"
                            placement="top"
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
                    {students.map((student, index) => (
                      <tr key={index}>
                        <td>{student.firstName} {student.lastName}</td>
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
      <Button className="btn btn-primary mt-3" onClick={handleSubmit}>Enregistrer la Note</Button>
    </Row>
  </div>
)
}

export default AddNote;
