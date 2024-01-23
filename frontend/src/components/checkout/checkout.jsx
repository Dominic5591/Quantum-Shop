
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './Checkout.css';
import { clearCart, deleteCartItem, memoizedSelectCartItems } from '../../store/cartItem';
const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(memoizedSelectCartItems);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    cartItems.forEach(item => {
      dispatch(deleteCartItem(item.id));
    });

  }, [dispatch]);

  return (
    <div className='checkoutMain'>
      <div className='checkoutPageDiv'>
        <h1 className='OrderPlaced'>Thank you for placing order</h1>

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

export default Checkout;