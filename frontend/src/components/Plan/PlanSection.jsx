import React from 'react';
import Select from 'react-select';
import { Button } from "react-bootstrap";
import { lectureOption, lifeSkillOptions } from '../../data/OptionData';

const PlanSection = ({ data, activeJournee, onDataChange, onAddSection, onDeleteSection }) => {
    const sections = data.journee[activeJournee]?.sections || [];
    const handleSectionChange = (sectionId, field, value) => {
        const updatedData = { ...data };
        const sections = updatedData.journee[activeJournee].sections;
        const sectionIndex = sections.findIndex((section) => section.id === sectionId);
        if (sectionIndex >= 0) {
            sections[sectionIndex].content[field] = value;
        }
        onDataChange(updatedData);
    };


    return (
        <div style={{ height: "700px" }} className="widget-timeline dz-scroll style-1 height370 ">
            {sections.map((section, index) => (
                <div key={index}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="m-0">{section.title}</h6>
                        <Button className="btn-rounded-sm " variant="danger tp-btn-light" onClick={() => onDeleteSection(section.id)}>
                            <i className="fas fa-times" />
                        </Button>
                    </div>
                    {Object.keys(section.content).map((field) => (
                        <div key={field} className="input-success">
                            <label htmlFor={field}>{field.replace(/_/g, ' ')}</label>
                            {field.includes('objectif') || field.includes('lexique') || field.includes('structure') ? (
                                <textarea
                                    className="form-control mb-3"
                                    rows="4"
                                    id={field}
                                    value={section.content[field]}
                                    onChange={(e) => handleSectionChange(section.id, field, e.target.value)}
                                ></textarea>
                            ) : field === 'Lecture' ? (
                                <Select
                                    options={lectureOption}
                                    className="mb-3"
                                    value={lectureOption.find((opt) => opt.value === section.content[field])}
                                    onChange={(selectedOption) => handleSectionChange(section.id, field, selectedOption.value)}
                                />
                            ) : field === 'La_compétence_de_vie' ? (
                                <Select
                                    options={lifeSkillOptions}
                                    className="mb-3"
                                    value={lifeSkillOptions.find((opt) => opt.value === section.content[field])}
                                    onChange={(selectedOption) => handleSectionChange(section.id, field, selectedOption.value)}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id={field}
                                    placeholder=""
                                    value={section.content[field]}
                                    onChange={(e) => handleSectionChange(section.id, field, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
            <Button className="btn-rounded-sm mb-3" onClick={onAddSection}>Ajouter</Button>
        </div>
    );
};

export default PlanSection;
