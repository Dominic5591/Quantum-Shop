import { useSelector } from 'react-redux';
import { selectProductsArray } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import CategoryCarousel from '../carousel/CategoryCarousel';
import homepageBanner from '../../images/navbar/homepageBanner.jpg';
import Footer from '../footer/Footer';
import loading from '../../images/loading.gif';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const products = useSelector(selectProductsArray);
  const navigate = useNavigate();
  if (!products) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    navigate('./categories/home');
  };

  return (
    <div className="pageContainer">
      <div className='homeBannerContainer'>
        <img src={homepageBanner} alt="Homepage Banner" className="homepageBanner" onClick={handleClick}/>
      </div>
      <div className='homepageMain'>
        <CategoryCarousel products={products} category="books" message="Recommended books for you"/>
        <ProductGrid products={products} productRange="0, 16" />
        <CategoryCarousel products={products} category="fashion" message="Trending Fashion"/>
        <ProductGrid products={products} productRange="16, 32" />
        <CategoryCarousel products={products} category="electronics" message="Recommended electronics"/>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;