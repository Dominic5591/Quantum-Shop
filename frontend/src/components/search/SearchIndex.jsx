import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Rating } from "../product/Rating";
import loading from '../../images/loading.gif';
import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import '../../index.css';

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


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
      <ul className='upperHomeFooter' onClick={scrollToTop}>
        <p className='backToTopP'>Back to top</p>
      </ul>
      <ul className='homeFooter'>
        <div className='loginLinks'>
          <span className='loginGit'>
            <a href="https://github.com/Dominic5591" target="_blank" rel='noreferrer'>
              <img src={git} alt="" />
            </a>
          </span>
          <span className='loginLinkedin'>
            <a href="https://www.linkedin.com/in/dominic-c-1076322a8/" target="_blank" rel='noreferrer'>
              <img src={linkedin} alt="" />
            </a>
          </span>
          <p className='loginLinkP'>2024 QuantumShop</p>
        </div>
      </ul>
    </ul>
  );
};

export default SearchIndex;
