
import './SearchBar.css';
import magnifying from '../../images/magnifying50.png';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from '../../store/search';
import { useNavigate } from 'react-router-dom'; 

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearch(query);
    dispatch(fetchSearch(query));
  };

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/products/search?q=${search}`);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/products/search?q=${search}`);
  };

  return (
    <div className='searchBarMain'>
      <input placeholder='  Search QuantumShop' className='searchBar' type="text" onChange={handleSearch} onKeyDown={handleSearchEnter} />
      <img onClick={handleClick} className='magImg'src={magnifying} alt="" />
    </div>

  );
};

export default SearchBar;