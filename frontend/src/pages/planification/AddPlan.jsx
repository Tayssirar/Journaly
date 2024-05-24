import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import Select from 'react-select';
import { ClasseOption, education_a_Option } from '../../data/OptionData';
import PlanSection from '../../components/PlanSection';
import JournePagination from '../../components/JournePagination';
import PlanPreview from './PlanPreview';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Card, CardBody, CardHeader, Form } from 'react-bootstrap';

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
  const handleJourneeChange = (pageNumber) => {
    setActiveJournee(pageNumber);
  };

  return (
    <>
      <PageTitle activeMenu={'Ajouter une Planification'} motherMenu={'Planification'} />
      <div className='doc-container'>
        <div className='text-area'>
            <Card>
              <CardHeader>
                <Form className='needs-validation' noValidate=''>
                  <div className='row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='classe'>classe:</label>
                      <Select
                        isSearchable={false}
                        options={ClasseOption}
                        className='custom-react-select'
                        value={ClasseOption.find((opt) => opt.value === classe)}
                        onChange={handleClasseChange}
                      />
                      <div className='invalid-feedback'>Vous devez entrer la classe.</div>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='theme'>thème de l'unité</label>
                      <input
                        type='text'
                        className='form-control'
                        id='theme'
                        placeholder=''
                        value={theme}
                        onChange={handleThemeChange}
                        required
                      />
                      <div className='invalid-feedback'>Vous devez enter le theme.</div>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='sous-theme'>sous-thème du module</label>
                      <input
                        type='text'
                        className='form-control'
                        id='subTheme'
                        placeholder=''
                        value={subTheme}
                        onChange={handleSubThemeChange}
                        required
                      />
                      <div className='invalid-feedback'>Vous devez enter le sous-theme.</div>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='education_a'>éducation à</label>
                      <Select
                        isSearchable={false}
                        options={education_a_Option}
                        className='custom-react-select'
                        value={education_a_Option.find((opt) => opt.value === education_a)}
                        onChange={handleEducationAChange}
                      />
                    </div>
                  </div>
                </Form>
              </CardHeader>
              <CardBody>
                <JournePagination activeJournee={activeJournee} handleJourneeChange={handleJourneeChange} />
                    <PerfectScrollbar>
                      {planData && Object.keys(planData).length > 0 && ( // Check if planData is not empty
                        <PlanSection
                          data={planData}
                          onDataChange={(updatedData) => setPlanData(updatedData)}
                          activeJournee={activeJournee}
                        />
                      )}
                    </PerfectScrollbar>
              </CardBody>
            </Card>
        </div>
        <div className="document-preview">
          <PlanPreview
            classe={classe}
            theme={theme}
            subTheme={subTheme}
            education_a={education_a}
            planData={planData}
          />
        </div>
      </div>
    </>
  );
};

export default AddPlan;
