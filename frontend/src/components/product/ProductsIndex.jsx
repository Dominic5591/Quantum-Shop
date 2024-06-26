import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProducts, selectProductsArray } from '../../store/product';
import ProductItem from './ProductItem';
import PageSelector from './PageSelector';
import Loader from '../loaders/Loader';
import Footer from '../footer/Footer';
import './ProductsIndex.css';


const ProductsIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);
  const { category } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);


  useEffect(() => {
    dispatch(fetchProducts(page, category))
      .then((data) => {
        setTotalPages(data.total_pages);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [dispatch, page, category]);


  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  if (!loaded || category !== 'electronics' && category !== 'books' &&  category !== 'home' && category !== 'fashion' && category !== 'all') {
    return <Loader />;
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
      <PageSelector
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Footer />
    </ul>
  );
};

export default ProductsIndex;