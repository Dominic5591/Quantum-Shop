const SearchBarCategoryDropdown = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="All">All</option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default SearchBarCategoryDropdown;