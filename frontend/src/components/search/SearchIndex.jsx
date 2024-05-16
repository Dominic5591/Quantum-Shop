import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Rating } from "../product/Rating";
import loading from '../../images/loading.gif';
import '../../index.css';
import Footer from "../footer/Footer";
import { fetchSearchResults, selectSearchResultsArray } from "../../store/search";
import PageSelector from "../product/PageSelector";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

const SearchIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectSearchResultsArray);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const page = searchParams.get('page');
  const query = searchParams.get('q');



  useEffect(() => {
    dispatch(fetchSearchResults(query, category, page))
      .then((data) => {
        setTotalPages(data.total_pages);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [dispatch, page, category, query]);


  if (products.length === 0) {
    return (
      <div id="loadingGifDiv">
        <img src={loading} alt="loading" className='loadingGif' />
      </div>
    );
  }


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <ul className='productsIndexPage'>
      <div className="productsIndexDivider"></div>
      <div className="productsContainer">
        {products.map((product, index) => (
          <NavLink key={`${product.id}_${index}`} to={`/products/${product.id}`}>
            <div className="productCard">
              <img className='productImg' src={product.photoUrl} />
              <div className="cardContent">
                <p className='productNameH3'>{product.name}</p>
                <Rating rating={product.rating} />
                <p className='productPrice'>${product.price}</p>
              </div>
            </div>
          </NavLink>
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

export default SearchIndex;
