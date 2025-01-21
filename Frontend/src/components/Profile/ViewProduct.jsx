import React from 'react'

const ViewProduct = () => {
  return (
      <>
          <div className="col-xl-10 col-lg-10 view-product">
              {/* Product Information */}
              
    <div className="product-section">
      <h5>Product Information</h5>
      <div className="product-details">
        <p>
          <label>Product Name:</label>
          <span>Example Product</span>
        </p>
        <p>
          <label>Model Number:</label>
          <span>EX12345</span>
        </p>
        <p>
          <label>Product Keyword:</label>
          <span>Keyword1, Keyword2, Keyword3</span>
        </p>
        <p>
          <label>Price:</label>
          <span>$100</span>
        </p>
        <p>
          <label>Brochure:</label>
          <span>
            <a href="#">Download Brochure</a>
          </span>
        </p>
      </div>
    </div>
    {/* Detailed Description */}
    <div className="product-section">
      <h5>Detailed Description</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut odio
        nec nulla luctus tempor. Nullam sit amet elit at mi convallis
        ullamcorper non a nisi.
      </p>
    </div>
    {/* Product Specification */}
    <div className="product-section">
      <h5>Product Specification</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Color:</strong> Red
        </li>
        <li className="list-group-item">
          <strong>Size:</strong> Medium
        </li>
        <li className="list-group-item">
          <strong>Weight:</strong> 1kg
        </li>
      </ul>
    </div>
    {/* Trade Information */}
    <div className="product-section">
      <h5>Trade Information</h5>
      <div className="product-details">
        <p>
          <label>Unit Type:</label>
          <span>Pieces</span>
        </p>
        <p>
          <label>Min Quantity:</label>
          <span>10</span>
        </p>
        <p>
          <label>Max Quantity:</label>
          <span>500</span>
        </p>
        <p>
          <label>Accepted Payments:</label>
          <span>T/T, L/C, PayPal</span>
        </p>
      </div>
    </div>
    {/* Logistics Information */}
    <div className="product-section">
      <h5>Logistics Information</h5>
      <div className="product-details">
        <p>
          <label>Delivery Time:</label>
          <span>7 days</span>
        </p>
        <p>
          <label>Release Ports:</label>
          <span>Port A, Port B</span>
        </p>
      </div>
    </div>
    {/* Actions */}
    <div className="product-section">
      <div className="product-actions">
        <button className="btn btn-primary">
          <i className="fa fa-edit" /> Edit
        </button>
        <button className="btn btn-danger">
          <i className="fa fa-trash-alt" /> Delete
        </button>
      </div>
    </div>
  </div>

    </>
  )
}

export default ViewProduct