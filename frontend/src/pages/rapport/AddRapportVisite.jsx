import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { usePrint } from '../../assets/context/PrintContext';
import { Col, Row } from 'react-bootstrap';

function AddRapportVisite() {
  const printRef = usePrint();

  const [region, setRegion] = useState('');
  const [school, setSchool] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [date, setDate] = useState('');
  const [numRapport, setNumRapport] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [classe, setClasse] = useState('');
  const [objectifVisite, setObjectifVisite] = useState('');
  const [remarque1, setRemarque1] = useState('');
  const [remarque2, setRemarque2] = useState('');
  const [remarque3, setRemarque3] = useState('');
  const [remarque4, setRemarque4] = useState('');
  const [remarque5, setRemarque5] = useState('');
  const [remarque6, setRemarque6] = useState('');
  const [numModule, setNumModule] = useState('');
  const [theme, setTheme] = useState('');
  const [journee, setJournee] = useState('');
  const [descriptionActivite1, setDescriptionActivite1] = useState('');
  const [remarqueActivite1, setRemarqueActivite1] = useState('');
  const [descriptionActivite2, setDescriptionActivite2] = useState('');
  const [remarqueActivite2, setRemarqueActivite2] = useState('');
  const [descriptionComportement, setDescriptionComportement] = useState('');
  const [remarqueComportement, setRemarqueComportement] = useState('');
  const [objectifVisiteProchaine, setObjectifVisiteProchaine] = useState('');
  const [note1, setNote1] = useState('');
  const [note2, setNote2] = useState('');
  const [note3, setNote3] = useState('');
  const [note4, setNote4] = useState('');
  const [note5, setNote5] = useState('');
  const [note6, setNote6] = useState('');
  const [note7, setNote7] = useState('');
  const [note8, setNote8] = useState('');
  const [note10, setNote10] = useState('');
  const [note11, setNote11] = useState('');
  const [note12, setNote12] = useState('');
  const [note13, setNote13] = useState('');
  const [note14, setNote14] = useState('');
  const [note15, setNote15] = useState('');
  const [note16, setNote16] = useState('');
  const [note17, setNote17] = useState('');
  const [apprentissageChecked, setApprentissageChecked] = useState(false);
  const [journeePalierChecked, setJourneePalierChecked] = useState(false);
  const [evaluationChecked, setEvaluationChecked] = useState(false);
  const [remediationChecked, setRemediationChecked] = useState(false);


  const noteOptions = (
    <>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </>
  );

  return (
    <>
      <ReactToPrint
        trigger={() => <button className="btn btn-light" type="button"><i className="fa fa-print" /> Imprimer</button>}
        content={() => printRef.current}
      />
      <div className="rapport-container" ref={printRef}>
        <header className="rapport-header input-success">
          <div className="col-sm-2">
            <input type="text" className="form-control" placeholder="Région" value={region} onChange={(e) => setRegion(e.target.value)} />
          </div>
          <div className="input-group">
            <h4>Rapport de la visite N° </h4>
            <div className="col-lg-1">
              <input type="text" className="form-control" placeholder="N° de Rapport" value={numRapport} onChange={(e) => setNumRapport(e.target.value)} />
            </div>
          </div>
        </header>
        <section className="rapport-details">
          <p className="input-group input-warning-o">
            <strong className="input-group-text">École :</strong> <input type="text" className="form-control" placeholder="École" value={school} onChange={(e) => setSchool(e.target.value)} /><br />
            <strong className="input-group-text">Niveau :</strong> <input type="text" className="form-control" placeholder="Niveau" value={classe} onChange={(e) => setClasse(e.target.value)} /><br />
            <strong className="input-group-text">Enseignant(e) :</strong> <input type="text" className="form-control" placeholder="Enseignant(e)" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
          </p>
          <p className="input-group input-warning-o">
            <strong className="input-group-text">Date :</strong> <input type="date" className="form-control" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
            <strong className="input-group-text">Horaire : de</strong> 
            <input type="time" className="form-control" placeholder="Heure de début" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <span className="input-group-text">h à </span>
            <input type="time" className="form-control" placeholder="Heure de fin" value={endTime} onChange={(e) => setEndTime(e.target.value)} /> 
            <span className="input-group-text">h</span>
          </p>
        </section>
        <section className="rapport-objective">
          <h4>Objectif de la visite :</h4>
          <textarea className="form-control" placeholder="Objectif de la visite" value={objectifVisite} onChange={(e) => setObjectifVisite(e.target.value)} />
        </section>
        <section className="rapport-section">
          <h4>1) Planification / Préparation :</h4>
          <table className="rapport-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Remarques et suggestions</th>
              </tr>
            </thead>
            <tbody className="input-success">
              <tr>
                <td>
                  <strong>Planification :</strong><br />
                  Adéquation avec les P.O: 
                  <select value={note1} onChange={(e) => setNote1(e.target.value)}>
                    {noteOptions}
                  </select><br />
                  Cohérence de la progression: 
                  <select value={note2} onChange={(e) => setNote2(e.target.value)}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" value={remarque1} onChange={(e) => setRemarque1(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Journal de classe :</strong><br />
                  Régularité: 
                  <select value={note3} onChange={(e) => setNote3(e.target.value)}>
                    {noteOptions}
                  </select><br />
                  Clarté de présentation: 
                  <select value={note4} onChange={(e) => setNote4(e.target.value)}>
                    {noteOptions}
                  </select><br />
                  Précision des indications: 
                  <select value={note5} onChange={(e) => setNote5(e.target.value)}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" value={remarque2} onChange={(e) => setRemarque2(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Les fiches :</strong><br />
                  Régularité: 
                  <select value={note6} onChange={(e) => setNote6(e.target.value)}>
                    {noteOptions}
                  </select><br />
                  Adéquation avec les P.O: 
                  <select value={note7} onChange={(e) => setNote7(e.target.value)}>
                    {noteOptions}
                  </select><br />
                  Les spécificités de la discipline: 
                  <select value={note8} onChange={(e) => setNote8(e.target.value)}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" value={remarque3} onChange={(e) => setRemarque3(e.target.value)} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="rapport-section">
          <h4>2) Travaux écrits</h4>
          <table className="rapport-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Remarques et suggestions</th>
              </tr>
            </thead>
            <tbody className="input-danger">
              <tr>
                <td>
                  <strong>Cahier de roulement et cahiers de classe :</strong><br />
                  Présentation et qualité de l'écriture: 
                  <select value={note10} onChange={(e)=> setNote10(e.target.value)}>
 {noteOptions}
