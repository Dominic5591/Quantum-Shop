import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Rating } from "../product/Rating";
import loading from '../../images/loading.gif';
import '../../index.css';
import Footer from "../footer/Footer";

const SearchIndex = () => {
  const results = useSelector((state) => state.search);
  const searchResults = results?.search || [];
  const products = Object.values(searchResults);


  if (products.length === 0) {
    return (
      <div id="loadingGifDiv">
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }


  return (
    <ul className='productsIndexPage'>
      <div className="productsIndexDivider"></div>
      <div className="productsContainer">
        {products.map((product, index) => (
          <NavLink key={`${product.id}_${index}`} to={`/products/${product.id}`}>
            <div className="productCard">
              <img className='productImg' src={product.photoUrl} />
              <div className="cardContent">
                <p className='productNameH3'>{product.name}</p>
                <Rating rating={product.rating} />
                <p className='productPrice'>${product.price}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <Footer />
    </ul>
  );
};

export default SearchIndex;
