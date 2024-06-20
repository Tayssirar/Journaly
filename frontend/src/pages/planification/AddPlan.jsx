import React, { useState, useEffect, useRef } from 'react';
import PageTitle from '../../components/PageTitle';
import Select from 'react-select';
import axios from 'axios';
import { ClasseOption, education_a_Option, lifeSkillOptions } from '../../data/OptionData';
import { Card, CardBody, Button, Table, Modal } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';

const fetchPlanData = async (subTheme) => {
    try {
        const response = await axios.get('/api/modules');
        const modules = response.data;
        const selectedModule = modules.find(module => module.nom === subTheme);
        return selectedModule || null;
    } catch (error) {
        console.error("Error fetching the plan data:", error);
        return null;
    }
};

const AddPlan = () => {
    const [classe, setClasse] = useState('');
    const [subTheme, setSubTheme] = useState('');
    const [education_a, setEducation_a] = useState('');
    const [journe, setJourne] = useState(1);
    const [planData, setPlanData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const componentRef = useRef();

    useEffect(() => {
        if (subTheme) {
            fetchPlanData(subTheme).then((data) => {
                if (data) {
                    setPlanData(data);
                }
            });
        }
    }, [subTheme]);

    const handleClasseChange = (selectedOption) => {
        setClasse(selectedOption.value);
    };

    const handleSubThemeChange = (e) => {
        setSubTheme(e.target.value);
    };

    const handleEducationAChange = (selectedOption) => {
        setEducation_a(selectedOption.value);
    };

    const handleJourneeChange = (journee) => {
        setJourne(journee);
    };

    const handleEdit = (journee, section) => {
        setModalContent({ journee, section });
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setModalContent(null);
    };

    const handleModalSave = () => {
        const { journee, section } = modalContent;
        const updatedData = { ...planData };
        const sections = updatedData.journées[journee].sections;
        const sectionIndex = sections.findIndex((s) => s.id === section.id);
        if (sectionIndex >= 0) {
            sections[sectionIndex] = section;
        }
        setPlanData(updatedData);
        setShowModal(false);
    };

    const handleInputChange = (field, value) => {
        setModalContent({
            ...modalContent,
            section: { ...modalContent.section, content: { ...modalContent.section.content, [field]: value } },
        });
    };

    const handleLifeSkillChange = (selectedOption) => {
        handleInputChange('La_compétence_de_vie', selectedOption.label);
    };

    const handleDeleteSection = (journee, sectionId) => {
        const updatedData = { ...planData };
        const sections = updatedData.journées[journee].sections;
        const updatedSections = sections.filter((section) => section.id !== sectionId);
        updatedData.journées[journee].sections = updatedSections;
        setPlanData(updatedData);
    };

    return (
        <>
            <style>
                {`
                    @media print {
                        .no-print {
                            display: none !important;
                        }
                    }
                `}
            </style>
            <PageTitle activeMenu={'Ajouter une Planification'} motherMenu={'Planification'} />
            <div>
                <div className="document-preview">
                    <ReactToPrint
                        trigger={() => (
                            <button className="btn btn-light no-print" type="button">
                                <i className="fa fa-print" /> Imprimer
                            </button>
                        )}
                        content={() => componentRef.current}
                    />
                    <div ref={componentRef}>
                        <Card>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr className="table-primary">
                                            <th>classe:
                                                <Select
                                                    isSearchable={false}
                                                    options={ClasseOption}
                                                    className='custom-react-select'
                                                    value={ClasseOption.find((opt) => opt.value === classe)}
                                                    onChange={handleClasseChange}
                                                />
                                            </th>
                                            <th colSpan="2">sous-thème:
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    id='subTheme'
                                                    placeholder=''
                                                    value={subTheme}
                                                    onChange={handleSubThemeChange}
                                                    required
                                                />
                                            </th>
                                            <th colSpan="2">éducation à:
                                                <Select
                                                    isSearchable={false}
                                                    options={education_a_Option}
                                                    className='custom-react-select'
                                                    value={education_a_Option.find((opt) => opt.value === education_a)}
                                                    onChange={handleEducationAChange}
                                                />
                                            </th>
                                        </tr>
                                        <tr className="table-success">
                                            {[1, 2, 3, 4].map((journee) => (
                                                <th
                                                    key={journee}
                                                    className={journe === journee ? 'active' : ''}
                                                    onClick={() => handleJourneeChange(journee)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    Journée {journee}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {[1, 2, 3, 4].map((journee) => (
                                                planData && planData.journées[journee] ? (
                                                    <td key={journee}>
                                                        <div style={{ height: "700px" }} className="widget-timeline dz-scroll style-1 height370 ">
                                                            {planData.journées[journee].sections.map((section, index) => (
                                                                <div key={index}>
                                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                                        <h6 className="m-0">{section.title}</h6>
                                                                        <div className="no-print">
                                                                            <Button className="btn-rounded-sm btn-sm" variant="primary" onClick={() => handleEdit(journe, section)}>
                                                                                <i className="fa fa-pencil" />
                                                                            </Button>
                                                                            <Button className="btn-rounded-sm btn-sm" variant="danger" onClick={() => handleDeleteSection(journe, section.id)}>
                                                                            <i class="fa fa-trash"></i>
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                    {Object.keys(section.content).map((field) => (
                                                                        <div key={field} className="mb-3">
                                                                            <strong>{field.replace(/_/g, ' ')}:</strong> {section.content[field]}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                ) : (
                                                    <td key={journee}>No data for Journée {journee}</td>
                                                )
                                            ))}
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier Section</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalContent && modalContent.section && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="section-title" className="form-label">Titre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="section-title"
                                    value={modalContent.section.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                />
                            </div>
                            {Object.keys(modalContent.section.content).map((field) => (
                                <div key={field} className="mb-3">
                                    <label htmlFor={field} className="form-label">{field.replace(/_/g, ' ')}</label>
                                    {field === 'La_compétence_de_vie' ? (
                                        <Select
                                            isSearchable={false}
                                            options={lifeSkillOptions}
                                            className='custom-react-select'
                                            value={lifeSkillOptions.find((opt) => opt.label === modalContent.section.content[field])}
                                            onChange={handleLifeSkillChange}
                                        />
                                    ) : (
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            id={field}
                                            value={modalContent.section.content[field]}
                                            onChange={(e) => handleInputChange(field, e.target.value)}
                                        ></textarea>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Fermer
                    </Button>
                    <Button variant="primary" onClick={handleModalSave}>
                        Enregistrer les modifications
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddPlan;
