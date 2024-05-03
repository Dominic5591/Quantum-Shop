// import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { memoizedSelectCartItems } from '../../store/cartItem';
import * as sessionActions from '../../store/session';
import SearchBar from './SearchBar';
import cart from '../../images/navbar/cart3.svg';
import arrow from '../../images/arrow.png';
import './Navigation.css';
// import { fetchProducts } from '../../store/product';

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
  
  // useEffect(() => {
  //   dispatch(fetchProducts());
  //   if (sessionUser) {
  //     dispatch(fetchCart());
  //   }

  // }, [dispatch, sessionUser]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const sessionLinks = sessionUser ? (
    <ul>
      <li id='youAccLi'>
        <span id='youAccText'>Your account</span>
      </li>
      <li>
        <NavLink id='sessionLinks' to='/orders'>Orders</NavLink>
      </li>
      <li>
        <span id='sessionLinks' onClick={logout}>Sign out</span>
      </li>
    </ul>
  ) : (
    <ul>
      <li className='dropdwnSign'>
        <NavLink id='sessionLinksLoggedOut' to='/login'>Log in</NavLink>
      </li>
      <li>
        <NavLink id='sessionLinksLoggedOut' to="/signup">New costumer? Start here</NavLink>
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
            <span className={ sessionUser ? "dropbtn" : "dropbtnLoggedOut"}>{ sessionUser ? `Hello, ${sessionUser.username}` : "Hello, sign in"}</span>
            <div className={ sessionUser ? "dropdownContent" : "dropdownContentLoggedOut"}>{sessionLinks}</div>
          </li>
        </div>
        {
          sessionUser ? 
            <NavLink to='/orders'>
              <div className='dropdownBorderDiv'>
                <li className='sessionOrdersLink'>Your Orders</li>
              </div>
            </NavLink>
            :
            null
        }


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