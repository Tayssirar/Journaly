import React, { useState } from 'react';
import axios from 'axios';
import PageTitle from './PageTitle';
import Select from 'react-select';
import { Card, CardBody, CardHeader, Form, Nav, Row, Tab, TabContainer, Table } from 'react-bootstrap';
import { ClasseOption, EvaluationTypeOption } from '../data/OptionData';
import { RecitationCritere } from '../data/TheadData';

const ErrorClassification = () => {
  const [errors, setErrors] = useState([{ student: '', description: '', criterea: '', source: '', remediation: '' }]);
  const [classe, setClasse] = useState(ClasseOption[0]); // Default to the first class option
  const [groupeOption, setGroupeOption] = useState(null); // Set default group option if needed
  const [evaTypeOption, setEvaTypeOption] = useState(EvaluationTypeOption[0]); // Default to the first evaluation type option
  const [students, setStudents] = useState([
    { value: '1', label: 'Ahmed Ben Ali' },
    { value: '2', label: 'Fatma Ben Salem' },
    { value: '3', label: 'Mohamed Trabelsi' },
    { value: '4', label: 'Nadia Jebali' },
  ]);

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
    // Static examples for demonstration purposes
    const staticExamples = {
      "Oublie des mots ou saute des vers": {
        source: "L'élève ne se souvient pas bien des mots ou n'a pas suffisamment répété le poème.",
        remediation: "Répétition espacée: Encourager l'élève à répéter le poème à plusieurs reprises sur plusieurs jours. Utilisation de supports visuels: Utiliser des images ou des vidéos pour aider l'élève à mémoriser les vers. Segmentation du poème: Diviser le poème en petites sections et les apprendre une par une avant de les réciter ensemble. Création d'un poème visuel: L'élève peut dessiner les scènes décrites dans le poème pour se rappeler des vers."
      },
      "Chante faux ou hors du rythme": {
        source: "L'élève a des difficultés avec les notes de musique ou le rythme de la chanson.",
        remediation: "Pratique avec un métronome: Utiliser un métronome pour aider l'élève à maintenir le rythme. Entraînement auditif: Faire des exercices d'écoute pour que l'élève apprenne à reconnaître et à reproduire les notes correctement. Chant en groupe: Encourager l'élève à chanter en groupe pour apprendre le rythme et la mélodie des autres. Enregistrement et écoute: Enregistrer la voix de l'élève et la comparer avec la version correcte pour identifier les erreurs et les corriger."
      }
    };

    if (staticExamples[error]) {
      return staticExamples[error];
    } else {
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
                <Select
                  isSearchable={false}
                  options={ClasseOption}
                  className="custom-react-select"
                  value={classe}
                  onChange={(selectedOption) => setClasse(selectedOption)}
                />
              </div>
              <div className="form-group mr-2">
                <label className="form-label">Groupe</label>
                <Select
                  isSearchable={false}
                  options={groupeOption}
                  className="custom-react-select"
                  value={groupeOption}
                  onChange={(selectedOption) => setGroupeOption(selectedOption)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Évaluation</label>
                <Select
                  isSearchable={false}
                  options={EvaluationTypeOption}
                  className="custom-react-select"
                  value={evaTypeOption}
                  onChange={(selectedOption) => setEvaTypeOption(selectedOption)}
                />
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
                                
                              />
                            </td>
                            <td>
                              <textarea
                                type="text"
                                name="remediation"
                                value={error.remediation}
                                onChange={(event) => handleChange(index, event)}
                                
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
