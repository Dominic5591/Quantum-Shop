import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchSearch } from "../../store/search";
// import placeholder from '../../images/placeholder.svg';
import { NavLink } from 'react-router-dom';
import Rating from "../product/Rating";
import '../../index.css';

const SearchIndex = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    const query = location.search.split("=")[1];
    if (query) {
      dispatch(fetchSearch(query));
    }
  }, [dispatch, location]);


  
  const results = useSelector((state) => state.search);
  const searchResults = results?.search || [];
  const products = Object.values(searchResults);

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
    </ul>
  );
};

export default SearchIndex;

