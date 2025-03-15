import React, { useEffect, useState } from "react";
import "../../assets/profile/profile.scss"; // Assuming this imports additional styles
import productService from "../../Services/productService";
import { useParams } from "react-router-dom";

const Catalogue = () => {
  const [catalogue, setCatalogue] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchCatalogue() {
      const res = await productService.fetchCatalogue(slug);
      setCatalogue(res.data.data);
    }
    fetchCatalogue();
  }, []);

  return (
    <div className="container-fluid px-0 catalog-page">
      {/* Header */}
      <header className="bg-white py-2 border-bottom">
        <div className="container-fluid px-3">
          <h2 className="mb-0 font-weight-bold text-center">
            Product Catalogue
          </h2>
        </div>
      </header>
      <div className="row no-gutters">
        {/* Sidebar with Fixed Company Card */}
        <aside className="col-md-3 sidebar">
          <div className="card company-card fixed-card  shadow-sm">
            <div className="card-header bg-danger text-white d-flex justify-content-between align-items-center">
              <h4 className="mb-0">CONTACT COMPANY NOW</h4>
            </div>
            <div className="card-body">
              <h5 className="company-name mb-3">Maxta Technologies Pvt Ltd</h5>
              <div className="d-flex align-items-center mb-2">
                <span className="flag-icon flag-icon-in mr-2">
                 <img src="/images/flag.png" width="30px" alt="flag" />
                  </span> {/* Assuming a flag icon library like flag-icon-css */}
                {/* <span className="text-muted small ml-2">India</span> */}
              </div>
              <p className="text-muted small mb-2">
                <i className="fa fa-phone mr-2" />
                **** **** ****
              </p>
              <p className="text-muted small mb-2">Country: India</p>
              <p className="text-muted small mb-2">
                City / State: Buxar
              </p>
              <p className="text-muted small mb-4">Street address: Not-available</p>
              <button className="btn btn-primary btn-block">Contact now</button>
            </div>
          </div>
        </aside>
        {/* Product Listing */}
        <main className="col-md-9 main-content">
          <div className="px-3 pt-3 pb-2">
            <div className="row">
              {catalogue.map((product) => (
                <div className="col-md-4 col-sm-6 mb-3" key={product.id}>
                  <div className="card product-card">
                    <div className="product-img-wrapper">
                      <img
                        src={"http://localhost:5000/" + product?.productImages[0]?.image}
                        className="card-img-top"
                        alt={product.title}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mb-2">{product.title}</h5>
                      <p className="price mb-2">Rs {product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catalogue;