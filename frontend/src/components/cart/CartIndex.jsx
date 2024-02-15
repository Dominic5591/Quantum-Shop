
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCart, memoizedSelectCartItems, deleteCartItem } from '../../store/cartItem';
import { selectProductsArray } from '../../store/product';
import CartIndexItem from './CartIndexItem';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import cartImg from '../../images/empty-cart.svg';
import loading from '../../images/loading.gif';
import './CartIndex.css';


const CartIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(memoizedSelectCartItems);
  const products = useSelector(selectProductsArray);
  const sessionUser = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);
  let total = 0.00;
  let quantity = 0;
  let amount = 25;

  useEffect(() => {
    dispatch(fetchCart())
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch, sessionUser]);




  if (!loaded) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }


  cartItems.forEach(item => {
    products.forEach(product => {
      if (item.productId === product.id) {
        quantity += item.quantity;
        total += Math.round(item.quantity * product.price);
        amount -= Math.round(item.quantity * product.price);
      }
    });
  });


  const handleDelete = () => {
    cartItems.forEach(item => {
      dispatch(deleteCartItem(item.id));
    });
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='CartPageDiv'>
      {cartItems.length === 0 ? 
        <div className='cartImgDiv'>
          <img src={cartImg} alt="" />
        </div>
        :
        <p></p>
      }
      <br />
      <br />
      <br />
      {cartItems.length === 0 ? (
        <div className='emptyCartDiv'>
          <div className='emptyCartDealsDiv'>
            <h1 className='emptyCartH1'>Your QuantumShop Cart is empty</h1>
            <NavLink to='/products' >
              <p className='emptyCartP'>Shop today&apos;s deals</p>
            </NavLink>
          </div>
          {!sessionUser ? 
            <div className='cartSessionBtns'>
              <NavLink to='/login'>
                <button className='emptyCartBtnSignIn'>Sign in to your account</button> 
              </NavLink>
              <NavLink to='/signup'>
                <button className='emptyCartBtnSignUp'>Sign up now</button>  
              </NavLink>
              
            </div>
            : <p></p>
          }
        </div>
      ) : (
        <ul className='CartIndexUl'>
          {cartItems.map((cartItem, index) => (
            <li className='cartIndexLi' key={`${cartItem.id}_${index}`}>
              <CartIndexItem cartItem={cartItem} />
            </li>
          ))}
        </ul>
      )}

      <div className='checkoutSideDiv'>
        { total > 25 ? 
          <p className='freeShip'>Your order qualifies for FREE Shipping.</p>
          :
          <p className='addMoreItems'>Add <span className='amount'>${amount}.00</span> to your order to qualify for FREE shipping</p>
        }
        <p className='totalPriceP'>Subtotal({quantity}): ${total}.00</p>
        <label className='giftOrderLabel' htmlFor="radio">This order contains a gift
          <input className='giftRadio' type="checkbox" value="This order contains a gift"/>
        </label>
        { quantity ? 
          <NavLink onClick={handleDelete} className='checkoutBtn' to='/checkout'>Checkout</NavLink>
          :
          <NavLink className='checkoutBtn' to=''>Checkout</NavLink>
        }
      </div>

      <ul className='upperCartFooter' onClick={scrollToTop}>
        <p className='backToTopP'>Back to top</p>
      </ul>
      <ul className='cartFooter'>
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
      </ul>
    </div>
  );
};

export default CartIndex;
