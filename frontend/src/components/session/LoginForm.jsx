import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import arrow2 from '../../images/arrow2.png';
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };


  const loginDemo = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}));
  }



  return (
    <div className="loginPage">
      <div className='LoginHome'>
        <NavLink to='/'>
          <img src={arrow2} alt="" />
        </NavLink>
      </div>

      <form className='loginForm' onSubmit={handleSubmit}>
        <h1 className='signInH1'>Sign In</h1>
        {/* <ul className='errors' style={}>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul> */}
        <label className='loginLabel'>
          Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className='loginLabel'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className='loginBtn' type="submit">Continue</button>
        <button className='demoLoginBtn' onClick={loginDemo}>Demo Log In</button>
      </form>
      <p className='newAccount'>New to Quantum Shop?</p>
      <button className='createAccountBtn'><NavLink className='signupBtn' to='/signup'>Create account</NavLink></button>
    </div>
  );
}

export default LoginForm;