import React, { useState } from 'react';
import { ClasseOption, EvaluationTypeOption } from '../../../data/OptionData';
import { DatePicker } from 'rsuite';

const StepOne = () => {
  const [classe, setClasse] = useState('');
  const [groupeOption, setGroupeOption] = useState([]);
  const [evaTypeOption, setEvaTypeOption] = useState('');

  const handleClasseChange = (e) => {
    setClasse(e.target.value);
  };

  const handleGroupeChange = (e) => {
    setGroupeOption(e.target.value);
  };

  const handleEvaTypeChange = (e) => {
    setEvaTypeOption(e.target.value);
  };

  return (
    <section>
      <div className=' d-flex  justify-content-center mb-4'>
      <DatePicker oneTap className="picker-suit"/> 
      </div>
      <div className="row">  
        <div className="col-lg-4 mb-2">
          <div className="form-group">
            <label className="form-label">Type d'évaluation</label>
            <div className="">
              {EvaluationTypeOption.map((option, index) => (
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
            <div >
              {ClasseOption.map((option, index) => (
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
            <div >
              {groupeOption.map((option, index) => (
                <div className="form-check" key={option.value}>
                  <input
                    className="form-check-input"
                    type="radio"
                    value={option.value}
                    checked={groupeOption === option.value}
                    onChange={handleGroupeChange}
                  />
                  <label className="form-check-label" htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StepOne;
