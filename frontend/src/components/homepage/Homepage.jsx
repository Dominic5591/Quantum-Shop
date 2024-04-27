import git from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import { selectProductsArray } from '../../store/product';
import { useSelector } from 'react-redux';
import './Homepage.css';
import ProductGrid from '../carousel/ProductGrid';
import BooksCarousel from '../carousel/BooksCarousel';

const Homepage = () => {
  const products = useSelector(selectProductsArray);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='homepageMain'>
      <BooksCarousel products={products}/>
      <ProductGrid products={products} />
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
    </div>
  );
};

export default Homepage;