</select><br />
Périodicité de l'emploi: 
<select value={note11} onChange={(e) => setNote11(e.target.value)}>
 {noteOptions}
</select><br />
Autocorrection: 
<select value={note12} onChange={(e) => setNote12(e.target.value)}>
 {noteOptions}
</select>
</td>
<td>
<textarea className="form-control" placeholder="Remarques" value={remarque4} onChange={(e) => setRemarque4(e.target.value)} />
</td>
</tr>
<tr>
<td>
<strong>Les exercices :</strong><br />
Fréquence: 
<select value={note13} onChange={(e) => setNote13(e.target.value)}>
 {noteOptions}
</select><br />
Diversité: 
<select value={note14} onChange={(e) => setNote14(e.target.value)}>
 {noteOptions}
</select><br />
Progression: 
<select value={note15} onChange={(e) => setNote15(e.target.value)}>
 {noteOptions}
</select>
</td>
<td>
<textarea className="form-control" placeholder="Remarques" value={remarque5} onChange={(e) => setRemarque5(e.target.value)} />
</td>
</tr>
<tr>
<td>
<strong>Les cahiers d'activités :</strong><br />
Tenue: 
<select value={note16} onChange={(e) => setNote16(e.target.value)}>
 {noteOptions}
</select><br />
Suivi: 
<select value={note17} onChange={(e) => setNote17(e.target.value)}>
 {noteOptions}
