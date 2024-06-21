import React, { useState } from 'react';
import ReactToPrint from 'react-to-print';
import { usePrint } from '../../assets/context/PrintContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddRapportVisite() {
  const printRef = usePrint();
  const navigate = useNavigate();

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
  const [notes, setNotes] = useState({});
  const [apprentissageChecked, setApprentissageChecked] = useState(false);
  const [journeePalierChecked, setJourneePalierChecked] = useState(false);
  const [evaluationChecked, setEvaluationChecked] = useState(false);
  const [remediationChecked, setRemediationChecked] = useState(false);

  const handleSave = async () => {
    const rapportData = {
      region,
      school,
      teacherName,
      date,
      numRapport,
      startTime,
      endTime,
      classe,
      objectifVisite,
      remarque1,
      remarque2,
      remarque3,
      remarque4,
      remarque5,
      remarque6,
      numModule,
      theme,
      journee,
      descriptionActivite1,
      remarqueActivite1,
      descriptionActivite2,
      remarqueActivite2,
      descriptionComportement,
      remarqueComportement,
      objectifVisiteProchaine,
      notes,
      apprentissageChecked,
      journeePalierChecked,
      evaluationChecked,
      remediationChecked
    };

    try {
      await axios.post('http://localhost:5000/api/rapports', rapportData);
      navigate('/AllRapport');
    } catch (error) {
      console.error('Error saving rapport:', error);
    }
  };

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
                  <select value={notes.note1} onChange={(e) => setNotes({ ...notes, note1: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Cohérence de la progression:
                  <select value={notes.note2} onChange={(e) => setNotes({ ...notes, note2: e.target.value })}>
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
                  <select value={notes.note3} onChange={(e) => setNotes({ ...notes, note3: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Clarté de présentation:
                  <select value={notes.note4} onChange={(e) => setNotes({ ...notes, note4: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Précision des indications:
                  <select value={notes.note5} onChange={(e) => setNotes({ ...notes, note5: e.target.value })}>
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
                  <select value={notes.note6} onChange={(e) => setNotes({ ...notes, note6: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Adéquation avec les P.O:
                  <select value={notes.note7} onChange={(e) => setNotes({ ...notes, note7: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Les spécificités de la discipline:
                  <select value={notes.note8} onChange={(e) => setNotes({ ...notes, note8: e.target.value })}>
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
                  <select value={notes.note10} onChange={(e) => setNotes({ ...notes, note10: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Périodicité de l'emploi:
                  <select value={notes.note11} onChange={(e) => setNotes({ ...notes, note11: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Autocorrection:
                  <select value={notes.note12} onChange={(e) => setNotes({ ...notes, note12: e.target.value })}>
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
                  <select value={notes.note13} onChange={(e) => setNotes({ ...notes, note13: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Diversité:
                  <select value={notes.note14} onChange={(e) => setNotes({ ...notes, note14: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Progression:
                  <select value={notes.note15} onChange={(e) => setNotes({ ...notes, note15: e.target.value })}>
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
                  <select value={notes.note16} onChange={(e) => setNotes({ ...notes, note16: e.target.value })}>
                    {noteOptions}
                  </select><br />
                  Suivi:
                  <select value={notes.note17} onChange={(e) => setNotes({ ...notes, note17: e.target.value })}>
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
        <button onClick={handleSave} className="btn btn-primary mt-3">Enregistrer</button>
        <button type="button" className="btn btn-danger light" onClick={() => { window.history.back(); }}>Cancel</button>
      </div>
      <style>
        {`
          @media print {
            input, textarea, select {
              border: none;
              outline: none;
            }
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
