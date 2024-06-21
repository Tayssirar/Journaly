import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import { GenreOption, RegionOption } from '../data/OptionData';

function TeacherForm({ mode, initialValues, onSubmit, schoolOptions = [], classOptions = [] }) {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState(null);
  const [genre, setGenre] = useState(null);
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState(null);
  const [telephone, setTelephone] = useState('');
  const [diplome, setDiplome] = useState('');
  const [dateNomination, setDateNomination] = useState(null);
  const [password, setPassword] = useState('');
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [checkedClasses, setCheckedClasses] = useState([]);

  useEffect(() => {
    if (initialValues) {
      setPrenom(initialValues.prenom || '');
      setNom(initialValues.nom || '');
      setDateNaissance(initialValues.dateNaissance || null);
      setGenre(initialValues.genre || null);
      setEmail(initialValues.email || '');
      setRegion(initialValues.region || null);
      setTelephone(initialValues.telephone || '');
      setDiplome(initialValues.diplome || '');
      setDateNomination(initialValues.dateNomination || null);
      setSelectedSchool(initialValues.school || null);
      setCheckedClasses(initialValues.classes || []);
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      prenom,
      nom,
      dateNaissance,
      genre,
      email,
      region,
      telephone,
      diplome,
      dateNomination,
      password,
      school: selectedSchool,
      classes: checkedClasses,
    });
  };

  const handleCheckboxChange = (optionValue) => {
    if (checkedClasses.includes(optionValue)) {
      setCheckedClasses(checkedClasses.filter((opt) => opt !== optionValue));
    } else {
      setCheckedClasses([...checkedClasses, optionValue]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="prenom">Prénom</label>
              <input
                placeholder="prénom"
                value={prenom}
                type="text"
                className="form-control"
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="nom">Nom</label>
              <input
                placeholder="Nom de la famille"
                value={nom}
                type="text"
                className="form-control"
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Date de naissance</label>
            <div className="input-hasicon mb-xl-0 mb-3">
              <DatePicker
                oneTap
                placeholder="Date de naissance"
                className="picker-suit"
                value={dateNaissance}
                onChange={(value) => setDateNaissance(value)}
              />
              <div className="icon"><i className="far fa-calendar" /></div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Genre</label>
              <Select
                isSearchable={false}
                options={GenreOption}
                className="custom-react-select"
                value={GenreOption.find(option => option.label === genre)}
                onChange={(selectedOption) => setGenre(selectedOption.label)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label">Région</label>
              <Select
                isSearchable={false}
                options={RegionOption}
                className="custom-react-select"
                value={RegionOption.find(option => option.label === region)}
                onChange={(selectedOption) => setRegion(selectedOption.label)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="telephone">Numéro du téléphone</label>
              <input
                placeholder="99 999 999"
                value={telephone}
                type="text"
                maxLength="8"
                className="form-control"
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="diplome">Diplôme</label>
              <input
                placeholder="Diplôme"
                value={diplome}
                type="text"
                className="form-control"
                onChange={(e) => setDiplome(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Date de nomination</label>
            <div className="input-hasicon mb-xl-0 mb-3">
              <DatePicker
                oneTap
                placeholder="Date de nomination"
                className="picker-suit"
                value={dateNomination}
                onChange={(value) => setDateNomination(value)}
              />
              <div className="icon"><i className="far fa-calendar" /></div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className="form-group">
              <label className="form-label">École</label>
              <Select
                isSearchable
                options={schoolOptions}
                className="custom-react-select"
                value={schoolOptions.find(option => option.value === selectedSchool)}
                onChange={(selectedOption) => setSelectedSchool(selectedOption.value)}
              />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className="form-group">
              <label className="form-label">Classes</label>
              {classOptions.map((option) => (
                <div className="form-check form-check-inline" key={option.value}>
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={option.value}
                      checked={checkedClasses.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
              <div className="form-label">
                Classes assignées: {checkedClasses.join(', ')}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email </label>
              <input
                placeholder="exemple@mail.com"
                value={email}
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="password">Mot de passe</label>
              <div className="input-group pass-group">
                <input
                  placeholder="******"
                  id="password"
                  type="password"
                  className="form-control pass-input"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="input-group-text pass-handle"
                  onClick={() => setPassword(password)}
                >
                  <i className="fa fa-eye-slash" />
                  <i className="fa fa-eye" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 mt-3 col-sm-12">
            <button type="submit" className="btn btn-primary me-1">Submit</button>
            <button type="button" className="btn btn-danger light" onClick={() => { window.history.back(); }}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeacherForm;
