import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, selectOrders } from '../redux/orderSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map(order => (
        <div key={order.id}>
          <h2>Order ID: {order.id}</h2>
          <p>User ID: {order.userId}</p>
          <p>Total Price: {order.totalPrice}</p>
          <ul>
            {order.orderItems.map(item => (
              <li key={item.id}>
                Product ID: {item.productId}, Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Orders;
