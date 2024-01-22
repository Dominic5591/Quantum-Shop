
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cartItem';
import CartIndexItem from './CartIndexItem';
import { memoizedSelectCartItems } from '../../store/cartItem';

const CartIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(memoizedSelectCartItems);
  // const cartItems = useSelector(state => Object.values(state.cartItems));
  // const products = useSelector(state => Object.values(state.products));

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Cart</h2>
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
