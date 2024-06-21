import React, { useState, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import { usePrint } from '../../assets/context/PrintContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateRapportVisite() {
  const printRef = usePrint();
  const navigate = useNavigate();
  const { id } = useParams();
  const [rapportData, setRapportData] = useState(null);

  useEffect(() => {
    const fetchRapport = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/rapports/${id}`);
        setRapportData(response.data);
      } catch (error) {
        console.error('Error fetching rapport data:', error);
      }
    };

    fetchRapport();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/rapports/${id}`, rapportData);
      navigate('/AllRapports');
    } catch (error) {
      console.error('Error updating rapport:', error);
    }
  };

  const handleChange = (e) => {
    setRapportData({ ...rapportData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setRapportData({ ...rapportData, [e.target.name]: e.target.checked });
  };

  const noteOptions = (
    <>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </>
  );

  if (!rapportData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ReactToPrint
        trigger={() => <button className="btn btn-light" type="button"><i className="fa fa-print" /> Imprimer</button>}
        content={() => printRef.current}
      />
      <div className="rapport-container" ref={printRef}>
        <header className="rapport-header input-success">
          <div className="col-sm-2">
            <input type="text" className="form-control" placeholder="Région" name="region" value={rapportData.region} onChange={handleChange} />
          </div>
          <div className="input-group">
            <h4>Rapport de la visite N° </h4>
            <div className="col-lg-1">
              <input type="text" className="form-control" placeholder="N° de Rapport" name="numRapport" value={rapportData.numRapport} onChange={handleChange} />
            </div>
          </div>
        </header>
        <section className="rapport-details">
          <p className="input-group input-warning-o">
            <strong className="input-group-text">École :</strong> <input type="text" className="form-control" placeholder="École" name="school" value={rapportData.school} onChange={handleChange} /><br />
            <strong className="input-group-text">Niveau :</strong> <input type="text" className="form-control" placeholder="Niveau" name="classe" value={rapportData.classe} onChange={handleChange} /><br />
            <strong className="input-group-text">Enseignant(e) :</strong> <input type="text" className="form-control" placeholder="Enseignant(e)" name="teacherName" value={rapportData.teacherName} onChange={handleChange} />
          </p>
          <p className="input-group input-warning-o">
            <strong className="input-group-text">Date :</strong> <input type="date" className="form-control" placeholder="Date" name="date" value={rapportData.date} onChange={handleChange} />
            <strong className="input-group-text">Horaire : de</strong>
            <input type="time" className="form-control" placeholder="Heure de début" name="startTime" value={rapportData.startTime} onChange={handleChange} />
            <span className="input-group-text">h à </span>
            <input type="time" className="form-control" placeholder="Heure de fin" name="endTime" value={rapportData.endTime} onChange={handleChange} />
            <span className="input-group-text">h</span>
          </p>
        </section>
        <section className="rapport-objective">
          <h4>Objectif de la visite :</h4>
          <textarea className="form-control" placeholder="Objectif de la visite" name="objectifVisite" value={rapportData.objectifVisite} onChange={handleChange} />
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
                  <select name="notes.note1" value={rapportData.notes.note1} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Cohérence de la progression:
                  <select name="notes.note2" value={rapportData.notes.note2} onChange={handleChange}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" name="remarque1" value={rapportData.remarque1} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Journal de classe :</strong><br />
                  Régularité:
                  <select name="notes.note3" value={rapportData.notes.note3} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Clarté de présentation:
                  <select name="notes.note4" value={rapportData.notes.note4} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Précision des indications:
                  <select name="notes.note5" value={rapportData.notes.note5} onChange={handleChange}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" name="remarque2" value={rapportData.remarque2} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Les fiches :</strong><br />
                  Régularité:
                  <select name="notes.note6" value={rapportData.notes.note6} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Adéquation avec les P.O:
                  <select name="notes.note7" value={rapportData.notes.note7} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Les spécificités de la discipline:
                  <select name="notes.note8" value={rapportData.notes.note8} onChange={handleChange}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" name="remarque3" value={rapportData.remarque3} onChange={handleChange} />
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
                  <select name="notes.note10" value={rapportData.notes.note10} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Périodicité de l'emploi:
                  <select name="notes.note11" value={rapportData.notes.note11} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Autocorrection:
                  <select name="notes.note12" value={rapportData.notes.note12} onChange={handleChange}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" name="remarque4" value={rapportData.remarque4} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Les exercices :</strong><br />
                  Fréquence:
                  <select name="notes.note13" value={rapportData.notes.note13} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Diversité:
                  <select name="notes.note14" value={rapportData.notes.note14} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Progression:
                  <select name="notes.note15" value={rapportData.notes.note15} onChange={handleChange}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" name="remarque5" value={rapportData.remarque5} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Les cahiers d'activités :</strong><br />
                  Tenue:
                  <select name="notes.note16" value={rapportData.notes.note16} onChange={handleChange}>
                    {noteOptions}
                  </select><br />
                  Suivi:
                  <select name="notes.note17" value={rapportData.notes.note17} onChange={handleChange}>
                    {noteOptions}
                  </select>
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" name="remarque6" value={rapportData.remarque6} onChange={handleChange} />
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
                <td><input type="text" name="numModule" value={rapportData.numModule} onChange={handleChange} /></td>
                <td><input type="text" name="theme" value={rapportData.theme} onChange={handleChange} /></td>
                <td><input type="text" name="journee" value={rapportData.journee} onChange={handleChange} /></td>
                <td><input type="checkbox" name="apprentissageChecked" checked={rapportData.apprentissageChecked} onChange={handleCheckboxChange} /></td>
                <td><input type="checkbox" name="journeePalierChecked" checked={rapportData.journeePalierChecked} onChange={handleCheckboxChange} /></td>
                <td><input type="checkbox" name="evaluationChecked" checked={rapportData.evaluationChecked} onChange={handleCheckboxChange} /></td>
                <td><input type="checkbox" name="remediationChecked" checked={rapportData.remediationChecked} onChange={handleCheckboxChange} /></td>
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
                  <textarea className="form-control" placeholder="Description" rows={10} name="descriptionActivite1" value={rapportData.descriptionActivite1} onChange={handleChange} />
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" rows={10} name="remarqueActivite1" value={rapportData.remarqueActivite1} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <textarea className="form-control" placeholder="Description" rows={10} name="descriptionActivite2" value={rapportData.descriptionActivite2} onChange={handleChange} />
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" rows={10} name="remarqueActivite2" value={rapportData.remarqueActivite2} onChange={handleChange} />
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
                  <textarea className="form-control" placeholder="Description" name="descriptionComportement" value={rapportData.descriptionComportement} onChange={handleChange} />
                </td>
                <td>
                  <textarea className="form-control" placeholder="Remarques" name="remarqueComportement" value={rapportData.remarqueComportement} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="rapport-objective">
          <h4>Objectif de la prochaine visite :</h4>
          <textarea className="form-control" placeholder="Objectif de la prochaine visite" name="objectifVisiteProchaine" value={rapportData.objectifVisiteProchaine} onChange={handleChange} />
        </section>
        <section className="rapport-signatures" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            {rapportData.school}<br />
            Le : {rapportData.date}<br />
            L'enseignant(e) : vu et pris copie<br />
            (Prénom et nom, Signature)
          </p>
          <p>
            <strong>Fait le :</strong> {rapportData.date}<br />
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

export default UpdateRapportVisite;
