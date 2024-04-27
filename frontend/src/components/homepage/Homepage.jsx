import { selectProductsArray } from '../../store/product';
import { useSelector } from 'react-redux';
import './Homepage.css';
import ProductGrid from '../carousel/ProductGrid';
import BooksCarousel from '../carousel/BooksCarousel';
import Footer from '../footer/Footer';

const Homepage = () => {
  const products = useSelector(selectProductsArray);


  return (
    <div className='homepageMain'>
      <BooksCarousel products={products}/>
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
};

export default Homepage;