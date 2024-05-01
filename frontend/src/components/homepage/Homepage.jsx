import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, selectProductsArray } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import CategoryCarousel from '../carousel/CategoryCarousel';
import homepageBanner from '../../images/navbar/homepageBanner.jpg';
import Footer from '../footer/Footer';
import 'react-loading-skeleton/dist/skeleton.css';
import './Homepage.css';


import SkeletonHomepage from '../skeleton/SkeletonHomepage';

const Homepage = () => {
  const products = useSelector(selectProductsArray);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProducts());
        setLoaded(true);
      } catch (error) {
        setLoaded(true);
      }
    };

    fetchData();
  }, [dispatch]);
  

  if (!loaded) {
    return (
      <SkeletonHomepage />
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