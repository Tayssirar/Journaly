import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/PageTitle';
import Select from 'react-select';
import { Accordion, Card, Col, Form, Row } from "react-bootstrap";
import { ClasseOption, education_a_Option } from '../../data/OptionData';
import Sections from '../../components/Journal/Sections';
import JournalPreview from '../../components/Journal/JournalPreview';
import { DatePicker } from 'rsuite';
import TimePickerPicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const AddJournal = () => {
  const [classe, setClasse] = useState('');
  const [theme, setTheme] = useState('');
  const [subTheme, setSubTheme] = useState('');
  const [education_a, setEducation_a] = useState('');  
  const [journee, setJournee] = useState('');
  const [date, setDate] = useState('');
  const [time1, onChange] = useState(new Date());
  const [time2, onChange2] = useState('10:00');
  const [sections, setSections] = useState([
    {
      id: 'warmup',
      title: 'Mise en train',
      content: {
        Duré:'',
        contenu: '',
        Les_objectifs_spécifiques: '',
        Les_objectifs_de_la_séance:'',
        Les_supports: '',
        Les_étapes:'',
        La_compétence_de_vie: '',
        Observation:'',
      },
    },
    {
      id: 'oral',
      title: 'Communication orale',
      content: {
        Duré:'',
        La_situation: '',
        Les_objectifs_spécifiques: '',
        Les_objectifs_de_la_séance:'',
        Les_structures: '',
        Les_lexiques: '',
        Les_supports: '',
        Les_étapes:'',
        La_compétence_de_vie: '',
        Observation:'',
      },
    },
    {
      id: 'lecture',
      title: 'Lecture',
      content: {
        Duré:'',
        Type: '',
        titre_du_texte: '',
        Les_objectifs_spécifiques: '',
        Les_objectifs_de_la_séance:'',
        Les_supports: '',
        Les_étapes:'',
        La_compétence_de_vie: '',
        Observation:'',
      },
    },
    {
      id: 'writing',
      title: 'Écrit',
      content: {
        Duré:'',
        Type: '',
        Contenu: '',
        Ces_objectif_spécifique: '',
        Les_objectifs_de_la_séance:'',
        Les_supports: '',
        Les_étapes:'',
        La_compétence_de_vie: '',
        Observation:'',
      },
    },
  ]);
  const [previewData, setPreviewData] = useState(sections);

  useEffect(() => {
    setPreviewData(sections);
  }, [sections]);

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

  const handleJourneeChange = (e) => {
    setJournee(e.target.value);
  };

  const handleEducationAChange = (e) => {
    setEducation_a(e.target.value);
  };

  const handleDateChange = (value) => {
    if (value instanceof Date) {
      setDate(value.toLocaleDateString());
    } else {
      setDate(value);
    }
  };
  console.log("🚀 ~ handleDateChange ~ handleDateChange:", handleDateChange)

  const handleTimeChange1 = (value) => {
    console.log("🚀 ~ handleTimeChange1 ~ handleTimeChange1:", handleTimeChange1)
    onChange(value instanceof Date ? value.toLocaleTimeString() : value);
  };

  const handleTimeChange2 = (value) => {
    console.log("🚀 ~ handleTimeChange2 ~ handleTimeChange2:", handleTimeChange2)
    onChange2(value instanceof Date ? value.toLocaleTimeString() : value);
  };

  return (
    <>
      <PageTitle activeMenu={'Ajouter une Journée'} motherMenu={'Journal'} />
      <div className='doc-container'>
        <div className='text-area '>
          <Card>
            <Accordion className="accordion accordion-primary col-lg-12">
              <Accordion.Item className="accordion-item" defaultActiveKey="0">
                <Accordion.Header className="accordion-header rounded-lg">
                  cliquer ici
                </Accordion.Header>
                <Accordion.Collapse>
                  <div className="accordion-body ">
                    <Form className='needs-validation' noValidate=''>
                      <Row>
                        {/* Date */}
                        <div className='col-md-6 justify-content-center mb-2'>
                          <label htmlFor='date'>date:</label>
                          <DatePicker
                            oneTap
                            className="picker-suit"
                            value={date}
                            onChange={handleDateChange}
                          />
                        </div>
                        {/* Classe */}
                        <div className='col-md-6 '>
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
                        {/* Horaire */}
                        <div className="picker-data mb-2">
                          <Col className="color-time-picker">
                            de <TimePickerPicker onChange={handleTimeChange1} value={time1} />
                            au <TimePickerPicker onChange={handleTimeChange2} value={time2} />
                          </Col>
                        </div>
                        {/* Theme */}
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
                        {/* Subtheme */}
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
                          <div className='invalid-feedback'>Vous devez entrer le sous-thème.</div>
                        </div>
                        {/* Journee */}
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
                        {/* Education */}
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
                      </Row>
                    </Form>
                  </div>
                </Accordion.Collapse>
              </Accordion.Item>
            </Accordion>
            <Sections
              sections={sections}
              setSections={setSections}
              updatePreview={updatePreview}
            />
          </Card>
        </div>
        <div className='document-preview'>
          <JournalPreview
            previewData={previewData}
            classe={classe}
            theme={theme}
            subTheme={subTheme}
            education_a={education_a}
            journee={journee}
            date={date}
            time1={time1}
            time2={time2}
          />
        </div>
      </div>
    </>
  );
};

export default AddJournal;
