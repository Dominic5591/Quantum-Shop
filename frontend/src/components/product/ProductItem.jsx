import { useParams, NavLink  } from 'react-router-dom';
import { selectReviewProductArray } from '../../store/review';
import { useSelector } from 'react-redux';
import { Rating } from './Rating';
import './ProductsIndex.css';

const ProductItem = (({ product }) => {
  const { category } = useParams();
  
  let reviewSum = 0;
  let reviewAverage = 0;
  let reviews = useSelector(state => selectReviewProductArray(state, product.id));
  let reviewCount = 0;  

  reviews.forEach(review => {
    reviewSum += review.rating;
    reviewCount += 1;

  });

  if (reviewCount > 0) {
    reviewAverage = (reviewSum / reviewCount).toFixed(1);
  }
  
  if ((product.category !== category) && (category !== "all")) {
    return null;
  }
    
  return (
    <NavLink className="productCard" to={`/products/${product.id}`}>
      <img className='productImg' src={product.photoUrl} />
      <div className="cardContent">
        <p className='productNameH3'>{product.name}</p>
        <Rating rating={reviewAverage} />
        <p className='productPrice'>${product.price}</p>
      </div>
    </NavLink>
  );
});

export default ProductItem;