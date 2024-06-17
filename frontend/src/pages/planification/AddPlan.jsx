import React, { useState, useEffect, useRef } from 'react';
import PageTitle from '../../components/PageTitle';
import Select from 'react-select';
import { ClasseOption, education_a_Option } from '../../data/OptionData';
import { Card, CardBody, Button, Table } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import PlanSection from '../../components/Plan/PlanSection';

const staticData = {
    common: {
        theme: 'Theme',
        subTheme: 'SubTheme',
        education_a: 'EducationA',
    },
    journee: {
        1: {
            sections: [
                {
                    id: 'warmup',
                    title: 'Mise en train',
                    content: {
                        contenu: 'Contenu 1',
                        Les_objectifs_spécifiques: 'Objectifs spécifiques 1',
                        La_compétence_de_vie: 'Compétence de vie 1',
                    },
                },
                {
                    id: 'oral',
                    title: 'orale',
                    content: {
                        contenu: 'Contenu 1',
                        Les_objectifs_spécifiques: 'Objectifs spécifiques 1',
                        La_compétence_de_vie: 'Compétence de vie 1',
                    },
                },
                // More sections as needed...
            ],
        },
        2: {
            sections: [
                {
                    id: 'warmup',
                    title: 'Mise en train',
                    content: {
                        contenu: 'Contenu 2',
                        Les_objectifs_spécifiques: 'Objectifs spécifiques 2',
                        La_compétence_de_vie: 'Compétence de vie 2',
                    },
                },
                // More sections as needed...
            ],
        },
        // Add more data for days 3 to 8...
    },
};

const fetchPlanData = async () => {
    // Simulated API call with static data
    return new Promise((resolve) => setTimeout(() => resolve(staticData), 100));
};

const AddPlan = () => {
    const [classe, setClasse] = useState('');
    const [theme, setTheme] = useState(staticData.common.theme);
    const [subTheme, setSubTheme] = useState(staticData.common.subTheme);
    const [education_a, setEducation_a] = useState(staticData.common.education_a);
    const [activeJournee, setActiveJournee] = useState(1);
    const [planData, setPlanData] = useState(staticData);
    const componentRef = useRef();

    useEffect(() => {
        fetchPlanData(activeJournee).then((data) => {
            setPlanData(data || {}); // Ensure data is not undefined
            setTheme(data?.common?.theme); // Update theme using data fetched from planData
            setSubTheme(data?.common?.subTheme); // Update subTheme using data fetched from planData
            setEducation_a(data?.common?.education_a); // Update education_a using data fetched from planData
        });
    }, [activeJournee]);

    const handleClasseChange = (selectedOption) => {
        setClasse(selectedOption.value);
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleSubThemeChange = (e) => {
        setSubTheme(e.target.value);
    };

    const handleEducationAChange = (selectedOption) => {
        setEducation_a(selectedOption.value);
    };

    const handleJourneeChange = (journee) => {
        setActiveJournee(journee);
    };

    // Add a new section
    const handleAddSection = (journee) => {
        const newSectionTitle = prompt("Enter the new section title:");
        if (newSectionTitle) {
            const updatedData = { ...planData };
            const sections = updatedData.journee[journee].sections;
            const newSectionId = `section${sections.length + 1}`; // Generate a unique section ID
            sections.push({
                id: newSectionId,
                title: newSectionTitle,
                content: {
                    textarea: "", // Use a textarea for the content
                },
            });
            setPlanData(updatedData);
        }
    };

    // Delete an existing section
    const handleDeleteSection = (journee, sectionId) => {
        const updatedData = { ...planData };
        const sections = updatedData.journee[journee].sections;
        const updatedSections = sections.filter((section) => section.id !== sectionId);
        updatedData.journee[journee].sections = updatedSections;
        setPlanData(updatedData);
    };

    return (
        <>
            <PageTitle activeMenu={'Ajouter une Planification'} motherMenu={'Planification'} />
            <div>
                <div className="document-preview">
                    <ReactToPrint
                        trigger={() => (
                            <button className="btn btn-light" type="button">
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
                                      <th colSpan="2">classe:
                                          <Select
                                              isSearchable={false}
                                              options={ClasseOption}
                                              className='custom-react-select'
                                              value={ClasseOption.find((opt) => opt.value === classe)}
                                              onChange={handleClasseChange}
                                          />
                                      </th>
                                      <th colSpan="3">thème:
                                          <input
                                              type='text'
                                              className='form-control'
                                              id='theme'
                                              placeholder=''
                                              value={theme}
                                              onChange={handleThemeChange}
                                              required
                                          />
                                      </th>
                                  </tr>
                                  <tr className="table-primary">
                                      <th colSpan="3">sous-thème:
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
                                              className={activeJournee === journee ? 'active' : ''}
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
                                      planData.journee[journee] ? (
                                          <td key={journee}>
                                              <PlanSection
                                                  data={planData}
                                                  activeJournee={journee}
                                                  onDataChange={setPlanData}
                                                  onAddSection={() => handleAddSection(journee)}
                                                  onDeleteSection={(sectionId) => handleDeleteSection(journee, sectionId)}
                                              />
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
        </>
    );
};

export default AddPlan;
