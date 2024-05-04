import { useEffect, useState, forwardRef } from 'react';
import './SearchBar.css';

const SearchBarCategoryDropdown = forwardRef(({ categories, selectedCategory, onCategoryChange }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
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

    adjustDropdownWidth();
  }, [selectedCategory, ref]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <select
      ref={ref}
      className="searchBarCategoryDropdown"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <option value="All" label=''>
        All{!isFocused ? <> &#x25BE;</> : null}
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
});

SearchBarCategoryDropdown.displayName = 'SearchBarCategoryDropdown';

export default SearchBarCategoryDropdown;
