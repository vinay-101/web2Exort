import React from 'react';

const ProductCard = ({ product }) => {
  // Get the first product image or use a placeholder
  const productImage = product.ProductImages && product.ProductImages.length > 0
    ? `http://localhost:5000/${product.ProductImages[0].image}`
    : 'https://via.placeholder.com/150';

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productImage} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">
          <strong>Price:</strong> ${product.price} / {product.unitType}
        </p>
        <p className="product-quantity">
          <strong>MOQ:</strong> {product.minQuantity} - {product.maxQuantity} {product.unitType}
        </p>
        {product.User && (
          <p className="product-company">
            <strong>Supplier:</strong> {product.User.company}
          </p>
        )}
        <button className="btn btn-primary btn-sm">View Details</button>
      </div>
      <style jsx="true">{`
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          margin-bottom: 20px;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.15);
        }
        
        .product-image {
          height: 200px;
          overflow: hidden;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        
        .product-info {
          padding: 15px;
        }
        
        .product-title {
          font-size: 1.1rem;
          margin-bottom: 10px;
          font-weight: 500;
          color: #2c3e50;
        }
        
        .product-price, .product-quantity, .product-company {
          font-size: 0.9rem;
          margin-bottom: 5px;
          color: #7f8c8d;
        }
        
        .btn-primary {
          background-color: #3498db;
          border-color: #3498db;
          margin-top: 10px;
        }
        
        .btn-primary:hover {
          background-color: #2980b9;
          border-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
