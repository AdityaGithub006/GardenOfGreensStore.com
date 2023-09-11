import React from 'react';
import ProductTile from '../components/ProductTile';

const HomePage = ({ products }) => {
  return (
    <div className="home-page">
      <h1>Welcome to My E-commerce App</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
