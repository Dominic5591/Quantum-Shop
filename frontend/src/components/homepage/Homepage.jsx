import { useSelector } from 'react-redux';
import { selectProductsArray } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import CategoryCarousel from '../carousel/CategoryCarousel';
import Footer from '../footer/Footer';
import loading from '../../images/loading.gif';
import './Homepage.css';
const Homepage = () => {
  const products = useSelector(selectProductsArray);

  if (!products) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }
  

  return (
    <div className="pageContainer">
      <div className='homepageMain'>
        <CategoryCarousel products={products} category="books" message="Recommended books for you"/>
        <ProductGrid products={products} productRange="0, 16" />
        <CategoryCarousel products={products} category="fashion" message="Trending Fashion"/>
        <ProductGrid products={products}  productRange="16, 32" />
        <CategoryCarousel products={products} category="electronics"message="Recommended electronics"/>
      </div>
      <Footer />
    </div>
  );
};


export default Homepage;