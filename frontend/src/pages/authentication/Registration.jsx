import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import {     loadingToggleAction,
  signupAction, } from '../../store/actions/AuthActions';


function Register (props) {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()
    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email requis';
            error = true;			      
            Swal.fire({
              icon: 'erreur',
              title: 'Oops',
              text: errorObj.email,                        
            })
        }
        if (password === '') {
            errorObj.password = 'Mot de passe requis';
            error = true;
			      Swal.fire({
              icon: 'erreur',
              title: 'Oops',
              text: errorObj.password,                      
            })
        }
        setErrors(errorObj);
        if (error) return;
        dispatch(loadingToggleAction(true));
        dispatch(signupAction(email, password, navigate));
    }

  return (
    <div className="fix-wrapper">
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-6">
         
           
              <div className="card mb-0 h-auto">
                <div className="card-body">
                  <div className="text-center mb-2">
                  </div>
                  <h4 className="text-center mb-4 ">Inscrivez-vous à votre compte</h4>
                    {props.errorMessage && (
                      <div className='text-danger'>
                        {props.errorMessage}
                      </div>
                    )}
                    {props.successMessage && (
                      <div className='text-danger'>
                        {props.successMessage}
                      </div>
                    )}
                  <form onSubmit={onSignUp}>
                    <div className="form-group">
                      <label className="form-label">Prénom</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Votre nom de la famille "
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="email@mail.com"
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="mb-4 position-relative">
                      <label className="form-label">Mot de passe</label>
                      <input defaultValue={password} className="form-control" placeholder="******"
                        type={`${showPassword ? "text" : "password"}`}
                          onChange={(e) =>
                            setPassword(e.target.value)
                          }
                      />
                      <span className={`show-pass eye ${showPassword ? 'active' : '' }`}
                        onClick={()=>setShowPassword(!showPassword)}
                      >
                          <i className="fa fa-eye-slash" />
                          <i className="fa fa-eye" />
                      </span>
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        S'inscrire
                      </button>
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p className="">
                    Vous avez déjà un compte ?{" "}
                      <Link className="text-primary" to="/login">
                      Connectez-vous.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            
        </div>
      </div>
    </div>
  </div>
);
};

const mapStateToProps = (state) => {
  return {
      errorMessage: state.auth.errorMessage,
      successMessage: state.auth.successMessage,
      showLoading: state.auth.showLoading,
  };
};

export default connect(mapStateToProps)(Register);
