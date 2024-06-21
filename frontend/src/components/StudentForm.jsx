import React, {useEffect, useState} from 'react'
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import { GenreOption, RegionOption, ClasseOption } from '../data/OptionData';

function StudentForm({ mode, initialValues, onSubmit }) {

    const[firstName, setFirstName]=useState([]);
    const[lastName, setLastName]=useState([]);
    const[birthDate, setBirthDate]=useState([]);
    const[gender, setGender]=useState([]);
    const[region,setRegion]=useState([]);
    const[classe, setClasse]=useState([]);
 
    useEffect(() => {
        if (initialValues) {
            setFirstName(initialValues.firstName || '');
            setLastName(initialValues.lastName || '');
            setBirthDate(initialValues.birthDate || null);
            setGender(initialValues.gender || null);
            setRegion(initialValues.region || null);
            setClasse(initialValues.classe || null);
        }
    }, [initialValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call onSubmit prop with form data
        onSubmit({
            firstName,
            lastName,
            birthDate,
            gender,
            region,
            classe,
        });
    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label" htmlFor="first_name">Prénom</label>
                        <input placeholder="prénom" value={firstName} type="text" className="form-control" 
                        onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label" htmlFor="last_name">Nom</label>
                        <input placeholder="Nom de la famille" value={lastName} type="text" className="form-control"
                        onChange={(e) => setLastName(e.target.value)} required />
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
                                value={GenreOption.find(option => option.label === gender)}
                                onChange={(selectedOption) => setGender(selectedOption.label)}
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
                        <label className="form-label">Classe</label>
                        <Select 
                            isSearchable={false}
                            options={ClasseOption} 
                            className="custom-react-select" 
                            value={ClasseOption.find(option => option.label === classe)}
                            onChange={(selectedOption) => setClasse(selectedOption.label)}

                        />
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 mt-3 col-sm-12">
                    <button type="submit" className="btn btn-primary me-1" /*onClick={AddStudentData}*/>Submit</button>
                    <button type="button" className="btn btn-danger light" onClick={() => { window.history.back(); }}>Cancel</button>
                    </div>
            </div>
        </form>
    </div>
  )
}

export default StudentForm
