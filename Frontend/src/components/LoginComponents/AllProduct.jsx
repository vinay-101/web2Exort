import React from 'react';

const AllProducts = () => {
  const products = [
    { id: 1, name: 'Test Product', date: '2025-01-12', status: 'Rejected' },
  ];

  return (
    <div className="product-page-products-section">
      {products.map((product) => (
        <div key={product.id} className="product-page-product-item">
          <img
            src="../../../public/images/company_logo.png"
            alt="Product"
            className="product-page-product-img"
          />
          <div className="product-page-product-info">
            <span className="product-page-product-name">Product Name</span>
            <span className="product-page-product-date">MM-DD-YYYY</span>
            <span className="product-page-product-status">Status</span>
          </div>
          <div className="product-page-product-actions">
            <button className="product-page-action-btn">⭐</button>
            <button className="product-page-action-btn">✏️</button>
            <button className="product-page-action-btn">🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
