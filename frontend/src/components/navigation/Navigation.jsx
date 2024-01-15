import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import cart from '../../images/cart.png';
import arrow from '../../images/arrow.png';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
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
        <button className='dropdwnSignoutBtn' onClick={logout}>Log Out</button>
      </li>
    </>
  ) : (
    <>
      <li className='dropdwnSign'>
        <NavLink id='dropdwnLoginBtn' to='/login'>Log in</NavLink>
      </li>
      <li>
        <NavLink id='signup' to="/signup">New costumer? Start here</NavLink>
      </li>
    </>
  );

  return (
    <>
      <ul className='navBar'>
        <div className='git'>
          <a href="https://github.com/Dominic5591">
            <img src={git} alt="" />
          </a>
        </div>
        <div className='linkedin'>
          <a href="https://www.linkedin.com/in/dominic-c-1076322a8/">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className='home'>
          <NavLink to="/">
            <img src={arrow} alt="arrow" className='homeArrow' />
          </NavLink>
        </div>
        <li className="dropdown">
          <button className="dropbtn">{sessionUser ? `Hello, ${sessionUser.username}` : "Hello, sign in"}</button>
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
      <ul className='lowerNavBar'>
        <li className='liPlaceholder'>Books</li>
        <li className='liPlaceholder'>Electronics</li>
        <li className='liPlaceholder'>Groceries</li>
        <li className='liPlaceholder'>Today&apos;s Deals</li>
      </ul>
    </>

  );
}

export default Navigation;