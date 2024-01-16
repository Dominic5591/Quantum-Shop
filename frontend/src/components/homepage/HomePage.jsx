// HomePage.jsx

import { useEffect, useState } from 'react';
// import Product from './Product'; // Import the Product component
import './HomePage.css'; // Import your styles if needed
const HomePage = () => {
  // Assume you have a function to fetch products from your database
  const fetchProducts = async () => {
    // Fetch products from the database and set them to the products state
    // Example: const products = await api.get('/products');
    const products = []; // Replace this with your actual data fetching logic
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <div className="homePage">
      <div className="productList">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;