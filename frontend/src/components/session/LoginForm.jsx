import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Clear any existing errors
    setErrors([]);
  
    // Dispatch the login action, and handle errors if any
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
  
        try {
          // Try to parse the response body as JSON
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          // If parsing as JSON fails, fallback to reading the response body as text
          data = await res.text();
        }
  
        // Check if the response data contains errors, and update the component state accordingly
        if (data?.errors) {
          setErrors(data.errors);
        } else if (data) {
          // If there is data but no specific errors, set errors with the data
          setErrors([data]);
        } else {
          // If no data, set errors with the status text from the response
          setErrors([res.statusText]);
        }
      });
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginForm;