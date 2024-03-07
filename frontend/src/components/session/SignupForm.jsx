import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import arrow2 from '../../images/arrow2.png';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './SignupForm.css';


function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true}/>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.signup({ username, email,  password }))
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

  console.log(errors);

  return (


    <div className='signUpPage'>
      <div className='signupHome'>
        <NavLink to='/'>
          <img src={arrow2} alt="" />
        </NavLink>
      </div>

      <div>
        <form  className='signUpForm' noValidate="novalidate" onSubmit={handleSubmit}>
          <h1 className='signUpH1'>Create account</h1>
          <ul className='errors'>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <label className='signUpLabel'>
            Your name
            <input
              type="text"
              value={username}
              placeholder="First and last name"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className='signUpLabel'>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className='signUpLabel'>
            Password
            <input
              type="password"
              value={password}
              placeholder="At least 6 characters"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className='signUpLabel'>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button className='signUpBtn' type="submit">Continue</button>

          <div className="signupDivider"></div>

          <p className='signupP'>Already have an account?<NavLink className='existingAcc' to='/login'> Sign in</NavLink></p>
        </form>
      </div>
      <div className="createAccountDivider"></div>

      <div className='loginLinks'>
        <span className='loginGit'>
          <a href="https://github.com/Dominic5591">
            <img src={git} alt="" />
          </a>
        </span>
        <span className='loginLinkedin'>
          <a href="https://www.linkedin.com/in/dominic-c-1076322a8/">
            <img src={linkedin} alt="" />
          </a>
          
        </span>
        <p className='loginLinkP'>2024 QuantumShop</p>
      </div>
    </div>
  );
}

export default SignupForm;