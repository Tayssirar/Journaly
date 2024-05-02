import React, {useState} from 'react'
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
    const [groupeOptions, setGroupeOptions] = useState([]);
    const [checkedGroupeOptions, setCheckedGroupeOptions] = useState([]);
  
  
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
            checkedGroupeOptions,
        });
    };

    const handleCheckboxChange = (optionValue) => {
      // Update checkedOptions state based on checkbox changes
      if (checkedGroupeOptions.includes(optionValue)) {
          setCheckedGroupeOptions(checkedGroupeOptions.filter((opt) => opt !== optionValue));
      } else {
          setCheckedGroupeOptions([...checkedGroupeOptions, optionValue]);
      }
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
                    <label className="form-label" >Date de naissance</label>
                    <div className="input-hasicon mb-xl-0 mb-3">                                                
                        <DatePicker oneTap                                                   
                            placeholder="Date de naissance"
                            className="picker-suit"
                            value={birthDate}  
                            onChange={(e) => setBirthDate(e.target.value)}
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
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}

                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label">Région</label>
                        <Select 
                            isSearchable={false}
                            defaultValue={RegionOption[0]}
                            options={RegionOption} 
                            className="custom-react-select"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)} 
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
                            value={classe}
                            onChange={(e) => setGender(e.target.value)}

                        />
                    </div>
                </div>
                <div className='col-sm-12'>
                <div className="form-group">
                {groupeOptions.map((option) => (
                    <div className="form-check form-check-inline" key={option.value}>
                        <label className="form-check-label">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value={option.value}
                                checked={checkedGroupeOptions.includes(option.value)}
                                onChange={() => handleCheckboxChange(option.value)}
                            />
                            {option.label}
                        </label>
                    </div>
                ))}
                {/* Display selected options */}
                <div className="form-label">
                    Son groupe: {checkedGroupeOptions.join(', ')}
                </div>
                </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-3 col-sm-12">
                    <button type="submit" className="btn btn-primary me-1" /*onClick={AddStudentData}*/>Submit</button>
                    <button type="submit" className="btn btn-danger light">Cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default StudentForm
