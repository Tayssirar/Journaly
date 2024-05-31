import React, { useState, useRef } from 'react';
import { Accordion, AccordionHeader, AccordionItem, Button, Card, CardBody, CardHeader, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom';
import TextSection from '../../../components/Lecture/TextSection';
import Q1Section from '../../../components/Lecture/Q1Section';
import Q2Section from '../../../components/Lecture/Q2Section';

const Lecture = () => {
    const location = useLocation();
    const { selectedExam } = location.state || {};
    const [sections, setSections] = useState([]);
    const componentRef = useRef();

    if (!selectedExam) {
        return <div>Erreur: Sélectionner un examen </div>;
    }

    const addSection = (type) => {
        const newSection = {
            id: Date.now(),
            type: type,
            content: '',
            question: '',
            leftItems: [''],
            rightItems: [''],
            lines: [],
            criteria: ''  // New criteria property
        };
        setSections([...sections, newSection]);
    };

    const removeSection = (id) => {
        setSections(sections.filter(section => section.id !== id));
    };

    const changeSectionPosition = (id, direction) => {
        const index = sections.findIndex(section => section.id === id);
        const newIndex = direction === 'up' ? index - 1 : index + 1;

        if (newIndex >= 0 && newIndex < sections.length) {
            const updatedSections = [...sections];
            const sectionToMove = updatedSections.splice(index, 1)[0];
            updatedSections.splice(newIndex, 0, sectionToMove);
            setSections(updatedSections);
        }
    };

    const handleContentChange = (sectionId, key, newContent) => {
        setSections(sections.map(section => 
            section.id === sectionId ? { ...section, [key]: newContent } : section
        ));
    };

    const handleCriteriaChange = (sectionId, newCriteria) => {
        setSections(sections.map(section =>
            section.id === sectionId ? { ...section, criteria: newCriteria } : section
        ));
    };

    return (
        <div className='doc-container'>
            <>
                <div className='exam-area'>
                    <Card>
                        <CardHeader>
                            <div className='row'>
                                <Button variant="success tp-btn" onClick={() => addSection('text')}>Ajouter un texte</Button>
                                <Button variant="warning tp-btn" onClick={() => addSection('matchQ')}>Ajouter une question</Button>
                                <Button variant="info tp-btn" onClick={() => addSection('QR')}>Ajouter une question avec marge de réponse</Button>
                            </div>
                            <ReactToPrint
                                trigger={() => <button className="btn btn-light" type="button">
                                    <i className="fa fa-print" />
                                </button>}
                                content={() => componentRef.current}
                            />
                        </CardHeader>
                        <CardBody>
                            <Accordion className="accordion accordion-danger-solid" defaultActiveKey="0">
                                {sections.map((section, index) => (
                                    <div className="mb-3" key={section.id}>
                                        <AccordionItem eventKey={`${index}`} className="accordion-item">
                                            <AccordionHeader className="accordion-header rounded-lg">
                                                <Button className="btn-rounded-sm" variant="danger tp-btn" onClick={() => removeSection(section.id)}>
                                                    <i className="fas fa-times" />
                                                </Button>
                                            </AccordionHeader>
                                            <Accordion.Collapse eventKey={`${index}`} className="accordion__body">
                                                <div key={section.id} className="accordion-body">
                                                    {section.type === 'text' && (
                                                        <TextSection
                                                            content={section.content}
                                                            setContent={(newContent) => handleContentChange(section.id, 'content', newContent)}
                                                        />
                                                    )}
                                                    {section.type === 'matchQ' && (
                                                        <Q1Section
                                                            question={section.question}
                                                            leftItems={section.leftItems}
                                                            rightItems={section.rightItems}
                                                            setQuestion={(newContent) => handleContentChange(section.id, 'question', newContent)}
                                                            setLeftItems={(newContent) => handleContentChange(section.id, 'leftItems', newContent)}
                                                            setRightItems={(newContent) => handleContentChange(section.id, 'rightItems', newContent)}
                                                        />
                                                    )}
                                                    {section.type === 'QR' && (
                                                        <Q2Section
                                                            question={section.question}
                                                            lines={section.lines}
                                                            setQuestion={(newContent) => handleContentChange(section.id, 'question', newContent)}
                                                            setLines={(newContent) => handleContentChange(section.id, 'lines', newContent)}
                                                        />
                                                    )}
                                                    <label className="ms-0">Entrer le critère</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="C1"
                                                        value={section.criteria}
                                                        onChange={(e) => handleCriteriaChange(section.id, e.target.value)}
                                                    />
                                                </div>
                                            </Accordion.Collapse>
                                        </AccordionItem>
                                    </div>
                                ))}
                            </Accordion>
                        </CardBody>
                    </Card>
                </div>
                <div className='exam-preview'>
                    <Card>
                        <CardBody ref={componentRef}>
                            <Table responsive>
                                <thead className="text-center exam-table">
                                    <tr>
                                        <th>
                                            <h4>{selectedExam.ecole}</h4>
                                            <br />
                                            <h4>{selectedExam.classeLabel} ....</h4>
                                        </th>
                                        <th>
                                            <h4>{selectedExam.evaTypeLabel}</h4>
                                            <br />
                                            <h5>{selectedExam.date}</h5>
                                        </th>
                                        <th>
                                            <h4>Nom et Prénom</h4><br />
                                            <p>.......................</p>
                                        </th>
                                    </tr>
                                </thead>
                            </Table>
                            <Table responsive>
                                <tbody>
                                    {sections.map((section) => (
                                        <tr key={section.id}>
                                            <td>
                                                {section.type === 'text' && (
                                                    <div className="textarea_editor text-black bg-transparent" dangerouslySetInnerHTML={{ __html: section.content }} />
                                                )}
                                                {section.type === 'matchQ' && (
                                                    <div>
                                                        <p>{section.question}</p>
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                {section.leftItems.map((item, index) => (
                                                                    <p key={index}>{item}</p>
                                                                ))}
                                                            </div>
                                                            <div>
                                                                {section.rightItems.map((item, index) => (
                                                                    <p key={index}>{item}</p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {section.type === 'QR' && (
                                                    <div>
                                                        <p>{section.question}</p>
                                                        {section.lines.map((_, index) => (
                                                            <p key={index}>.....................................................................................................................</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </td>
                                            <td style={{ width: '60px', textAlign: 'center' }}>
                                                <div>{section.criteria}</div>
                                                <div style={{ border: '1px solid black', width: '50px', height: '20px', marginTop: '10px' }}></div>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan="3">
                                            <div className="text-center">
                                                <img src={selectedExam.selectedImage} alt="Bonne chance" className="img-fluid" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </>
        </div>
    );
};

export default Lecture;
