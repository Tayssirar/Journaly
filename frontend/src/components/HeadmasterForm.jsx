import React, {useState} from 'react'
import Select from 'react-select';
import { DatePicker } from 'rsuite';
import { GenreOption, RegionOption } from '../data/OptionData';

function HeadmasterForm({ mode, initialValues, onSubmit }) {

    const[firstName, setFirstName]=useState([]);
    const[lastName, setLastName]=useState([]);
    const[birthDate, setBirthDate]=useState([]);
    const[gender, setGender]=useState([]);
    const[email, setEmail]=useState([]);
    const[region,setRegion]=useState([]);
    const[phone,setPhone]=useState([]);
    const [password, setPassword]= useState([]);
    const [school, setSchool] = useState([]);
  
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call onSubmit prop with form data
        onSubmit({
            firstName,
            lastName,
            birthDate,
            gender,
            email,
            region,
            phone,
            password,
            school,
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
                    <label className="form-label" htmlFor="mobile_number">Numéro du téléphone</label>
                    <input placeholder="99 999 999" value={phone} type="text" maxLength="8" className="form-control"
                    onChange={(e) => setPhone(e.target.value)} required />
                </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label" htmlFor="shool">Responsable de </label>
                        <input placeholder="École .." value={school} type="text" className="form-control"
                        onChange={(e) => setSchool(e.target.value)} required />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label" htmlFor="email_here">Email </label>
                        <input placeholder="exemple@mail.com" value={email} type="email" className="form-control"
                        onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirm_password">Mot de passe</label>
                            <div className="input-group pass-group">
                                <input placeholder="******" id="confirm_password" 
                                type={password ? "text" : "password"} 
                                className="form-control pass-input" required 
                            />
                            <span className={`input-group-text pass-handle ${password ? "active" : ""}`}
                                onClick={()=>setPassword(!password)}
                            > 
                                <i className="fa fa-eye-slash" />
                                <i className="fa fa-eye" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-3 col-sm-12">
                    <button type="submit" className="btn btn-primary me-1" /*onClick={AddHeadmasterData}*/>Submit</button>
                    <button type="submit" className="btn btn-danger light">Cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default HeadmasterForm
