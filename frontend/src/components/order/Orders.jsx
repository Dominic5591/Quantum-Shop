import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../store/order';
import './Orders.css';
import { fetchProducts, selectProductById, selectProductsArray } from '../../store/product';

const Orders = () => {
  const orders = useSelector(state => state.orders);
  const products = useSelector(selectProductsArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrders());
  }, [dispatch]);

  if (!products) {
    return null;
  }


  return (
    <div className="orders-container">
      <h2 className="orders-title">Orders</h2>
      {orders && Object.values(orders).map((order, index) => (
        <div key={`${order.id}_${index}`} className="order-container">
          <h3 className="order-id">Order ID: {order.id}</h3>
          <p className="user-id">User ID: {order.userId}</p>
          <ul className="order-items-list">
            {order.items.map((item, index) => {
              const product = products(item.productId);

              return (
                <li key={`${item.productId}_${index}`} className="order-item">
                  Product ID: {item.productId}, Product Name: {product.name}, Quantity: {item.quantity}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Orders;
