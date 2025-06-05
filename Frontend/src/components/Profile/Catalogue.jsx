import React, { useEffect, useState } from "react";
import "../../assets/profile/profile.scss"; // Assuming this imports additional styles
import productService from "../../Services/productService";
import { useParams } from "react-router-dom";
import handleApiResponse from "../../helpers/responseHandler";
import userService from "../../Services/userServices";

const Catalogue = () => {
  const [catalogue, setCatalogue] = useState([]);
  const [activeTab, setActiveTab] = useState("information");
  const [companyDetails, setCompanyDetails] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchCatalogue() {
      const res = await productService.fetchCatalogue(slug);
      setCatalogue(res.data.data);
    }
    fetchCatalogue();
  }, [slug]);

  useEffect(() => {
    async function fetchCompanyDetails() {
      const res = await productService.fetchCompanyDetails(slug);
      console.log(res.data.data);
      setCompanyDetails(res.data.data);
    }
    fetchCompanyDetails();
  }, [slug]);

  // create enquiry
  const handleEnquiry = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const res = await userService.createEnquiry(formData);
      
      if (res.data.success) {
        setFormSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  return (
    <div className="container-fluid mt-3 px-0 catalog-page">
      {/* Header with Company Banner */}
      <header className="company-banner">
        <div 
          className="banner-bg"
          style={{
            backgroundImage: `url(${companyDetails?.company?.profileBanner ? 
              `http://localhost:5000/${companyDetails.company.profileBanner}` : 
              '/images/banner-bg.jpg'})`
          }}
        ></div>
        <div className="banner-overlay">
          <div className="company-logo-container">
            <div className="company-title"> 
              <h2>{companyDetails?.user?.company || "Maxtra Technologies Pvt Ltd"}</h2>
            </div>
            {/* <div className="verification-badge">
              <i className="fas fa-check"></i>
            </div> */}
          </div>
        </div>
      </header>

      <div className="row no-gutters">
        {/* Main Content Area */}
        <div className="col-md-9 main-content">
          {/* Navigation Tabs */}
          <div className="catalog-tabs">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === "information" ? "active" : ""}`}
                  onClick={() => setActiveTab("information")}
                >
                  Information
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === "products" ? "active" : ""}`}
                  onClick={() => setActiveTab("products")}
                >
                  Products
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === "employees" ? "active" : ""}`}
                  onClick={() => setActiveTab("employees")}
                >
                  Enquire Now
                </button>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "information" && (
              <div className="information-tab">
                <div className="company-details mb-4">
                  <h4><i className="fa fa-building mr-2"></i>Company Details</h4>
                  <div className="detail-row">
                    <span className="detail-label">Year Established:</span>
                    <span className="detail-value">{companyDetails?.company?.yearOfEstablishment || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Business Type:</span>
                    <span className="detail-value">{companyDetails?.company?.primaryBusinessType !== "Select..." ? 
                      companyDetails?.company?.primaryBusinessType : "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Main Products:</span>
                    <span className="detail-value">{companyDetails?.company?.businessCategories !== "Select..." ? 
                      companyDetails?.company?.businessCategories : "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Company Description:</span>
                    <span className="detail-value">{companyDetails?.company?.companyDescription || "Not available"}</span>
                  </div>
                </div>

                {/* Company Extras Section */}
                <div className="company-extras mb-4">
                  <h4><i className="fa fa-star mr-2"></i>Company Extras</h4>
                  {/* <div className="detail-row">
                    <span className="detail-label">Phone Number:</span>
                    <span className="detail-value">{companyDetails?.user?.phoneNumber || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Alternate Phone:</span>
                    <span className="detail-value">{companyDetails?.company?.alternateMobileNumber || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{companyDetails?.user?.email || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Alternate Email:</span>
                    <span className="detail-value">{companyDetails?.company?.alternateEmail || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Landline Number:</span>
                    <span className="detail-value">{companyDetails?.company?.landlineNumber || "Not available"}</span>
                  </div> */}
                  <div className="detail-row">
                    <span className="detail-label">Number of Employees:</span>
                    <span className="detail-value">{companyDetails?.company?.numberOfEmployees || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Working Days:</span>
                    <span className="detail-value">{companyDetails?.company?.workingDays !== "Select..." ? 
                      companyDetails?.company?.workingDays : "Not available"}</span>
                  </div>
                </div>

                {/* Trading Details Section */}
                <div className="trading-details mb-4">
                  <h4><i className="fa fa-exchange mr-2"></i>Trading Details</h4>
                  {/* <div className="detail-row">
                    <span className="detail-label">Annual Revenue:</span>
                    <span className="detail-value">{companyDetails?.company?.annualRevenue || "Not available"}</span>
                  </div> */}
                  <div className="detail-row">
                    <span className="detail-label">Export Markets:</span>
                    <span className="detail-value">{companyDetails?.company?.majorMarket || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Export Percentage:</span>
                    <span className="detail-value">{companyDetails?.company?.exportPercentage || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Ownership Type:</span>
                    <span className="detail-value">{companyDetails?.company?.ownershipType || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Area:</span>
                    <span className="detail-value">{companyDetails?.company?.area || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Number of Product Lines:</span>
                    <span className="detail-value">{companyDetails?.company?.numberOfProductLines || "Not available"}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Output Capacity:</span>
                    <span className="detail-value">
                      {companyDetails?.company?.outputCapacity ? 
                        `${companyDetails.company.outputCapacity} ${companyDetails.company.outputCapacityUnit || ''}` : 
                        "Not available"}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Average Lead Time:</span>
                    <span className="detail-value">
                      {companyDetails?.company?.averageLeadTime ? 
                        `${companyDetails.company.averageLeadTime} ${companyDetails.company.averageLeadTimeUnit || ''}` : 
                        "Not available"}
                    </span>
                  </div>
                </div>

                {/* Terms of Delivery Section */}
                <div className="delivery-terms">
                  <h4><i className="fa fa-truck mr-2"></i>Terms of Delivery</h4>
                  <div className="detail-row">
                    <span className="detail-label">Terms of Delivery:</span>
                    <span className="detail-value">{companyDetails?.company?.termsOfDelivery || "Not available"}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "products" && (
              <div className="products-tab">
                <div className="featured-products">
                  <h4><i className="fa fa-cube mr-2"></i>OUR PRODUCTS</h4>
                  <div className="row">
                    {catalogue.map((product) => (
                      <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                        <div className="product-card">
                          <div className="product-img-wrapper">
                            {product.isFeatured && <div className="featured-badge">Featured</div>}
                            <img
                              src={product?.productImages?.length > 0 ? "http://localhost:5000/" + product.productImages[0].image : "/images/placeholder.jpg"}
                              className="card-img-top"
                              alt={product.title}
                            />
                          </div>
                          <div className="product-info">
                            <h5 className="product-title">{product.title}</h5>
                            
                            {product.category && (
                              <div className="product-category">
                                <i className="fa fa-tag"></i> {product.category.name}
                              </div>
                            )}
                            
                            <div className="product-meta">
                              {product.brand && (
                                <div className="meta-item">
                                  <i className="fa fa-industry"></i> {product.brand}
                                </div>
                              )}
                              {product.material && (
                                <div className="meta-item">
                                  <i className="fa fa-cube"></i> {product.material}
                                </div>
                              )}
                              {product.businessType && (
                                <div className="meta-item">
                                  <i className="fa fa-briefcase"></i> {product.businessType}
                                </div>
                              )}
                            </div>
                            
                            <div className="product-price">
                              <div className="price-value">Rs {product.price}</div>
                              <button 
                                className="inquiry-btn" 
                                onClick={() => setActiveTab("employees")}
                              >
                                Inquire
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "employees" && (
              <div className="enquire-tab">
                <div className="enquiry-form-container">
                  <h4><i className="fa fa-envelope mr-2"></i>Send Enquiry</h4>
                  
                  {formSubmitted ? (
                    <div className="alert alert-success">
                      <i className="fa fa-check-circle mr-2"></i>
                      Your enquiry has been sent successfully! We will contact you soon.
                    </div>
                  ) : (
                    <form className="enquiry-form" onSubmit={handleEnquiry}>
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" name="fullname" required />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter your email" name="email" required />
                      </div>
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" placeholder="Enter your company name" name="companyName" required />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" className="form-control" placeholder="Enter your phone number" name="phoneNumber" required />
                      </div>
                      <div className="form-group">
                        <label>User Type</label>
                        <select className="form-control" id="userType" name="userType" required>
                          <option value="">Select user type</option>
                          <option value="Seller">Seller</option>
                          <option value="Buyer">Buyer</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Requirements</label>
                        <textarea className="form-control" rows="4" placeholder="Enter your message or Requirements" name="requirement" required></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Send Enquiry</button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar with Contact Information */}
        <aside className="col-md-3 sidebar">
          <div className="card company-card fixed-card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">CONTACT COMPANY NOW</h4>
            </div>
            <div className="card-body">
              <h5 className="company-name mb-3">{companyDetails?.user?.company || "Company Name"}</h5>
              <div className="d-flex align-items-center mb-2">
                <span className="flag-icon mr-2">
                  <img src="/images/flag.png" width="30px" alt="flag" />
                </span>
                <span className="country-name">India</span>
              </div>
              <p className="contact-detail">
                <i className="fa fa-phone mr-2"></i>
                {/* <span>{companyDetails?.user?.phoneNumber || "Not Available"}</span> */}
                <span>Not Available</span>
              </p>
              <p className="contact-detail">
                <i className="fa fa-envelope mr-2"></i>
                {/* <span>{companyDetails?.user?.email || "Not Available"}</span> */}
                <span>Not Available</span>
              </p>
              <p className="contact-detail">
                <i className="fa fa-map-marker mr-2"></i>
                <span>Country: India</span>
              </p>
              <p className="contact-detail">
                <i className="fa fa-building mr-2"></i>
                <span>City: {companyDetails?.user?.city || "Not Available"}</span>
              </p>
              <p className="contact-detail mb-4">
                <i className="fa fa-road mr-2"></i>
                <span>Address: {companyDetails?.company?.streetAddress || "Not Available"}</span>
              </p>
              <button className="btn btn-primary btn-block" onClick={() => setActiveTab("employees")}>Contact now</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Catalogue;