import { useParams, NavLink  } from 'react-router-dom';
import Rating from './Rating';
import './ProductsIndex.css';

const ProductItem = (({ product }) => {
  const { category } = useParams();

    
  if ((product.category !== category) && (category !== "all")) {
    return null;
  }
    
  return (
    <NavLink className="productCard" to={`/products/${product.id}`}>
      <img className='productImg' src={product.photoUrl} />
      <div className="cardContent">
        <p className='productNameH3'>{product.name}</p>
        <Rating rating={product.rating} />
        <p className='productPrice'>${product.price}</p>
      </div>
    </NavLink>
  );
});

export default ProductItem;