import React, { useEffect, useState } from "react";
import axios from 'axios';
import productService from "../../Services/productService";
import { useParams } from "react-router-dom";
import handleApiResponse from "../../helpers/responseHandler";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const viewProduct = async () => {
      try {
        const response = await productService.getProductById(id);
        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
        handleApiResponse(error);
      }
    };
    viewProduct();
  }, [id]);

  const handleDownload = async (brochure) => {
    try {
      const response = await axios.get(`http://localhost:5000/${brochure}`, {
        responseType: 'blob', // Important for downloading files
      });

      // Create a link element
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'brochure.pdf'); // Set the file name
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the brochure:", error);
      handleApiResponse(error);
    }
  };

  return (
    <div className="container-fluid view-product">
      <div className="row">
        <div className="col-md-8">
          {/* Product Information */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>Product Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    <label>Product Name:</label>
                    <span>{product?.title}</span>
                  </p>
                  <p>
                    <label>Brand:</label>
                    <span>{product?.brand}</span>
                  </p>
                  <p>
                    <label>Model Number:</label>
                    <span>{product?.model}</span>
                  </p>
                  <p>
                    <label>Material:</label>
                    <span>{product?.material}</span>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <label>Price ( INR ) : </label>
                    <span>{product?.price}</span>
                  </p>
                  <p>
                    <label>Unit Type:</label>
                    <span>{product?.unitType}</span>
                  </p>
                  <p>
                    <label>Min Quantity:</label>
                    <span>{product?.minQuantity}</span>
                  </p>
                  <p>
                    <label>Max Quantity:</label>
                    <span>{product?.maxQuantity}</span>
                  </p>
                </div>
              </div>
              <p>
                <label>Brochure:</label>
                <span>
                  <button className="btn btn-secondary ml-1" onClick={() => handleDownload(product?.brochure)}>Download Brochure</button>
                </span>
              </p>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>Detailed Description</h5>
            </div>
            <div className="card-body">
              <p dangerouslySetInnerHTML={{ __html: product?.description }}></p>
            </div>
          </div>

          {/* Product Specification */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>Product Specification</h5>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product?.productSpecifications?.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.key}</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          {/* Product Images */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>Product Images</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {product?.productImages?.map((image, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <img
                      src={`http://localhost:5000/${image.image}`}
                      alt={`Product ${index + 1}`}
                      className="img-fluid"
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trade Information */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>Trade Information</h5>
            </div>
            <div className="card-body">
              <p>
                <label>Accepted Payments:</label>
                <span>{product?.acceptedPayment}</span>
              </p>
              <p>
                <label>Business Type:</label>
                <span>{product?.businessType}</span>
              </p>
              <p>
                <label>Process Lead Time:</label>
                <span>{product?.processLeadTime} {product?.processLeadTimeUnit}</span>
              </p>
            </div>
          </div>

          {/* Logistics Information */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>Logistics Information</h5>
            </div>
            <div className="card-body">
              <p>
                <label>Package Type:</label>
                <span>{product?.packageType}</span>
              </p>
              <p>
                <label>Package Quantity:</label>
                <span>{product?.packageQuantity} {product?.packageUnit}</span>
              </p>
              <p>
                <label>Delivery Time:</label>
                <span>{product?.deliveryTime} {product?.processLeadTimeUnit}</span>
              </p>
              <p>
                <label>Nearest Port:</label>
                <span>{product?.nearestPort}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;