import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
      <div className="product-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
