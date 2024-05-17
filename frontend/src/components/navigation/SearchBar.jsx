import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResult, fetchSearchResults, selectSearchResultsArray } from '../../store/search';
import SearchBarCategoryDropdown from './SearchBarCategoryDropdown';
import { useNavigate } from 'react-router-dom'; 
import magnifying from '../../images/hiclipart.com.png';
import { debounce } from 'lodash';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSearchOverlayVisible, setIsSearchOverlayVisible] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const dropdownProducts = useSelector(selectSearchResultsArray);
  const dropdownRef = useRef(null);
  const maxResultsToShow = 5;
  const magImgDivRef = useRef(null);
  const searchBarRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['Electronics', 'Books', 'Home', 'Fashion'];
  const page = 1;

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
      if (dropdownRef.current &&!dropdownRef.current.contains(event.target)) {
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

  const debouncedSearch = useRef(debounce((query, category, page) => {
    dispatch(fetchSearchResults(query, category, page));
  }, 1000)).current;

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    if (query!== '') {
      setShowModal(true);
      debouncedSearch(query, selectedCategory, page);
    } else {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (search!== '') {
      debouncedSearch(search, selectedCategory, page);
    } else {
      setShowModal(false);
    }
  }, [search, selectedCategory, debouncedSearch]);


  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchSearchResults(search, selectedCategory));
      navigate(`/products/search?q=${search}&category=${selectedCategory}&page=1`);
      setShowModal(false);
      setIsSearchOverlayVisible(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(false);
    dispatch(fetchSearchResults(search, selectedCategory));
    navigate(`/products/search?q=${search}&category=${selectedCategory}&page=1`);      
  };


  const truncateName = (name, maxLength) => {
    if (dropdownProducts && name.length > maxLength) {
      return `${name.slice(0, maxLength)}...`;
    }
    return name;
  };


  return (
    <div className='searchBarMain' ref={dropdownRef}>
      <div id="searchOverlay" className="searchOverlay" style={{ display: isSearchOverlayVisible? 'block' : 'none' }}></div>
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
        }}
        onKeyDown={handleSearchEnter}
      />
      <div id='magImdDiv' ref={magImgDivRef}>
        <img onClick={handleClick} className='magImg' src={magnifying} alt="Search" />
      </div>
      {showModal && (
        <div className="searchDropdown" key={search}> {/* Added key prop */}
          {dropdownProducts.slice(0, maxResultsToShow).map((product, index) => (
            <div key={`${product.id}_${index}`} className='searchProductResult'>
              <div
                className='searchProductResultLink'
                onClick={() => {
                  dispatch(fetchSearchResult(product.id));
                  setShowModal(false);
                  navigate(`/products/${product.id}`); 
                }}
              >
                <span className='searchResultArrowSpan'>&#8623;</span> {truncateName(product.name, 75)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;