import React from 'react'

const StepTwo= () => {
  return (
    <div>
      <label htmlFor="formFileLg" className="form-label">Séléctionner le fichier word ou pdf à parcourir</label>
      <input className="form-control form-control-lg" id="formFileLg" type="file" />
  </div>
  )
}

export default StepTwo
