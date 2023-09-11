import React from 'react';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = ({ product }) => {
  return (
    <div className="product-detail-page">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
