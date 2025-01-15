import React, { useState } from 'react';
import '../../assets/css/ProductDetailPage.css';

const ProductDetailPage = () => {
  const initialProduct = {
    name: 'Elegant Wooden Chair',
    images: ['/public/images/company_logo.png', '/public/images/company_logo.png'],
    brand: 'WoodCraft',
    modelNumber: 'WC12345',
    material: 'Premium Teakwood',
    origin: 'India',
    brochure: 'https://example.com/brochure.pdf',
    description: 'An elegant wooden chair designed with the finest teakwood for both comfort and style.',
    specifications: {
      color: 'Brown',
      weight: '12 kg',
      dimensions: '35x35x40 inches',
    },
    tradeInfo: {
      unitType: 'Piece',
      minQuantity: 10,
      maxQuantity: 200,
      price: 45,
      paymentMethods: ['T/T', 'PayPal'],
      businessType: 'Manufacturer',
      leadTime: '1 week',
    },
    packaging: {
      packed: 'Yes',
      quantity: 5,
    },
    logistics: {
      deliveryTime: 7,
      nearestPorts: ['Port A'],
    },
  };

  const [product, setProduct] = useState(initialProduct);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e, section, key) => {
    const updatedProduct = { ...product };
    if (section) {
      updatedProduct[section][key] = e.target.value;
    } else {
      updatedProduct[key] = e.target.value;
    }
    setProduct(updatedProduct);
  };

  const toggleEditMode = () => setIsEditing(!isEditing);

  const saveChanges = () => {
    setIsEditing(false);
    console.log('Saved Product:', product);
  };

  return (
    <div className="productDetailPage-container">
      <div className="productDetailPage-header">
        <h1 className="productDetailPage-title">
          {isEditing ? (
            <input
              type="text"
              value={product.name}
              onChange={(e) => handleInputChange(e, null, 'name')}
              className="productDetailPage-input productDetailPage-input-title"
            />
          ) : (
            product.name
          )}
        </h1>
        <div className="productDetailPage-actions">
          <button className="productDetailPage-edit-btn" onClick={toggleEditMode}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          {isEditing && (
            <button className="productDetailPage-save-btn" onClick={saveChanges}>
              Save
            </button>
          )}
        </div>
      </div>

      {/* Images Section */}
      <div className="productDetailPage-images">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product Image ${index + 1}`}
            className="productDetailPage-image"
          />
        ))}
      </div>

      {/* Editable Information Sections */}
      <div className="productDetailPage-section">
        <h2>Basic Information</h2>
        <table className="productDetailPage-table">
          <tbody>
            {['brand', 'modelNumber', 'material', 'origin'].map((key) => (
              <tr key={key}>
                <td><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={product[key]}
                      onChange={(e) => handleInputChange(e, null, key)}
                      className="productDetailPage-input"
                    />
                  ) : (
                    <p>{product[key]}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="productDetailPage-section">
        <h2>Description</h2>
        <label>Description:</label>
        {isEditing ? (
          <textarea
            value={product.description}
            onChange={(e) => handleInputChange(e, null, 'description')}
            rows="4"
            className="productDetailPage-input"
          ></textarea>
        ) : (
          <p>{product.description}</p>
        )}
      </div>

      <div className="productDetailPage-section">
        <h2>Specifications</h2>
        <table className="productDetailPage-table">
          <tbody>
            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleInputChange(e, 'specifications', key)}
                      className="productDetailPage-input"
                    />
                  ) : (
                    <p>{value}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="productDetailPage-section">
        <h2>Trade Information</h2>
        <table className="productDetailPage-table">
          <tbody>
            {Object.entries(product.tradeInfo).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong></td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={Array.isArray(value) ? value.join(', ') : value}
                      onChange={(e) => handleInputChange(e, 'tradeInfo', key)}
                      className="productDetailPage-input"
                    />
                  ) : (
                    <p>{Array.isArray(value) ? value.join(', ') : value}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailPage;
