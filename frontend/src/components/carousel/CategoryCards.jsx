import { NavLink } from 'react-router-dom';


const CategoryCard = ({ categories }) => {

  return (
    <div className="categoryCardsContainer">
      {categories.map((category, index) => (
        <div key={index} className="categoryCard">
          <NavLink to={`/categories/${category.name}`}>
            <img src={category.image} alt={category.name} className="categoryCardImage" />
            <div className="categoryCardName">{category.name}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
