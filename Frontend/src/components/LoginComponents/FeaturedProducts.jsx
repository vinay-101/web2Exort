import React from 'react';

const FeaturedProducts = () => {
  const featuredProducts = [
    { id: 1, name: 'Featured Product 1', date: '2025-01-12', status: 'Approved' },
    { id: 2, name: 'Featured Product 2', date: '2025-01-10', status: 'Approved' },
  ];

  return (
    <div className="product-page-products-section">
      <h2>Featured Products</h2>
      {featuredProducts.map((product) => (
        <div key={product.id} className="product-page-product-item">
          <img
            src="https://via.placeholder.com/50"
            alt="Product"
            className="product-page-product-img"
          />
          <div className="product-page-product-info">
            <span className="product-page-product-name">{product.name}</span>
            <span className="product-page-product-date">{product.date}</span>
            <span className="product-page-product-status">{product.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
