import React, { useState, useRef } from 'react';
import { Accordion, AccordionHeader, AccordionItem, Button, Card, CardBody, CardHeader, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom';
import CustomJoditEditor from '../../CustomJoditEditor';
import NoImage from '../../../assets/images/no-image.jpg';
import Nestable from 'react-nestable';

const Production = () => {
    const location = useLocation();
    const { selectedExam } = location.state || {};
    const [sections, setSections] = useState([]); // Initialize sections as an empty array
    const componentRef = useRef();

    if (!selectedExam) {
        return <div>Erreur: Sélectionner un examen</div>;
    }

    const handleAddSection = () => {
        setSections([...sections, { id: Date.now(), title: `Section ${sections.length + 1}`, content: '', image: null, criteria: '' }]);
    };

    const handleRemoveSection = (sectionId) => {
        setSections(sections.filter(section => section.id !== sectionId));
    };

    const handleContentChange = (sectionId, newContent) => {
        setSections(sections.map(section =>
            section.id === sectionId ? { ...section, content: newContent } : section
        ));
    };

    const handleImageChange = (sectionId, file) => {
        setSections(sections.map(section =>
            section.id === sectionId ? { ...section, image: file } : section
        ));
    };

    const handleCriteriaChange = (sectionId, newCriteria) => {
        setSections(sections.map(section =>
            section.id === sectionId ? { ...section, criteria: newCriteria } : section
        ));
    };
    
    const handleNestableChange = ({ items }) => {
        console.log("Before section order change:", sections);
        setSections(items);
        console.log("After section order change:", items);
    };
    

    return (
        <div className='doc-container'>
            <React.Fragment>
                <div className='exam-area'>
                    <Card>
                        <CardHeader>
                            <Button className="btn btn-primary" onClick={handleAddSection}>
                                Add Section
                            </Button>
                            <ReactToPrint
                                trigger={() => <button className="btn btn-light" type="button">
                                    <i className="fa fa-print" /> Imprimer
                                </button>}
                                content={() => componentRef.current}
                            />
                        </CardHeader>
                        <CardBody>
                            <Accordion className="accordion accordion-primary" defaultActiveKey="0">
                                <Nestable
                                    items={sections}
                                    renderItem={({ item }) => (
                                        <div className="mb-3" key={item.id}>
                                            <AccordionItem eventKey={`${item.id}`} className="accordion-item">
                                            <AccordionHeader className="accordion-header rounded-lg">
                                                    <div className='d-flex align-items-center'>
                                                    <div style={{ marginLeft: "50px" }}>
                                                            <h6 className="me-3">{item.title}</h6>
                                                        </div>
                                                        <div className="move-media dd-handle">
                                                            <i className="fas fa-arrows-alt" />
                                                        </div>
                                                        <div>
                                                            <Button className="btn-rounded-sm" variant="danger tp-btn" onClick={() => handleRemoveSection(item.id)}>
                                                                <i className="fas fa-times" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </AccordionHeader>
                                                <Accordion.Collapse eventKey={`${item.id}`} className="accordion__body">
                                                    <div className='mb-3'>
                                                        <div className="avatar-upload d-flex align-items-center my-3">
                                                            <div className="position-relative">
                                                                <div className="avatar-preview">
                                                                    <div
                                                                        id="imagePreview"
                                                                        style={{ backgroundImage: item.image ? `url(${URL.createObjectURL(item.image)})` : `url(${NoImage})` }}
                                                                    />
                                                                </div>
                                                                <div className="change-btn">
                                                                    <input type="file" onChange={(e) => handleImageChange(item.id, e.target.files[0])} id={`imageUpload-${item.id}`} className='d-none' />
                                                                    <label htmlFor={`imageUpload-${item.id}`} className="btn btn-primary ms-0">Selecter Image</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='mb-3'>
                                                            <label className="ms-0">Entrer le critère</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="C1"
                                                                value={item.criteria}
                                                                onChange={(e) => handleCriteriaChange(item.id, e.target.value)}
                                                            />
                                                        </div>
                                                        <CustomJoditEditor content={item.content} setContent={(newContent) => handleContentChange(item.id, newContent)} />
                                                    </div>
                                                </Accordion.Collapse>
                                            </AccordionItem>
                                        </div>
                                    )}
                                    onChange={handleNestableChange}
                                />
                            </Accordion>
                        </CardBody>
                    </Card>
                </div>
                <div className='exam-preview'>
                    <Card>
                        <CardBody ref={componentRef}>
                            <Table responsive className='exam-table'>
                                <thead className="text-center">
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
                                            <td style={{ width: '140px', textAlign: 'center' }}>
                                                {section.image && <img src={URL.createObjectURL(section.image)} alt="Section Image" width={'130px'} height={'130px'} />}
                                            </td>
                                            <td>
                                                <div className="textarea_editor text-black bg-transparent" dangerouslySetInnerHTML={{ __html: section.content }} />
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
            </React.Fragment>
        </div>
    );
};

export default Production;
