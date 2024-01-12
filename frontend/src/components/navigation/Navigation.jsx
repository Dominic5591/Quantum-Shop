import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const sessionLinks = sessionUser ? (
    <>
      <li>
        <ProfileButton user={sessionUser} />
      </li>
      <li>
        <button onClick={logout}>Log Out</button>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink id='starthere' to="/signup">New costumer? Start here</NavLink>
      </li>
    </>
  );

  return (
    <ul>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <li className="dropdown">
        <button className="dropbtn">Sign In</button>
        <div className="dropdown-content">
          {sessionLinks}
        </div>
      </li>
      <div>
        <NavLink to="/">Cart</NavLink>
      </div>
    </ul>
  );
}

export default Navigation;