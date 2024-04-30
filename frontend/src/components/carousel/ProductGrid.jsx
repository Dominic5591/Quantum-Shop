import { NavLink } from 'react-router-dom';
import './ProductGrid.css';

const ProductGrid = ({ products, productRange }) => {
  // Parse the productRange prop to get the start and end indices
  const [startIndex, endIndex] = productRange.split(',').map(Number);

  // Slice the products array to get the desired range of products
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
                <img className='productGridImg' src={product.photoUrl} alt={product.name} />
                <div className="cardGridContent">
                  <p className='productGridPrice'>{truncateName(product.name, 10)}</p>
                  <p className='productGridPrice'>${product.price}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
