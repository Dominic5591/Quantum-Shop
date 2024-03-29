import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { memoizedSelectCartItems, fetchCart } from '../../store/cartItem';
import * as sessionActions from '../../store/session';
import SearchBar from './SearchBar';
import cart from '../../images/cart.png';
import arrow from '../../images/arrow.png';
import './Navigation.css';

function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const cartItems = useSelector(memoizedSelectCartItems);
  const navigate = useNavigate();


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());

    navigate("/home");
  };
  
  useEffect(() => {
    if (sessionUser) {
      dispatch(fetchCart());
    }

  }, [dispatch, sessionUser]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const sessionLinks = sessionUser ? (
    <ul>
      <li>
        <button className='dropdwnSignoutBtn' onClick={logout}>Log Out</button>
      </li>
      <li>
        <NavLink id='yourOrdersLink' to='/orders'>Your Orders</NavLink>
      </li>
    </ul>
  ) : (
    <ul>
      <li className='dropdwnSign'>
        <NavLink id='dropdwnLoginBtn' to='/login'>Log in</NavLink>
      </li>
      <li>
        <NavLink id='signup' to="/signup">New costumer? Start here</NavLink>
      </li>
    </ul>
  );

  return (
    <div className='navMain'>
      <ul className='navBar'>
        <div className='home'>
          <NavLink to="/">
            <img src={arrow} alt="arrow" className='homeArrow' />
          </NavLink>
        </div>
        <SearchBar />
        <li className="dropdown">
          <button className="dropbtn">{sessionUser ? `Hello, ${sessionUser.username}` : "Hello, sign in"}</button>
          <div className="dropdown-content">
            {sessionLinks}
          </div>
        </li>
        <div>
          <NavLink to="cart">
            <div className='cartDivOne'>
              <p className='cartNum'>{totalQuantity}</p>
              <img src={cart} alt="cart" className='cartPng'/>
            </div>
          </NavLink>
        </div>
      </ul>
      <ul className='lowerNavBar'>

        <NavLink className='navBarCategory' to='/categories/electronics'>
          <li className='liPlaceholder'>Electronics</li>
        </NavLink>
        <NavLink className='navBarCategory' to='/categories/fashion'>
          <li className='liPlaceholder'>Fashion</li>
        </NavLink>
        <NavLink className='navBarCategory' to='/categories/home'>
          <li className='liPlaceholder'>Home Goods</li>
        </NavLink>
        <NavLink className='navBarCategory' to='/categories/books'>
          <li className='liPlaceholder'>Books</li>
        </NavLink>
      </ul>
    </div>

  );
}

export default Navigation;