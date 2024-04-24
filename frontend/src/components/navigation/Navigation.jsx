import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { memoizedSelectCartItems, fetchCart } from '../../store/cartItem';
import * as sessionActions from '../../store/session';
import SearchBar from './SearchBar';
import cart from '../../images/navbar/cart3.svg';
import arrow from '../../images/arrow.png';
import './Navigation.css';
import { fetchProducts } from '../../store/product';

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
    dispatch(fetchProducts());
    if (sessionUser) {
      dispatch(fetchCart());
    }

  }, [dispatch, sessionUser]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const sessionLinks = sessionUser ? (
    <ul>
      <li>
        <NavLink id='sessionLinks' to='/orders'>Your Orders</NavLink>
      </li>
      <li>
        <button id='sessionLinkBtn' onClick={logout}>Log Out</button>
      </li>
    </ul>
  ) : (
    <ul>
      <li className='dropdwnSign'>
        <NavLink id='sessionLinks' to='/login'>Log in</NavLink>
      </li>
      <li>
        <NavLink id='sessionLinks' to="/signup">New costumer? Start here</NavLink>
      </li>
    </ul>
  );

  return (
    <div className='navMain'>
      <ul className='navBar'>
        <div className='home'>
          <NavLink to="/"><img src={arrow} alt="arrow" className='homeArrow' /></NavLink>
        </div>
        <SearchBar />
        <div className='dropdownBorderDiv'>
          <li className="dropdown">
            <button className="dropbtn">{sessionUser ? `Hello, ${sessionUser.username}` : "Hello, sign in"}</button>
            <div className="dropdownContent">{sessionLinks}</div>
          </li>
        </div>
        <NavLink id='cartNavLink' to="cart">
          <div className='cartContainer'>
            <img src={cart} alt="cart" className='cartPng'/>
            <span className='cartText'>Cart</span>
            <p className='cartNum'>{totalQuantity}</p>
          </div>
        </NavLink>
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