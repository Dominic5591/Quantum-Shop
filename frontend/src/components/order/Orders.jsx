import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchOrders } from '../../store/order';
import { fetchProducts, selectProductsArray } from '../../store/product';
import loading from '../../images/loading.gif';
import './Orders.css';
import Footer from '../footer/Footer';

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
    let total = 0;
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


  const userOrders = sessionUser ? Object.values(orders).filter(order => order.userId === sessionUser.id) : [];
  console.log(calculateTotalPrice());
  return (
    <>
      <div id='ordersMainPage'>
        <div className="ordersContainer">
          <h2 className="ordersTitle">Your orders</h2>
          {userOrders.length > 0 ? (
            userOrders.map((order, index) => (
              <div key={`${order.id}_${index}`} className="orderDiv">
                <div className="orderTotalBar">
                  <p>Total: ${calculateTotalPrice(order)}</p>
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
      <Footer />
    </>
  );
};

export default Orders;