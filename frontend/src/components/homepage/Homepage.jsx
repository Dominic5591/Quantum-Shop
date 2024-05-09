// import { useDispatch} from 'react-redux';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { fetchProducts } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import CategoryCarousel from '../carousel/CategoryCarousel';
import homepageBanner from '../../images/homepageBanner.jpg';
import Footer from '../footer/Footer';
// import { lazy, Suspense } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import './Homepage.css';


// import SkeletonHomepage from '../skeleton/SkeletonHomepage';
// import CategoryCarouselSkeleton from '../skeleton/CategoryCarouselSkeleton';

// const ProductGrid = lazy(() => import('../carousel/ProductGrid'));
// const CategoryCarousel = lazy(() => import('../carousel/CategoryCarousel'));

const Homepage = () => {
  // const products = useSelector(selectProductsArray);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await dispatch(fetchProducts());
  //       setLoaded(true);
  //     } catch (error) {
  //       setLoaded(true);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);
  

  // if (!loaded) {
  //   return (
  //     <SkeletonHomepage />
  //   );
  // }

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
        <CategoryCarousel page={3} category="books" message="Recommended books for you"/>


        <ProductGrid page={1}  category="electronics" productRange="0, 16" />
        <ProductGrid page={1}  category="electronics" productRange="32, 48" />
        <ProductGrid page={1}  category="electronics" productRange="32, 48" />
        <ProductGrid page={1}  category="electronics" productRange="32, 48" />


        <CategoryCarousel page={1} category="fashion" message="Trending Fashion"/>


        <ProductGrid page={1}  category="electronics" productRange="16, 32" />
        <ProductGrid page={1}  category="electronics" productRange="16, 32" />
        <ProductGrid page={1}  category="electronics" productRange="16, 32" />
        <ProductGrid page={1}  category="electronics" productRange="16, 32" />


        <CategoryCarousel page={1} category="electronics" message="Recommended electronics"/>

      </div>
      <Footer />
    </div>
  );
};

export default Homepage;