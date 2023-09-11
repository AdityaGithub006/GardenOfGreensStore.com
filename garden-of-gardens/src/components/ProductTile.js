import React from 'react';

const ProductTile = ({ product }) => {
  return (
    <div className="product-tile">
      <a href={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </a>
    </div>
  );
};

export default ProductTile;
