import React from 'react'
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import {  lectureOption, lifeSkillOptions } from '../data/OptionData';


function Sections({sections, setSections, updatePreview}) {

    const handleSectionChange = (id, field, value) => {
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === id
            ? {
                ...section,
                content: {
                  ...section.content,
                  [field]: value,
                },
              }
            : section
        )
      );
      updatePreview();
    };
      
    const handleRemoveSection = (id) => {
      setSections((prevSections) => prevSections.filter((section) => section.id !== id));
      updatePreview();
    };
  
    const handleAddSection = (id) => {
      const selectedIndex = sections.findIndex((section) => section.id === id);
      if (selectedIndex !== -1) {
        const selectedSection = sections[selectedIndex];
        const newSection = {
          id: `new-section-${sections.length + 1}`,
          title: selectedSection.title,
          content: { ...selectedSection.content }, // clone the content
        };
        const updatedSections = [...sections];
        updatedSections.splice(selectedIndex + 1, 0, newSection);
        setSections(updatedSections);
        updatePreview();
      }
    };
      
    return (
      <>
          <div
        style={{ height: "370px" }}
        className="widget-timeline dz-scroll style-1 height370 my-4 px-4"
    >
        {sections.map((section, index) => (
          <div key={index}  >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="m-0">{section.title}</h6>
              <Button
                className="btn-rounded-sm "
                variant="outline-danger"
                onClick={() => handleRemoveSection(section.id)}
              >
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
                    onChange={(selectedOption) =>
                      handleSectionChange(section.id, field, selectedOption.label)
                    }
                  />
                ) : field === 'La_compétence_de_vie' ? (
                  <Select
                    options={lifeSkillOptions} 
                    className="mb-3"
                    value={lifeSkillOptions.find((opt) => opt.value === section.content[field])}
                    onChange={(selectedOption) =>
                      handleSectionChange(section.id, field, selectedOption.label)
                    }
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
            {section.id === 'lecture' || section.id === 'writing' ? (
              <Button
                className="me-2"
                variant="light btn-rounded"
                onClick={() => handleAddSection(section.id)}
              >
                <span className="btn-icon-start text-info">
                  <i className="fa fa-plus color-info" />
                </span>
                Ajouter
              </Button>
            ) : null}
          </div>
        ))}
    </div>
  </>
    )
  }

export default Sections
