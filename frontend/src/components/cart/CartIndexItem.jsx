
import { selectProduct } from '../../store/product';
import { useSelector } from 'react-redux';

const CartIndexItem = (({ cartItem })=> {
  const product = useSelector(selectProduct(cartItem.productId));

  if(!product) return null;

  return (
    <>
      
      <div key={cartItem.id}>

        <div>
          <h1>{product.name}</h1>
        </div>
        <div>
          <h1>${product.price}</h1>
          <h1>Qty: {cartItem.quantity}</h1>
        </div>
      </div>
      <br />
    </>
  );
});

export default CartIndexItem;