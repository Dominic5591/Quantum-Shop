import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, selectProductsArray } from '../../store/product';
import ProductGrid from '../carousel/ProductGrid';
import CategoryCarousel from '../carousel/CategoryCarousel';
import homepageBanner from '../../images/homepageBanner.jpg';
import Footer from '../footer/Footer';
import InfiniteScroll from 'react-infinite-scroll-component'; // Import InfiniteScroll
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
    <div className="pageContainer">
        <div className='homeBannerContainer'>
          <img src={homepageBanner} alt="Homepage Banner" className="homepageBanner" onClick={() => navigate('./categories/home')} />
        </div>
        <div className='homepageMain'>
        <InfiniteScroll
          scrollableTarget="homepageMain"
          dataLength={products.length} // This is important field to render the next data
          next={loadMore} // Required - A function which gets executed when you reach to the bottom of this list
          hasMore={true} // A boolean indicating whether there are more items to load
          loader={<h1>loading</h1>} // A UI loader to display while loading more posts
          scrollThreshold={0.5}
        >
          <CategoryCarousel products={products} category="books" message="Recommended books for you"/>
          <ProductGrid products={products} productRange="0, 16"/>
          <CategoryCarousel products={products} category="fashion" message="Trending Fashion"/>
          <ProductGrid products={products} productRange="16, 32"/>
          <CategoryCarousel products={products} category="electronics" message="Recommended electronics"/>
          <ProductGrid products={products} productRange="32, 48"/>
    </InfiniteScroll>
        </div>
        <Footer />
      </div>
  );
};

export default Homepage;
