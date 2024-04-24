import magnifying from '../../images/hiclipart.com.png';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from '../../store/search';
import { useNavigate, NavLink } from 'react-router-dom'; 
import { debounce } from 'lodash';
import './SearchBar.css';
import SearchBarCategoryDropdown from './SearchBarCategoryDropdown';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const results = useSelector((state) => state.search);
  const searchResults = results?.search || [];
  const products = Object.values(searchResults);
  const dropdownRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const maxResultsToShow = 6;
  
  
  const magImgDivRef = useRef(null);
  const searchBarRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['Electronics', 'Books', 'Home Goods', 'Fashion'];





  useEffect(() => {
    const handleFocus = () => {
      magImgDivRef.current.classList.add('focused');
      categoryDropdownRef.current.classList.add('focused');
    };

    const handleBlur = () => {
      magImgDivRef.current.classList.remove('focused');
      categoryDropdownRef.current.classList.remove('focused');
    };

    const searchBar = searchBarRef.current;
    if (searchBar) {
      searchBar.addEventListener('focus', handleFocus);
      searchBar.addEventListener('blur', handleBlur);
    }

    return () => {
      if (searchBar) {
        searchBar.removeEventListener('focus', handleFocus);
        searchBar.removeEventListener('blur', handleBlur);
      }
    };
  }, []);




  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  useEffect(() => {
    if (clickedOutside) {
      setShowModal(false);
    }
  }, [clickedOutside]);



  const debouncedSearch = debounce((params) => {
    dispatch(fetchSearch(params));
    setShowModal(true);
  }, 1000);



  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    debouncedSearch({ query, category: selectedCategory });

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
    }, 1000);
  };



  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/products/search?q=${search}`);
      setShowModal(false);
    }
  };



  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/products/search?q=${search}`);
    setShowModal(false);
  };

  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.slice(0, maxLength)}...`;
    }
    return name;
  };




  return (
    <div className='searchBarMain' ref={dropdownRef}>
      <SearchBarCategoryDropdown
        ref={categoryDropdownRef}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => setSelectedCategory(category)}
      />
      <input
        placeholder='Search QuantumShop'
        className='searchBar'
        type="text"
        ref={searchBarRef}
        value={search}
        onChange={handleSearch}
        onKeyDown={handleSearchEnter}
      />
      <div id='magImdDiv' ref={magImgDivRef}>
        <img onClick={handleClick} className='magImg' src={magnifying} alt="Search" />
      </div>
      {showModal && (
        <div className="searchDropdown">
          {products.slice(0, maxResultsToShow).map((product, index) => (
            <div key={`${product.id}_${index}`} className='searchProductResult'>
              <NavLink className='searchProductResultLink' to={`/products/${product.id}`}>
                <span className='searchResultArrowSpan'>&#8623; </span> {truncateName(product.name, 105)}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
