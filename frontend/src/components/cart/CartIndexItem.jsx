
import { selectProduct } from '../../store/product';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

const CartIndexItem = (({ cartItem })=> {
  // const { productId } = useParams();
  const product = useSelector(selectProduct(cartItem.productId));
  // const dispatch = useDispatch();


  if(!product) return null;
  console.log(product);

  return (
    <>
      
      <div key={cartItem.id}>

        <div>
          <h1>
            {product.name}
            {console.log(product)}
          </h1>
        </div>
        <div>
          <h1>${product.price}</h1>
          <h1>Qty: {cartItem.quantity}</h1>
        </div>
      </div>
    
    </>
  );
});

export default CartIndexItem;