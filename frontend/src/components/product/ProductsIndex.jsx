import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { fetchProducts, selectProductsArray } from '../../store/product';
import ProductItem from './ProductItem';
import './ProductsIndex.css';

const ProductsIndex = () => {
  console.log('Rendering ProductsIndex');
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);
  const { category } = useParams();

  console.log(category);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  if (category !== 'Electronics' && category !== 'Books' && category !== 'all') {
    return <h1>hello</h1>;
  }
  console.log(products.category);
  return (
    <ul className='productsIndexPage'>
      <div className="productsIndexDivider"></div>
      <div className="productsContainer">
        {products.map((product, index) => (
          <NavLink key={`${product.id}_${index}`} to={`/products/${product.id}`}>
            <ProductItem  product={product}/>
          </NavLink>
        ))}
    
      </div>
    </ul>
  );
};

export default ProductsIndex;


