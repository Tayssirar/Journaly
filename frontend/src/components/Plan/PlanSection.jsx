import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { lifeSkillOptions } from '../../data/OptionData';

const PlanSection = ({ data, activeJournee, onEditSection, onDeleteSection }) => {
    const sections = data.journee[activeJournee]?.sections || [];

    const handleSectionChange = (sectionId, field, value) => {
        const updatedData = { ...data };
        const sections = updatedData.journee[activeJournee].sections;
        const sectionIndex = sections.findIndex((section) => section.id === sectionId);
        if (sectionIndex >= 0) {
            sections[sectionIndex].content[field] = value;
        }
        onEditSection(updatedData);
    };

    return (
        <div style={{ height: "700px" }} className="widget-timeline dz-scroll style-1 height370 ">
            {sections.map((section, index) => (
                <div key={index}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className="m-0">{section.title}</h6>
                        <div>
                            <Button className="btn-rounded-sm btn-sm" variant="primary" onClick={() => onEditSection(section)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button className="btn-rounded-sm btn-sm" variant="danger" onClick={() => onDeleteSection(section.id)}>
                                <FontAwesomeIcon icon={faTrash} />
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
    );
};

export default PlanSection;
