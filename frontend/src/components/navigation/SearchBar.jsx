import magnifying from '../../images/hiclipart.com.png';
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from '../../store/search';
import { useNavigate, NavLink } from 'react-router-dom'; 
import { debounce } from 'lodash';
import './SearchBar.css';
import SearchBarCategoryDropdown from './SearchBarCategoryDropdown';
import { selectProductsArray } from '../../store/product';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSearchOverlayVisible, setIsSearchOverlayVisible] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const [dropdownSuggestions, setDropdownSuggestions] = useState([]);
  const dropdownProducts = useSelector(selectProductsArray);
  const dropdownRef = useRef(null);
  const maxResultsToShow = 5;
  
  
  const magImgDivRef = useRef(null);
  const searchBarRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['Electronics', 'Books', 'Home', 'Fashion'];

  useEffect(() => {
    const handleFocus = () => {
      magImgDivRef.current.classList.add('focused');
      categoryDropdownRef.current.classList.add('focused');
      setIsSearchOverlayVisible(true);
    };

    const handleBlur = () => {
      magImgDivRef.current.classList.remove('focused');
      categoryDropdownRef.current.classList.remove('focused');
      setIsSearchOverlayVisible(false);
      setShowModal(false);
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
      setIsSearchOverlayVisible(false);
    }
  }, [clickedOutside]);



  const debouncedSearch = debounce((params) => {
    dispatch(fetchSearch(params));
    setShowModal(true);
  }, 500);


  const handleSearch = (e) => {
    const query = e.target.value;
    setShowModal(true);
    setSearch(query);
    if (e.key === 'Enter') {
      debouncedSearch({ query, category: selectedCategory });
    }
  };




  const updateDropdownSuggestions = (query) => {
    const filteredProducts = dropdownProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) && 
        (selectedCategory === 'All' || product.category === selectedCategory.toLowerCase())
    );
    setDropdownSuggestions(filteredProducts);
  };


  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchSearch({ query: search, category: selectedCategory }));
      navigate(`/products/search?q=${search}`);
      setShowModal(false);
      setIsSearchOverlayVisible(false);
    }
  };



  const handleClick = (e) => {
    e.preventDefault();
    dispatch(fetchSearch({ query: search, category: selectedCategory }));
    
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
      <div id="searchOverlay" className="searchOverlay" style={{ display: isSearchOverlayVisible ? 'block' : 'none' }}></div>
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
        onChange={(e) => {
          handleSearch(e);
          updateDropdownSuggestions(e.target.value);
        }}
        onKeyDown={handleSearchEnter}
      />
      <div id='magImdDiv' ref={magImgDivRef}>
        <img onClick={handleClick} className='magImg' src={magnifying} alt="Search" />
      </div>
      {showModal && (
        <div className="searchDropdown">
          {dropdownSuggestions.slice(0, maxResultsToShow).map((product, index) => (
            <div key={`${product.id}_${index}`} className='searchProductResult'>
              <NavLink className='searchProductResultLink' to={`/products/${product.id}`}>
                <span className='searchResultArrowSpan'>&#8623; </span> {truncateName(product.name, 75)}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;