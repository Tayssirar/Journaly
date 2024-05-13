import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import Select from 'react-select';
import { Card, CardBody, CardHeader, Form } from "react-bootstrap";
import { ClasseOption, education_a_Option } from '../../data/OptionData';
import { Scrollbars } from 'react-custom-scrollbars';
import Sections from '../../components/Sections';
import JournalPreview from '../../components/JournalPreview';


const AddJournal = () => {
  const [classe, setClasse] = useState('');
  const [theme, setTheme] = useState('');
  const [subTheme, setSubTheme] = useState('');
  const [education_a, setEducation_a] = useState('');  
  const [journee, setJournee]= useState('')
  const [sections, setSections] = useState([
    {
      id: 'warmup',
      title: 'Mise en train',
      content: {
        Dure:'',
        contenu: '',
        Les_objectifs_spécifiques: '',
        Les_objectifs_de_la_séance:'',
        La_compétence_de_vie: '',
      },
    },
    {
      id: 'oral',
      title: 'Communication orale',
      content: {
        Dure:'',
        La_situation: '',
        Les_objectifs_spécifiques: '',
        Les_objectifs_de_la_séance:'',
        Les_structures: '',
        Les_lexiques: '',
        Les_supports: '',
        La_compétence_de_vie: '',
      },
    },
    {
      id: 'lecture',
      title: 'Lecture',
      content: {
        Dure:'',
        Lecture: '',
        titre_du_texte: '',
        Les_objectifs_spécifiques: '',
        Les_objectifs_de_la_séance:'',
        Les_supports: '',
        La_compétence_de_vie: '',
      },
    },
    {
      id: 'writing',
      title: 'Écrit',
      content: {
        Dure:'',
        Contenu: '',
        Ces_objectif_spécifique: '',
        Les_objectifs_de_la_séance:'',
        Les_supports: '',
        La_compétence_de_vie: '',
      },
    },
  ]);
  const [previewData, setPreviewData] = useState(sections);

  

  useEffect(() => {
    setPreviewData(sections);
  }, [sections,]);

  const updatePreview = () => {
    setPreviewData(sections);
  };
  
  const handleClasseChange = (e) => {
    setClasse(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleSubThemeChange = (e) => {
    setSubTheme(e.target.value);
  };

  const handleJourneeChange=(e)=>{
    setJournee(e.target.value);
  }

  const handleEducationAChange = (e) => {
    setEducation_a(e.target.value);
  };




  
  return (
    <>
    <PageTitle activeMenu={'Ajouter une Journée'} motherMenu={'Journal'} />
      <div className='doc-container'>
        <div className='text-area'>
            <Card>
              <CardHeader>
                <Form className='needs-validation' noValidate=''>
                  <div className='row'>
                    {/*classe*/}
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
                    {/*theme*/}
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
                      <div className='invalid-feedback'>Vous devez entrer le thème.</div>
                    </div>
                    {/*soustheme*/}
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
                      <div className='invalid-feedback'>Vous devez entrer le sous-theme.</div>
                    </div>
                    {/*journee*/}
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='journee'>Journée</label>
                      <input
                        type='text'
                        className='form-control'
                        id='journee'
                        placeholder=''
                        value={journee}
                        onChange={handleJourneeChange}
                        required
                      />
                      <div className='invalid-feedback'>Vous devez entrer la journée.</div>
                    </div>
                    {/*education a*/}
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
                <Form >
                    <Scrollbars style={{ height: 600 }}>
                    <Sections
                      sections={sections} 
                      setSections={setSections} 
                      updatePreview={updatePreview}
                    />
                    </Scrollbars>
                </Form>
              </CardBody>
            </Card>
        </div>
        <div className='journal-preview'>
          <JournalPreview previewData={previewData} 
                        classe={classe}
                        theme={theme}
                        subTheme={subTheme}
                        education_a={education_a}
                        />
        </div>
      </div>
    </>
  );
};

export default AddJournal;
