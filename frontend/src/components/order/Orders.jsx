import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchOrders } from '../../store/order';
import { fetchProducts, selectProductsArray } from '../../store/product';
// import loading from '../../images/loading.gif';
import Loader from '../loaders/Loader';
import './Orders.css';
import Footer from '../footer/Footer';

const Orders = () => {
  const orders = useSelector(state => state.orders);
  const products = useSelector(selectProductsArray);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts(1, "homepage"))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch]);

  if (!loaded || !products) {
    return <Loader />;
  }

  const calculateTotalPrice = (order) => {
    let total = 0;

    order.items.forEach(item => {
      const product = products.find(product => product.id === item.productId);
      console.log(product);

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

  return (
    <>
      <div className='ordersMain'>
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
                              <img src={product.photoUrl} alt="productImg" className="orderImg"  onClick={() => navigate(`/products/${product.id}`)}/>
                              <div className="productInfo">
                                <span className='orderProductName' onClick={() => navigate(`/products/${product.id}`)}>{truncateName(product.name, 100)}</span>
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
                  : null
                }
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;