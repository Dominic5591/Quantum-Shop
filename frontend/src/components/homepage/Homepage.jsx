import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, selectProductsArray } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import CategoryCarousel from '../carousel/CategoryCarousel';
import homepageBanner from '../../images/homepageBanner.jpg';
import Footer from '../footer/Footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-loading-skeleton/dist/skeleton.css';
import './Homepage.css';

import SkeletonHomepage from '../skeleton/SkeletonHomepage';

const Homepage = () => {
  const products = useSelector(selectProductsArray);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProducts(page));
        setLoaded(true);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoaded(true);
      }
    };

    fetchData();
  }, [dispatch, page]);

  const handleScroll = useCallback(() => {
    const bottomOfPage = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    if (bottomOfPage) {
      setPage(prevPage => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const loadMore = async () => {
    setPage(prevPage => prevPage + 1);
  };

  if (!loaded) {
    return <SkeletonHomepage />;
  }

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={loadMore}
      hasMore={true}
      scrollThreshold={0.5}
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="pageContainer">
        <div className='homeBannerContainer'>
          <img src={homepageBanner} alt="Homepage Banner" className="homepageBanner" onClick={() => navigate('./categories/home')} />
        </div>
        <div className='homepageMain'>
          <CategoryCarousel products={products} category="books" message="Recommended books for you" style={{ height: '300px' }} />
          <ProductGrid products={products} productRange="0, 16" style={{ height: '600px' }} />
          <CategoryCarousel products={products} category="fashion" message="Trending Fashion" style={{ height: '300px' }} />
          <ProductGrid products={products} productRange="16, 32" style={{ height: '600px' }} />
          <CategoryCarousel products={products} category="electronics" message="Recommended electronics" style={{ height: '300px' }} />
        </div>
        <Footer />
      </div>
    </InfiniteScroll>
  );
};

export default Homepage;
