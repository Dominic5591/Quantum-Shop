import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../store/order';
import { fetchProducts, selectProductsArray } from '../../store/product';
import './Orders.css';

const Orders = () => {
  const orders = useSelector(state => state.orders);
  const products = useSelector(selectProductsArray);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrders());
  }, [dispatch]);

  if (!products) {
    return null;
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

  // Filter orders to only include those that match the current session user's ID
  const userOrders = sessionUser ? Object.values(orders).filter(order => order.userId === sessionUser.id) : [];

  return (
    <div className="orders-container">
      <h2 className="orders-title">Your orders</h2>
      {userOrders.length >  0 ? (
        userOrders.map((order, index) => (
          <div key={`${order.id}_${index}`} className="order-container">
            <ul className="order-items-list">
              {order.items.map((item, index) => {
                const product = products.find(product => product.id === item.productId);
                if (product) {
                  return (
                    <li key={`${item.productId}_${index}`} className="order-item">
                      <div className="order-item-details">
                        <img src={product.photoUrl} alt="productImg" className="orderImg" />
                        <span>{product.name}, ${product.price}, Quantity: {item.quantity}</span>
                      </div>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
            <br />
            <p>Total Price: ${calculateTotalPrice(order).toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>You are not logged in or you have no orders.</p>
      )}
    </div>
  );
};

export default Orders;
