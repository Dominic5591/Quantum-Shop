import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import cart from '../../images/cart.png';
import arrow from '../../images/arrow.png';
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
        <NavLink id='signup' to="/signup">New costumer? Start here</NavLink>
      </li>
    </>
  );

  return (
    <ul className='navBar'>
      <div className='home'>
        <NavLink to="/">
          <img src={arrow} alt="arrow" className='homeArrow' />
        </NavLink>
      </div>
      <li className="dropdown">
        <button className="dropbtn">Hello, sign in</button>
        <div className="dropdown-content">
          {sessionLinks}
        </div>
      </li>
      <div>
        <NavLink to="/">
          <div className='cartDivOne'>
            <div className='cartDivTwo'>
              <p className='cartNum'>0</p>
              <img src={cart} alt="cart" className='cartPng'/>
            </div>
          </div>
        </NavLink>
      </div>
    </ul>
  );
}

export default Navigation;