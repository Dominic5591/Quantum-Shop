import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/product';
import placeholder from '../../images/placeholder.svg';
import Rating from './Rating';
import './ProductsIndex.css';

const ProductsIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Dispatch an action to fetch products when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  return (

    <>
      <div className="productsIndexDivider"></div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={placeholder} alt={product.name} />
            <div className="card-content">
              <h3>{product.name}</h3>
              <Rating rating={product.rating} />
              <p className='productPrice'>${product.price}</p>
              {/* Add other product details as needed */}
            </div>
          </div>
        ))}
      </div>
    
    </>

  );
};

export default ProductsIndex;
