import { useEffect } from 'react';
import placeholder from '../../images/placeholder.svg';
import Rating from './Rating';
import { fetchProduct } from '../../store/product';
import { useParams } from 'react-router-dom';

const ProductIndexItem = ({ product }) => {
  const dispatch = useDispatch();
  const { productId } = useParams()

  useEffect(() => {
    dispatch(fetchProduct(productId));

  }, [dispatch, productId]);
  return (
    <div className="productCardItem">
      <img src={placeholder} alt={product.name} />
      <div className="cardContentItem">
        <h3>{product.name}</h3>
        <Rating rating={product.rating} />
        <p className='productPriceItem'>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductIndexItem;
