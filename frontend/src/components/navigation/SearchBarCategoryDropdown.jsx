import { useEffect, forwardRef } from 'react';
import './SearchBar.css';

const SearchBarCategoryDropdown = forwardRef(({ categories, selectedCategory, onCategoryChange }, ref) => {
  useEffect(() => {
    const select = ref.current;
    if (select) {
      const tempElement = document.createElement('span');
      tempElement.style.visibility = 'hidden';
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.style.font = window.getComputedStyle(select).font;
      document.body.appendChild(tempElement);

      const selectedOption = select.options[select.selectedIndex];
      tempElement.textContent = selectedOption.textContent;
      const width = tempElement.offsetWidth;
      document.body.removeChild(tempElement);
      select.style.width = `${width + 30}px`;
    }
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
