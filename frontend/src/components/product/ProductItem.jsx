import './ProductsIndex.css';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
// import placeholder from '../../images/placeholder.svg';

const ProductItem = (({product}) => {
  const { category } = useParams();

  if(!product.category){
    return <h1>No</h1>;
  }
    
  if((product.category !== category) && (category !== "all")){
    return null;
  }

  console.log(product.photoUrl);
    
  return (
    <ul className='productsIndexPage'>
      
      <div className="productsContainer">
        <div className="productCard">
          <img className='productImg' src={product.photoUrl} />
          <div className="cardContent">
            <p className='productNameH3'>{product.name}</p>
            <Rating rating={product.rating} />
            <p className='productPrice'>${product.price}</p>
          </div>
        </div>
      </div>
    </ul>

  );
});

export default ProductItem;