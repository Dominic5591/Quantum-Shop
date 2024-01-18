import { useEffect } from 'react';
import placeholder from '../../images/placeholder.svg';
import Rating from './Rating';
import { fetchProduct, selectProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ProductIndexItem = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectProduct(productId));
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  // Check if the product is not yet available
  if (!product) {
    return <div>Loading...</div>;
  }

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
