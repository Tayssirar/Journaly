import React, { useState } from 'react';
import axios from 'axios';
import PageTitle from './PageTitle';
import Select from 'react-select';
import { Card, CardBody, CardHeader, Form, Nav, Row, Tab, TabContainer, Table } from 'react-bootstrap';
import { ClasseOption, EvaluationTypeOption } from '../data/OptionData';
import { RecitationCritere } from '../data/TheadData';

const ErrorClassification = () => {
  const [errors, setErrors] = useState([{ student: '', description: '', criterea: '', source: '', remediation: '' }]);
  const [classe, setClasse] = useState(null);
  const [groupeOption, setGroupeOption] = useState(null);
  const [evaTypeOption, setEvaTypeOption] = useState(null);
  const [students, setStudents] = useState([]); // Assume this is fetched from an API or static data

  const handleChange = (index, event) => {
    const newErrors = [...errors];
    newErrors[index][event.target.name] = event.target.value;
    setErrors(newErrors);
  };

  const handleStudentChange = (index, selectedOption) => {
    const newErrors = [...errors];
    newErrors[index].student = selectedOption;
    setErrors(newErrors);
  };

  const callChatGPT = async (criterea, error) => {
    try {
      const response = await axios.post('https://api.openai.com/sk-proj-FLP3f5EXCS2EFwqWfCqPT3BlbkFJWT8BCIV5EsVFl0id36WY', {
        prompt: `Pour le critère "${criterea}" et l'erreur "${error}", donnez une possible source d'erreur en 100 mots maximum et un exercice de remédiation en 300 mots maximum.`,
      });

      return response.data;
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      return { source: '', remediation: '' };
    }
  };

  const handleCritereaChange = async (index, selectedOption) => {
    const newErrors = [...errors];
    newErrors[index].criterea = selectedOption.value;
    setErrors(newErrors);

    const { source, remediation } = await callChatGPT(selectedOption.value, newErrors[index].description);
    newErrors[index].source = source;
    newErrors[index].remediation = remediation;
    setErrors(newErrors);
  };

  const addRow = () => {
    setErrors([...errors, { student: '', description: '', criterea: '', source: '', remediation: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/errors', { errors })
      .then(response => alert('Errors saved successfully!'))
      .catch(error => console.error('Error saving errors:', error));
  };

  const RecitationOptions = RecitationCritere.map(c => ({ value: c.title, label: c.text }));

  return (
    <div>
      <PageTitle motherMenu={'Note'} activeMenu={'Tableau de recensement et de classification des erreurs'} />
      <Row>
        <Card>
          <CardHeader>
            <Form className='d-flex justify-content-between'>
              <div className="form-group mr-2">
                <label className="form-label">Classe</label>
                <Select isSearchable={false} options={ClasseOption} className="custom-react-select" value={classe} onChange={(e) => setClasse(e.value)} />
              </div>
              <div className="form-group mr-2">
                <label className="form-label">Groupe</label>
                <Select isSearchable={false} options={groupeOption} className="custom-react-select" value={groupeOption} onChange={(e) => setGroupeOption(e.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Évaluation</label>
                <Select isSearchable={false} options={EvaluationTypeOption} className="custom-react-select" value={evaTypeOption} onChange={(e) => setEvaTypeOption(e.value)} />
              </div>
            </Form>
          </CardHeader>
          <CardBody className='mb-5'>
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
              <Tab.Content>
                <Tab.Pane eventKey="recitation">
                  <form onSubmit={handleSubmit}>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th>Les élèves concernés</th>
                          <th>Critère</th>
                          <th>Erreur</th>
                          <th>Source d'erreur</th>
                          <th>Pistes de remédiation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {errors.map((error, index) => (
                          <tr key={index}>
                            <td>
                              <Select
                                options={students}
                                value={error.student}
                                onChange={(selectedOption) => handleStudentChange(index, selectedOption)}
                              />
                            </td>
                            <td>
                              <Select
                                options={RecitationOptions}
                                value={error.criterea}
                                onChange={(selectedOption) => handleCritereaChange(index, selectedOption)}
                              />
                            </td>
                            <td>
                              <textarea
                                type="text"
                                name="description"
                                value={error.description}
                                onChange={(event) => handleChange(index, event)}
                              />
                            </td>
                            <td>
                              <textarea
                                type="text"
                                name="source"
                                value={error.source}
                                onChange={(event) => handleChange(index, event)}
                                readOnly
                              />
                            </td>
                            <td>
                              <textarea
                                type="text"
                                name="remediation"
                                value={error.remediation}
                                onChange={(event) => handleChange(index, event)}
                                readOnly
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className="d-flex justify-content-between mt-3">
                      <button type="button" className='btn btn-primary' onClick={addRow}>Ajouter</button>
                      <button type="submit" className='btn btn-primary'>Enregistrer</button>
                    </div>
                  </form>
                </Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default ErrorClassification;