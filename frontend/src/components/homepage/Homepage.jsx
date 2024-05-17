import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts, selectProductsArray } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import CategoryCarousel from '../carousel/CategoryCarousel';
import homepageBanner from '../../images/homepageBanner.jpg';
import Footer from '../footer/Footer';
import './Homepage.css';
import 'react-loading-skeleton/dist/skeleton.css';


import SkeletonHomepage from '../skeleton/SkeletonHomepage';

const Homepage = () => {
  const products = useSelector(selectProductsArray);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only call fetchData if the pathname is '/'
    if (location.pathname === '/') {
      const fetchData = async () => {
        try {
          await dispatch(fetchProducts(1, "homepage"));
          setLoaded(true);
        } catch (error) {
          console.error("Failed to fetch products:", error);
          setLoaded(true);
        }
      };

      fetchData();
    }
  }, [dispatch, location]);



  if (!loaded) {
    return <SkeletonHomepage />;
  }

  return (

    <div className="pageContainer">
      <div className='homeBannerContainer'>
        <img src={homepageBanner} alt="Homepage Banner" className="homepageBanner" onClick={() => navigate('./categories/home')} />
      </div>
      <div className='homepageMain'>
        <CategoryCarousel products={products} category="books" message="Recommended books for you" />
        <ProductGrid products={products} productRange="0, 16" />
        <CategoryCarousel products={products} category="fashion" message="Trending Fashion" />
        <ProductGrid products={products} productRange="16, 32" />
        <CategoryCarousel products={products} category="electronics" message="Recommended electronics" />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
