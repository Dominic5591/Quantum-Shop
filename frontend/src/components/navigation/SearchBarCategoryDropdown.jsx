import { useEffect, forwardRef } from 'react';
import './SearchBar.css';

const SearchBarCategoryDropdown = forwardRef(({ categories, selectedCategory, onCategoryChange }, ref) => {
  // Adjust the width based on the selected category
  const adjustDropdownWidth = () => {
    const select = ref.current;
    if (select) {
      // Define a mapping of categories to widths
      const categoryWidths = {
        'Electronics': '100px',
        'Books': '70px',
        'Home': '70px',
        'Fashion': '80px',
        'All': '50px',
      };
      // Set the width based on the selected category
      select.style.width = categoryWidths[selectedCategory] || 'auto';
    }
  };

  useEffect(() => {
    adjustDropdownWidth();
  }, [selectedCategory, ref]);

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
