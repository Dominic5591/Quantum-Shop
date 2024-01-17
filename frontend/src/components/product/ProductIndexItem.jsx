import { useEffect } from 'react';
import placeholder from '../../images/placeholder.svg';
import Rating from './Rating';
import { fetchProduct, selectProduct } from '../../store/product';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ProductIndexItem = () => {
  const dispatch = useDispatch();
  const { productId } = useParams()
  const product = useSelector(selectProduct(productId));
  console.log(productId);
  useEffect(() => {
    console.log(productId);
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  console.log('Product:', product);

  // Check if the product is not yet available
  if (!product) {
    console.log('Product is still loading...');
    console.log(product);
    return <div>Loading...</div>;
  }

  console.log('Rendering product:', product);

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
