import { useEffect, forwardRef } from 'react';
import './SearchBar.css'; // Ensure this import is correct

const SearchBarCategoryDropdown = forwardRef(({ categories, selectedCategory, onCategoryChange }, ref) => {
  const adjustDropdownWidth = () => {
    const select = ref.current;
    if (select) {
      const categoryWidths = {
        'Electronics': '100px',
        'Books': '70px',
        'Home': '70px',
        'Fashion': '80px',
        'All': '50px',
      };

      select.style.width = categoryWidths[selectedCategory] || 'auto';
    }
  };

  useEffect(() => {
    adjustDropdownWidth();
  });

  return (
    <select
      ref={ref}
      className="searchBarCategoryDropdown"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      {/* <label className="dropdownOption" value="All">All &#x25BE;</label> */}
      <option  value="All" label=''>All<span className="dropdownOption">&#x25BE;</span></option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
});

SearchBarCategoryDropdown.displayName = 'SearchBarCategoryDropdown';

export default SearchBarCategoryDropdown;
  