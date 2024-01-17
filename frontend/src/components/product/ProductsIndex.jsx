import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

    <ul className='productsIndexPage'>
      <div className="productsIndexDivider"></div>
      <div className="products-container">
        {products.map((product) => (
          <NavLink key={product.id} to={`/products/${product.id}`}>
            <div key={product.id} className="product-card">
              <img src={placeholder} alt={product.name} />
              <div className="card-content">
                <p className='productNameH3'>{product.name}</p>
                <Rating rating={product.rating} />
                <p className='productPrice'>${product.price}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
          
    </ul>

  );
};

export default ProductsIndex;
