import { useEffect, forwardRef } from 'react';
import './SearchBar.css';

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
      <option value="All">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
});

SearchBarCategoryDropdown.displayName = 'SearchBarCategoryDropdown';

export default SearchBarCategoryDropdown;
