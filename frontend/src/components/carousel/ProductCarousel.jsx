
import { NavLink } from 'react-router-dom';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
  return (
    <div className='carousel'>
      {products.map((product) => (
        <div key={product.id} className='carouselItem'>
          <NavLink to={`/products/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;
