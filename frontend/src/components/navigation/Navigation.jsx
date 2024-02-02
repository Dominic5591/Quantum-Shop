import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import cart from '../../images/cart.png';
import arrow from '../../images/arrow.png';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './Navigation.css';
import { memoizedSelectCartItems } from '../../store/cartItem';
import SearchBar from './SearchBar';


function Navigation() {

  
  const sessionUser = useSelector((state) => state.session.user);



  const dispatch = useDispatch();
  
  const cartItems = useSelector(memoizedSelectCartItems);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const sessionLinks = sessionUser ? (
    <ul>
      <li>
        <button className='dropdwnSignoutBtn' onClick={logout}>Log Out</button>
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
        <div className='home'>
          {/* <NavLink to="products">
            <p className='ProductIndexLink'>ProductIndex</p>
          </NavLink> */}
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