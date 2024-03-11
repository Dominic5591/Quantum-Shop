import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchOrders } from '../../store/order';
import { fetchProducts, selectProductsArray } from '../../store/product';
import loading from '../../images/loading.gif';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import './Orders.css';

const Orders = () => {
  const orders = useSelector(state => state.orders);
  const products = useSelector(selectProductsArray);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts())
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch]);

  if (!loaded) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

  if (!products) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

  const calculateTotalPrice = (order) => {
    let total =   0;
    order.items.forEach(item => {
      const product = products.find(product => product.id === item.productId);
      if (product) {
        total += product.price * item.quantity;
      }
    });
    return total;
  };

  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.slice(0, maxLength)}...`;
    }
    return name;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const userOrders = sessionUser ? Object.values(orders).filter(order => order.userId === sessionUser.id) : [];

  return (
    <>
      <div id='ordersMainPage'>
        <div className="ordersContainer">
          <h2 className="ordersTitle">Your orders</h2>
          {userOrders.length > 0 ? (
            userOrders.map((order, index) => (
              <div key={`${order.id}_${index}`} className="orderDiv">
                <div className="orderTotalBar">
                  <p>Total: ${calculateTotalPrice(order).toFixed(2)}</p>
                </div>
                <ul className="orderItemsList">
                  {order.items.map((item, index) => {
                    const product = products.find(product => product.id === item.productId);
                    if (product) {
                      return (
                        <li key={`${item.productId}_${index}`} className="orderItem">
                          <div className="orderItemInfo">
                            <img src={product.photoUrl} alt="productImg" className="orderImg" />
                            <div className="productInfo">
                              <span><NavLink className='orderProductName' to={`/products/${product.id}`}>{truncateName(product.name,   100)}</NavLink></span>
                              <span>${product.price}</span>
                              <span>Quantity: {item.quantity}</span>
                            </div>
                          </div>
                        </li>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ul>
                <br />
              </div>
            ))
          ) : (
            <div>
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
          )}
        </div>
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
    </>
  );
};

export default Orders;