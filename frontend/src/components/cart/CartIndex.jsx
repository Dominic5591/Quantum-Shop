import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCart, memoizedSelectCartItems, deleteCartItem } from '../../store/cartItem';
import { fetchProducts, selectProductsArray } from '../../store/product';
import { createOrder } from '../../store/order';
import CartIndexItem from './CartIndexItem';
import cartImg from '../../images/empty-cart.svg';
import Loader from '../loaders/Loader';
import Footer from '../footer/Footer';
import './CartIndex.css';

const CartIndex = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(memoizedSelectCartItems);
  const products = useSelector(selectProductsArray);
  const sessionUser = useSelector((state) => state.session.user);
  const [loaded, setLoaded] = useState(false);
  let total = 0.00;
  let quantity = 0;
  let amount = 25;

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchProducts(1, 'homepage'))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true)); 
  }, [dispatch, sessionUser]);

  if (!products || !cartItems || !loaded) {
    return <Loader />;
  }


  cartItems.forEach(item => {
    products.forEach(product => {
      if (item.productId === product.id) {
        quantity += item.quantity;
        total += item.quantity * product.price;
        amount -= item.quantity * product.price;
      }
    });
  });

  const handleDelete = async () => {
    await Promise.all(cartItems.map(item => dispatch(deleteCartItem(item.id))));
    
    const orderItems = cartItems.map(item => ({
      product_id: item.productId,
      quantity: item.quantity,
    }));

    const order = {
      items: orderItems,
    };

    dispatch(createOrder({ order: order }));
  };

  return (
    <>
      <div className='CartPageDiv'>
        {cartItems.length === 0 ?
          <div className='cartImgDiv'>
            <img src={cartImg} alt="" />
          </div>
          :
          null
        }

        {cartItems.length === 0 ? (
          <div className='emptyCartDiv'>
            <div className='emptyCartDealsDiv'>
              <h1 className='emptyCartH1'>Your QuantumShop Cart is empty</h1>
              <NavLink to='/' >
                <p className='emptyCartP'>Home</p>
              </NavLink>
            </div>
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
        ) : (
          <ul className='CartIndexUl'>
            {cartItems.map((cartItem, index) => (
              <li className='cartIndexLi' key={`${cartItem.id}_${index}`}>
                <CartIndexItem cartItem={cartItem} />
              </li>
            ))}
          </ul>
        )}

        <div className='checkoutSideDiv'>
          { total > 25 ? 
            <p className='freeShip'>Your order qualifies for FREE Shipping.</p>
            :
            <p className='addMoreItems'>Add <span className='amount'>${amount.toFixed(2)}</span> to your order to qualify for FREE shipping</p>
          }
          <p className='totalPriceP'>Subtotal({quantity}): ${total.toFixed(2)}</p>
          <label className='giftOrderLabel' htmlFor="radio">This order contains a gift
            <input className='giftRadio' type="checkbox" value="This order contains a gift"/>
          </label>
          { quantity ? 
            <NavLink onClick={handleDelete} className='checkoutBtn' to='/checkout'>Checkout</NavLink>
            :
            <NavLink className='checkoutBtn' to=''>Checkout</NavLink>
          }
        </div>
      </div>
      <Footer />
    </>

  );
};

export default CartIndex;
