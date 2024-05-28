import React, { useState, useEffect } from 'react';
import { ClasseOption, EvaluationTypeOption } from '../../../data/OptionData';
import { DatePicker } from 'rsuite';
import lecture4trim1_2 from "../../../assets/images/exam/Lecture4trim1_2.png";
import lecture4trim3 from "../../../assets/images/exam/Lecture4trim3.png";
import dictee4trim1_2_3 from "../../../assets/images/exam/Dictee4trim1_2_3.png";
import ecriture4trim1_2_3 from "../../../assets/images/exam/Ecriture4trim1_2_3.png";
import production4trim1 from "../../../assets/images/exam/Production4trim1.png";
import production4trim2_3 from "../../../assets/images/exam/Production4trim2_3.png";

const StepOne = ({ setSelectedOptions, setDate }) => {
    const [classe, setClasse] = useState('');
    const [groupeOption, setGroupeOption] = useState([]);
    const [evaTypeOption, setEvaTypeOption] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    useEffect(() => {
        if (classe) {
            fetchGroupeOptions(classe);
        }
    }, [classe]);

    const fetchGroupeOptions = async (classe) => {
        try {
            const response = await fetch(`/api/groups?classe=${classe}`);
            const data = await response.json();
            setGroupeOption(data);
        } catch (error) {
            console.error("Error fetching group options:", error);
            setGroupeOption([]);
        }
    };

    const handleClasseChange = (e) => {
        const selectedClasse = ClasseOption.find(option => option.value === e.target.value);
        setClasse(selectedClasse.value);
        setSelectedOptions(options => ({ ...options, classe: selectedClasse.value, classeLabel: selectedClasse.label }));
    };
    
    const handleEvaTypeChange = (e) => {
        const selectedEvaType = EvaluationTypeOption.find(option => option.value === e.target.value);
        setEvaTypeOption(selectedEvaType.value);
        setSelectedOptions(options => ({ ...options, evaTypeOption: selectedEvaType.value , evaTypeLabel:  selectedEvaType.label }));
    };
    
    const handleGroupeChange = (e) => {
        setSelectedOptions(options => ({ ...options, groupeOption: e.target.value }));
    };



    const handleDateChange = (value) => {
        setDate(value.toString());
    };

    const getSelectedImage = (title, options) => {
        if (options.classe === '3' && (options.evaTypeOption === '7' || options.evaTypeOption === '8') && title === 'Lecture compréhension') {
            return lecture4trim1_2;
        } else if (options.classe === '3' && options.evaTypeOption === '9' && title === 'Lecture compréhension') {
            return lecture4trim3;
        } else if (options.classe === '3' && (options.evaTypeOption === '7' || options.evaTypeOption === '8' || options.evaTypeOption === '9') && title === 'Dictée') {
            return dictee4trim1_2_3;
        } else if (options.classe === '3' && (options.evaTypeOption === '7' || options.evaTypeOption === '8' || options.evaTypeOption === '9') && title === 'Écriture') {
            return ecriture4trim1_2_3;
        } else if (options.classe === '3' && options.evaTypeOption === '7' && title === 'Production écrite') {
            return production4trim1;
        } else if (options.classe === '3' && (options.evaTypeOption === '8' || options.evaTypeOption === '9') && title === 'Production écrite') {
            return production4trim2_3;
        } else {
            return null; // Default image or null if no match
        }
    };

    useEffect(() => {
        if (selectedTitle) {
            const selectedImage = getSelectedImage(selectedTitle, { classe, evaTypeOption });
            setSelectedOptions(options => ({ ...options, selectedImage, title: selectedTitle }));
        }
    }, [selectedTitle, classe, evaTypeOption, setSelectedOptions]);

    return (
        <section>
            <div className='d-flex justify-content-center mb-4'>
                <DatePicker oneTap onChange={handleDateChange} className="picker-suit" />
            </div>
            <div className="row">
                <div className="col-lg-4 mb-2">
                    <div className="form-group">
                        <label className="form-label">Type d'évaluation</label>
                        <div className="">
                            {EvaluationTypeOption.map((option) => (
                                <div className="form-check" key={option.value}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value={option.value}
                                        checked={evaTypeOption === option.value}
                                        onChange={handleEvaTypeChange}
                                    />
                                    <label className="form-check-label" htmlFor={option.value}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="form-group">
                        <label className="form-label">Classe</label>
                        <div>
                            {ClasseOption.map((option) => (
                                <div className="form-check" key={option.value}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value={option.value}
                                        checked={classe === option.value}
                                        onChange={handleClasseChange}
                                    />
                                    <label className="form-check-label" htmlFor={option.value}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="form-group">
                        <label className="form-label">Groupe</label>
                        <div>
                            {groupeOption.length > 0 ? (
                                groupeOption.map((option) => (
                                    <div className="form-check" key={option.value}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            value={option.value}
                                            onChange={handleGroupeChange}
                                        />
                                        <label className="form-check-label" htmlFor={option.value}>{option.label}</label>
                                    </div>
                                ))
                            ) : (
                                <p>No group options available.</p>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="fs-20 font-w700 my-4">Choisir</h4>
                    <select className="form-select" value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}>
                        <option value="">Sélectionnez un examen</option>
                        <option value="Lecture compréhension">Lecture compréhension</option>
                        <option value="Production écrite">Production écrite</option>
                        <option value="Langue">Langue</option>
                        <option value="Écriture">Écriture</option>
                        <option value="Dictée">Dictée</option>
                    </select>
                </div>
            </div>
            </section>
        );
    };
    
    export default StepOne;
    