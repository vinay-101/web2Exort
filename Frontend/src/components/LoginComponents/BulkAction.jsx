import React, { useState } from 'react';

const BulkAction = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const allProducts = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  const handleBulkDelete = () => {
    alert(`Deleting products: ${selectedProducts.join(', ')}`);
    setSelectedProducts([]);
  };

  return (
    <div className="product-page-products-section">
      <h2>Bulk Action</h2>
      {allProducts.map((product) => (
        <div key={product.id} className="product-page-bulk-item">
          <input
            type="checkbox"
            checked={selectedProducts.includes(product.id)}
            onChange={() => handleCheckboxChange(product.id)}
          />
          <span>{product.name}</span>
        </div>
      ))}
      <button
        className="product-page-header-btn"
        onClick={handleBulkDelete}
        disabled={selectedProducts.length === 0}
      >
        Delete Selected
      </button>
    </div>
  );
};

export default BulkAction;
