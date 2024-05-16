import React, { useState } from 'react'
import { ClasseOption } from '../../../data/OptionData'

const StepOne= () => {
  const [classe, setClasse]= useState('');
  const handleClasseChange=(e) =>{
    setClasse(e.target.value)
};

  return (
    <section>
            <div className="row">
            <div className="col-lg-12 mb-2 d-flex justify-content-center ">
              {ClasseOption.map((option) => (
                <div className="form-check form-check-inline" key={option.value}>
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
    </section>
  )
}

export default StepOne
