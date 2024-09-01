import React, { useEffect, useState } from 'react';
import './ProductList.css'; // Make sure to import your CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the web
    fetch('https://dummyjson.com/products?limit=10&select=title,price,thumbnail')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products); // Set the products state with the data
        setLoading(false); // Set loading to false
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error); // Set error state
        setLoading(false); // Set loading to false
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>; // Show error message
  }

  return (
    <div className="container">
      <h2 className="title">Product List</h2>
      <div className="card-container">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt={product.title} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
