import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cartItem';
import linkedin from '../../images/linkedin.png';
import git from '../../images/github.png';
import './Checkout.css';


const Checkout = () => {
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    dispatch(clearCart());
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