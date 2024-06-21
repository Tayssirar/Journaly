import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import { GenreOption, RegionOption } from '../data/OptionData';

function Form({ mode, initialValues, onSubmit, schoolOptions = [] }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [gender, setGender] = useState(null);
    const [email, setEmail] = useState('');
    const [region, setRegion] = useState(null);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [checkedSchoolOptions, setCheckedSchoolOptions] = useState([]);

    useEffect(() => {
        if (initialValues) {
            setFirstName(initialValues.firstName || '');
            setLastName(initialValues.lastName || '');
            setBirthDate(initialValues.birthDate || null);
            setGender(initialValues.gender || null);
            setEmail(initialValues.email || '');
            setRegion(initialValues.region || null);
            setPhone(initialValues.phone || '');
            if (initialValues.schools) {
                setCheckedSchoolOptions(initialValues.schools.map(school => school._id));
            }
        }
    }, [initialValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            firstName,
            lastName,
            birthDate,
            gender,
            email,
            region,
            phone,
            password,
            schools: checkedSchoolOptions,
        });
    };

    const handleCheckboxChange = (optionValue) => {
        if (checkedSchoolOptions.includes(optionValue)) {
            setCheckedSchoolOptions(checkedSchoolOptions.filter((opt) => opt !== optionValue));
        } else {
            setCheckedSchoolOptions([...checkedSchoolOptions, optionValue]);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="first_name">Prénom</label>
                            <input
                                placeholder="prénom"
                                value={firstName}
                                type="text"
                                className="form-control"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="last_name">Nom</label>
                            <input
                                placeholder="Nom de la famille"
                                value={lastName}
                                type="text"
                                className="form-control"
                                onChange={(e) => setLastName(e.target.value)}
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
                                value={birthDate}
                                onChange={(value) => setBirthDate(value)}
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
                                value={GenreOption.find(option => option.value === gender)}
                                onChange={(selectedOption) => setGender(selectedOption.value)}
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
                                value={RegionOption.find(option => option.value === region)}
                                onChange={(selectedOption) => setRegion(selectedOption.value)}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="mobile_number">Numéro du téléphone</label>
                            <input
                                placeholder="99 999 999"
                                value={phone}
                                type="text"
                                maxLength="8"
                                className="form-control"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {mode === 'add' && (
                        <div className='col-sm-12'>
                            <div className="form-group">
                                {schoolOptions.map((option) => (
                                    <div className="form-check form-check-inline" key={option.value}>
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                value={option.value}
                                                checked={checkedSchoolOptions.includes(option.value)}
                                                onChange={() => handleCheckboxChange(option.value)}
                                            />
                                            {option.label}
                                        </label>
                                    </div>
                                ))}
                                <div className="form-label">
                                    Les écoles à superviser: {checkedSchoolOptions.join(', ')}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="email_here">Email </label>
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
                            <label className="form-label" htmlFor="confirm_password">Mot de passe</label>
                            <div className="input-group pass-group">
                                <input
                                    placeholder="******"
                                    id="confirm_password"
                                    type={password ? "text" : "password"}
                                    className="form-control pass-input"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className={`input-group-text pass-handle ${password ? "active" : ""}`}
                                    onClick={() => setPassword(!password)}
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

export default Form;
