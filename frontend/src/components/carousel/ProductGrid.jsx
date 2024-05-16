import { NavLink } from 'react-router-dom';
import './ProductGrid.css';
// import ProductGridSkeleton from '../skeleton/ProductGridSkeleton';
import Skeleton from 'react-loading-skeleton';

const ProductGrid = ({ products, productRange }) => {
  const [startIndex, endIndex] = productRange.split(',').map(Number);
  const slicedProducts = products.slice(startIndex, endIndex);

  const largeCards = [];
  for (let i = 0; i < slicedProducts.length; i += 4) {
    largeCards.push(slicedProducts.slice(i, i + 4));
  }

  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.slice(0, maxLength)}...`;
    }
    return name;
  };



  return (
    <div className='productGridContainer'>
      {largeCards.map((largeCard, largeCardIndex) => (
        <div key={largeCardIndex} className="largeProductGridCard">
          <div className="productGrid">
            {largeCard.map((product) => (
              <NavLink key={product.id} className="productGridCard" to={`/products/${product.id}`}>
                {product.photoUrl ? (
                  <>
                    <img className='productGridImg' src={product.photoUrl} alt={product.name} />
                    <div className="cardGridContent">
                      <p className='productGridPrice'>{truncateName(product.name, 10)}</p>
                      <p className='productGridPrice'>${product.price}</p>
                    </div>
                  </>
                ) : (
                  <Skeleton key={product.id} className="productGridCardSkeleton" enableAnimation={true} />
                )}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
