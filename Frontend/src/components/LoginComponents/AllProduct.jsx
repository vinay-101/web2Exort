import React, {useState} from 'react';
import ProductDetailPage from '../LoginComponents/ProductDetailPage'
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const products = [
    { id: 1, name: 'Test Product', date: '2025-01-12', status: 'Rejected' },
  ];

  const [page, setPage] = useState(false);
  const renderContentPage = () => {
    if (page === true) {
      return <ProductDetailPage />
    }
    else {
      return null;
    }
  }

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
        
            
            <span className="product-page-product-name" >
          <button onClick={() => setPage(!page)}>{product.name}</button>
            
            </span>
              
              
            <span className="product-page-product-date">{product.date}</span>
            <span className="product-page-product-status">{ product.status}</span>
          </div>
          <div className="product-page-product-actions">
            <button className="product-page-action-btn">⭐</button>
            <button className="product-page-action-btn">✏️</button>
            <button className="product-page-action-btn">🗑️</button>
              </div>
          
        </div>

      ))}
      {renderContentPage()}

    </div>
  );
};

export default AllProducts;
