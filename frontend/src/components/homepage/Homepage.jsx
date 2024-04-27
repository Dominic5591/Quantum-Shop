import { useSelector } from 'react-redux';
import { selectProductsArray } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import BooksCarousel from '../carousel/BooksCarousel';
import Footer from '../footer/Footer';
import './Homepage.css';
const Homepage = () => {
  const products = useSelector(selectProductsArray);

  return (
    <div className="pageContainer">
      <div className='homepageMain'>
        <BooksCarousel products={products}/>
        <ProductGrid products={products} />
      </div>
      <Footer />
    </div>
  );
};


export default Homepage;