</select>
</td>
<td>
<textarea className="form-control" placeholder="Remarques" value={remarque6} onChange={(e) => setRemarque6(e.target.value)} />
</td>
</tr>
</tbody>
</table>
</section>
<section className="rapport-section">
<h4>3) Activités observées</h4>
<table className="rapport-table">
<thead>
<tr>
<th>Module </th>
<th>Thème</th>
<th>Journée</th>
<th>Apprentissage</th>
<th>Journée palier</th>
<th>Évaluation</th>
<th>Remédiation</th>
</tr>
</thead>
<tbody>
<tr>
  <td><input type="text" value={numModule} onChange={(e) => setNumModule(e.target.value)} /></td>
  <td><input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} /></td>
  <td><input type="text" value={journee} onChange={(e) => setJournee(e.target.value)} /></td>
  <td><input type="checkbox" checked={apprentissageChecked} onChange={(e) => setApprentissageChecked(e.target.checked)} /></td>
  <td><input type="checkbox" checked={journeePalierChecked} onChange={(e) => setJourneePalierChecked(e.target.checked)} /></td>
  <td><input type="checkbox" checked={evaluationChecked} onChange={(e) => setEvaluationChecked(e.target.checked)} /></td>
  <td><input type="checkbox" checked={remediationChecked} onChange={(e) => setRemediationChecked(e.target.checked)} /></td>
</tr>

</tbody>
</table>
</section>
<section className="rapport-section">
<h4>Description des activités</h4>
<table className="rapport-table input-danger">
<thead>
<tr>
<th>Description des activités</th>
<th>Remarques et suggestions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<textarea className="form-control" placeholder="Description" rows={10} value={descriptionActivite1} onChange={(e) => setDescriptionActivite1(e.target.value)} />
</td>
<td>
<textarea className="form-control" placeholder="Remarques" rows={10} value={remarqueActivite1} onChange={(e) => setRemarqueActivite1(e.target.value)} />
</td>
</tr>
<tr>
<td>
<textarea className="form-control" placeholder="Description" rows={10} value={descriptionActivite2} onChange={(e) => setDescriptionActivite2(e.target.value)} />
</td>
<td>
<textarea className="form-control" placeholder="Remarques" rows={10} value={remarqueActivite2} onChange={(e) => setRemarqueActivite2(e.target.value)} />
</td>
</tr>
</tbody>
</table>
</section>
<section className="rapport-section">
<h4>Description des comportements</h4>
<table className="rapport-table">
<thead>
<tr>
<th>Description des comportements</th>
<th>Remarques et suggestions</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<textarea className="form-control" placeholder="Description" value={descriptionComportement} onChange={(e) => setDescriptionComportement(e.target.value)} />
</td>
<td>
<textarea className="form-control" placeholder="Remarques" value={remarqueComportement} onChange={(e) => setRemarqueComportement(e.target.value)} />
</td>
</tr>
</tbody>
</table>
</section>
<section className="rapport-objective">
<h4>Objectif de la prochaine visite :</h4>
<textarea className="form-control" placeholder="Objectif de la prochaine visite" value={objectifVisiteProchaine} onChange={(e) => setObjectifVisiteProchaine(e.target.value)} />
</section>
<section className="rapport-signatures" style={{ display: 'flex', justifyContent: 'space-between' }}>
<p>
{school}<br />
Le : {date}<br />
L'enseignant(e) : vu et pris copie<br />
(Prénom et nom, Signature)
</p>
<p>
<strong>Fait le :</strong> {date}<br />
<strong>L'assistant pédagogique</strong><br />
(Prénom et nom, Signature)
</p>
</section>
</div>
<style>
{`
@media print {
input, textarea, select {
border: none;
outline: none;
}
/* Retain table border when printing */
.rapport-table {
border: 1px solid #000;
}
}
`}
</style>
</>
);
}

export default AddRapportVisite;
