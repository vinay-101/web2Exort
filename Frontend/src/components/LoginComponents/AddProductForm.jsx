import React, { useState } from 'react';


const AddProductForm = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="add-product-form-container">
      <h2 className="form-header">Add Product</h2>
      <div className="form-section">
        {/* Search Section */}
        <button className="form-section-header" onClick={() => toggleSection('search')}>
          Search Product by Name
        </button>
        {openSection === 'search' && (
          <div className="form-section-body">
            <label>Search:</label>
            <input type="text" placeholder="Enter product name" />
          </div>
        )}
      </div>

      <div className="form-section">
        {/* Basic Information Section */}
        <button className="form-section-header" onClick={() => toggleSection('basicInfo')}>
          Basic Information
        </button>
        {openSection === 'basicInfo' && (
          <div className="form-section-body">
            <label>Name:</label>
            <input type="text" placeholder="Enter product name" />

            <label>Product Images:</label>
            <input type="file" accept="image/*" />

            <label>Brand Name:</label>
            <input type="text" placeholder="Enter here..." />

            <label>Model Number:</label>
            <input type="text" placeholder="Enter here..." />

            <label>Product Material:</label>
            <input type="text" placeholder="Enter here..." />

            <label>Place of Origin:</label>
            <select>
              <option>Select</option>
              <option>USA</option>
              <option>China</option>
              <option>India</option>
            </select>

            <label>Product Brochure (10MB Max):</label>
            <input type="file" accept=".pdf" />
          </div>
        )}
      </div>

      <div className="form-section">
        {/* Detailed Description Section */}
        <button className="form-section-header" onClick={() => toggleSection('description')}>
          Detailed Description
        </button>
        {openSection === 'description' && (
          <div className="form-section-body">
            <label>Detailed Description:</label>
            <textarea placeholder="Enter detailed description..." rows="5"></textarea>
          </div>
        )}
      </div>

      <div className="form-section">
        {/* Product Specification Section */}
        <button className="form-section-header" onClick={() => toggleSection('specification')}>
          Product Specification
        </button>
        {openSection === 'specification' && (
          <div className="form-section-body">
            <label>Attribute (e.g., Color):</label>
            <input type="text" placeholder="Attribute" />

            <label>Value (e.g., Red):</label>
            <input type="text" placeholder="Value" />
          </div>
        )}
      </div>

      <div className="form-section">
        {/* Trade Information Section */}
        <button className="form-section-header" onClick={() => toggleSection('tradeInfo')}>
          Trade Information
        </button>
        {openSection === 'tradeInfo' && (
          <div className="form-section-body">
            <label>Unit Type:</label>
            <select>
              <option>Select</option>
              <option>Piece</option>
              <option>Set</option>
            </select>

            <label>Min Quantity:</label>
            <input type="number" placeholder="Enter min quantity" />

            <label>Max Quantity:</label>
            <input type="number" placeholder="Enter max quantity" />

            <label>Price (in USD):</label>
            <input type="number" placeholder="Enter price in USD" />

            <label>Accepted Payment:</label>
            <select multiple>
              <option>T/T</option>
              <option>D/A</option>
              <option>L/C</option>
              <option>PayPal</option>
              <option>Western Union</option>
            </select>

            <label>Business Types:</label>
            <select>
              <option>Select...</option>
              <option>Manufacturer</option>
              <option>Distributor</option>
            </select>

            <label>Processing Time (Lead Time):</label>
            <select>
              <option>Select</option>
              <option>1-3 days</option>
              <option>1 week</option>
            </select>
          </div>
        )}
      </div>

      <div className="form-section">
        {/* Packaging Information Section */}
        <button className="form-section-header" onClick={() => toggleSection('packagingInfo')}>
          Packaging Information
        </button>
        {openSection === 'packagingInfo' && (
          <div className="form-section-body">
            <label>Packed:</label>
            <select>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <label>Quantity:</label>
            <input type="number" placeholder="Enter quantity" />
          </div>
        )}
      </div>

      <div className="form-section">
        {/* Logistics Information Section */}
        <button className="form-section-header" onClick={() => toggleSection('logisticsInfo')}>
          Logistics Information
        </button>
        {openSection === 'logisticsInfo' && (
          <div className="form-section-body">
            <label>Delivery Time (in days):</label>
            <input type="number" placeholder="Enter here..." />

            <label>Nearest Ports:</label>
            <select>
              <option>Select</option>
              <option>Port A</option>
              <option>Port B</option>
            </select>
          </div>
        )}
      </div>

      <button className="form-submit-btn">Submit</button>
    </div>
  );
};

export default AddProductForm;
