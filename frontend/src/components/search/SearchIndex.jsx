import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Rating } from "../product/Rating";
import Footer from "../footer/Footer";
import { fetchSearchResults, selectSearchResultsArray } from "../../store/search";
import PageSelector from "../product/PageSelector";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import Loader from "../loaders/Loader";

const SearchIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectSearchResultsArray);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const page = searchParams.get('page');
  const query = searchParams.get('q');
  const totalPages = useSelector(state => state.search.totalPages);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    dispatch(fetchSearchResults(query, category, page));
  }, [dispatch, query, category, page]); 

  if (!products) {
    return <Loader />;
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    dispatch(fetchSearchResults(query, category, newPage));
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
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => handlePageChange(newPage)} // Pass newPage to handlePageChange
      />
      <Footer />
    </ul>
  );
};

export default SearchIndex;
