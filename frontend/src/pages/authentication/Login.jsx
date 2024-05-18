import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { loginAction } from '../../store/actions/AuthActions';
import { Link, useNavigate } from 'react-router-dom';
import logoFull from '../../assets/images/logo-full.png'

function Login(props) {
  const [email, setEmail] = useState('demo@example.com');
    const [password, setPassword] = useState('123456');
  
  const [errors, setErrors] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedRole = props.userRole;

  const onLogin = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { email: '', password: '' };

    if (email === '') {
      errorObj.email = 'Email requis';
      error = true;
    }
    if (password === '') {
      errorObj.password = 'Mot de passe requis';
      error = true;
    }
    setErrors(errorObj);

    if (error) {
      return;
    }

    dispatch(loginAction(email, password, navigate, selectedRole));};
    
  return (
    <div className="fix-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6">
            <div className="card mb-0 h-auto">
              <div className="card-body">
              <div className="text-center mb-4">
                  <Link to={"/"}>
                    <img src={logoFull} alt='logo journaly'/>
                  </Link>
                </div>
                <h4 className="text-center mb-4">Connectez-vous à votre compte</h4>

                {props.errorMessage && (
                  <div className='text-danger p-1 my-2'>
                    {props.errorMessage}
                  </div>
                )}

                {props.successMessage && (
                  <div className='text-danger p-1 my-2'>
                    {props.successMessage}
                  </div>
                )}

                <form onSubmit={onLogin}>
                  <div className="mb-3">
                    <label className="mb-1"><strong>Email</strong></label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Type Your Email Address"
                    />
                    {errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="mb-1"><strong>Mot de passe</strong></label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      placeholder="Type Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="text-danger fs-12">{errors.password}</div>}
                  </div>

                  <div className="row d-flex justify-content-between mt-4 mb-2">
                    <div className="mb-3">
                      <div className="form-check custom-checkbox ms-1">
                        <input type="checkbox" className="form-check-input" id="basic_checkbox_1" />
                        <label className="form-check-label" htmlFor="basic_checkbox_1">Se souvenir de ma préférence</label>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  {props.userRole === 'headmaster' && (
                    <div className="text-center mt-3">
                      <div className="new-account">
                        <p>Vous n'avez pas de compte ?
                          <Link to="/Register" className="text-primary">S'inscrire</Link>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  userRole: state.auth.userRole,
  errorMessage: state.auth.errorMessage,
  successMessage: state.auth.successMessage,
});

export default connect(mapStateToProps, { loginAction })(Login);