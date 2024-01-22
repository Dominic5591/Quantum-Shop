
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/cartItem';
import CartIndexItem from './CartIndexItem';
import { memoizedSelectCartItems } from '../../store/cartItem';
import './CartIndex.css';

const CartIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(memoizedSelectCartItems);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className='CartPageDiv'>
      <h2>Your Cart</h2>
      <br />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='CartIndexUl'>
          {cartItems.map((cartItem, index) => (
            <li className='cartIndexLi' key={`${cartItem.id}_${index}`}>
              <CartIndexItem cartItem={cartItem} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartIndex;
