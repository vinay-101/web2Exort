import React, {useEffect, useState} from "react";
import axios from 'axios';
import productService from "../../Services/productService";
import { Link, useParams } from "react-router-dom";
import handleApiResponse from "../../helpers/responseHandler";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() =>{
    const viewProduct = async()=>{
      try {
        const response = await productService.getProductById(id)
        setProduct(response.data.data)
      } catch (error) {
        console.log(error);
        handleApiResponse(error)
      }
    }
    viewProduct();
  }, [])

  const handleDownload = (brochure, event) => {
    event.preventDefault(); // Prevent default action
    event.stopPropagation(); // Stop event bubbling
    const link = document.createElement("a");
    link.href = `http://localhost/${brochure}`;
    link.setAttribute("download", "brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="col-xl-10 col-lg-10 view-product">
        {/* Product Information */}

        <div className="product-section">
          <h5>Product Information</h5>
          <div className="product-details">
            <p>
              <label>Product Name:</label>
              <span>{product?.title}</span>
            </p>
            <p>
              <label>Model Number:</label>
              <span>{product?.model}</span>
            </p>
            <p>
              <label>Price:</label>
              <span>Rs {product?.price}</span>
            </p>
            <p>
              <label>Brochure:</label>
              <span>
              <button onClick={(event) => handleDownload(product?.brochure, event)}>Download Brochure</button>
              </span>
            </p>
          </div>
        </div>
        {/* Detailed Description */}
        <div className="product-section">
          <h5>Detailed Description</h5>
          <p>
          {product?.description}
          </p>
        </div>
        {/* Product Specification */}
        <div className="product-section">
          <h5>Product Specification</h5>
          <ul className="list-group">
          {/* { product?.specifications && product?.specifications.map((specification, index) => (  */}
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
  );
};

export default ViewProduct;
