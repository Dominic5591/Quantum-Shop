
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cartItem';
import CartIndexItem from './CartIndexItem';
import { memoizedSelectCartItems } from '../../store/cartItem';

const CartIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(memoizedSelectCartItems);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Cart</h2>
      <br />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((cartItem, index) => (
            <li key={`${cartItem.id}_${index}`}>
              <CartIndexItem cartItem={cartItem} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartIndex;
