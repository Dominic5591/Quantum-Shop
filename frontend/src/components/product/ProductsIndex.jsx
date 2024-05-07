import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts, selectProductsArray } from '../../store/product';
import ProductItem from './ProductItem';
import loading from '../../images/loading.gif';
import './ProductsIndex.css';
import Footer from '../footer/Footer';

const ProductsIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);
  const { category } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);



  useEffect(() => {
    dispatch(fetchProducts(page))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch, page]);


  const handleLoadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };


  if (!loaded) {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

  if (category !== 'electronics' && category !== 'books' &&  category !== 'home' && category !== 'fashion' && category !== 'all') {
    return (
      <div>
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }

  return (
    <ul className='productsIndexPage'>
      <div className="productsIndexDivider"></div>
      <div className="productsContainer">
        {products.map((product, index) => (
          <div key={`${product.id}_${index}`}>
            <ProductItem product={product}/>
          </div>
        ))}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
      <Footer />
    </ul>
  );
};

export default ProductsIndex;