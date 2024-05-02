import React, {useState} from 'react'
import Select from 'react-select';
import {  RegionOption } from '../data/OptionData';

function SchoolForm({ mode, initialValues, onSubmit }) {

    const[name, setName]=useState([]);
    const[email, setEmail]=useState([]);
    const[region,setRegion]=useState([]);
    const[phone,setPhone]=useState([]);
    const [password, setPassword]= useState([]);
  
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call onSubmit prop with form data
        onSubmit({
            name,
            email,
            region,
            phone,
            password,
        });
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="form-label" htmlFor="first_name">École Primaire</label>
                        <input placeholder="nom de l'école" value={name} type="text" className="form-control" 
                        onChange={(e) => setName(e.target.value)} required />
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
                    <button type="submit" className="btn btn-primary me-1" /*onClick={AddSchoolData}*/>Submit</button>
                    <button type="submit" className="btn btn-danger light">Cancel</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SchoolForm
