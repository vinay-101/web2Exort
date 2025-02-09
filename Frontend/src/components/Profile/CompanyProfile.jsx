import React from "react";
import { useState } from "react";

const CompanyProfileForm = () => {
  const [activeTab, setActiveTab] = useState("generalDetails");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
      <div className="container col-md-10">
        <section className="row justify-content-center">
          <div className="col-lg-10">
            <article className="Navborder"></article>

            <div className="tabs-container text-center mb-4">
              <div className="nav nav-tabs justify-content-center my-3" style={{border:0}}>
                <button style={{color:"#555", fontWeight:"bold", border: "none", outline: "none", cursor: "default" }}
                    className={`nav-link d-flex align-items-center gap-2 ${
                        activeTab === "generalDetails" ? "active btn-primary text-white rounded-pill px-3" : ""
                    }`}
                    onClick={() => handleTabClick("generalDetails")}
                >
                  <i className="bi bi-box"></i>
                  General Details
                </button>
                <button style={{color:"#555", fontWeight:"bold", border: "none", outline: "none", cursor: "default"}}
                    className={`nav-link d-flex align-items-center gap-2 ${
                        activeTab === "companyInfo" ? "active btn-primary text-white rounded-pill px-3" : ""
                    }`}
                    onClick={() => handleTabClick("companyInfo")}
                >
                  <i className="bi bi-building"></i>
                  Company Info
                </button>
                <button style={{color:"#555", fontWeight:"bold", border: "none", outline: "none", cursor: "default"}}
                    className={`nav-link d-flex align-items-center gap-2 ${
                        activeTab === "certification" ? "active btn-primary text-white rounded-pill px-3" : ""
                    }`}
                    onClick={() => handleTabClick("certification")}
                >
                  <i className="bi bi-award"></i>
                  Certification & Licensing
                </button>
                <button style={{color:"#555", fontWeight:"bold", border: "none", outline: "none", cursor: "default"}}
                    className={`nav-link d-flex align-items-center gap-2 ${
                        activeTab === "officeLocation" ? "active btn-primary text-white rounded-pill px-3" : ""
                    }`}
                    onClick={() => handleTabClick("officeLocation")}
                >
                  <i className="bi bi-geo-alt"></i>
                  Office Location(s)
                </button>
              </div>
              <h2 className="mt-5">Company Profile</h2>
            </div>
            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "generalDetails" && (
                  <div>
                    {/* Basic Information Section */}
                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Basic Information</h3>
                        <div className="form-row">
                          {/* Company Name */}
                          <div className="form-group col-md-6">
                            <label>Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter company name"
                            />
                          </div>

                          {/* Company Description */}
                          <div className="form-group col-md-6">
                            <label>Company Description</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter here..."
                                rows="3"
                            ></textarea>
                          </div>

                          {/* Company Logo Upload */}
                          <div className="form-group col-md-6">
                            <label>Add Company Logo</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="companyLogo"
                              />
                              <label className="custom-file-label" htmlFor="companyLogo">
                                Choose file
                              </label>
                            </div>
                          </div>

                          {/* Profile Banner Upload */}
                          <div className="form-group col-md-6">
                            <label>Add Profile Banner</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="profileBanner"
                              />
                              <label className="custom-file-label" htmlFor="profileBanner">
                                Choose file
                              </label>
                            </div>
                          </div>

                          {/* Country */}
                          <div className="form-group col-md-6">
                            <label>Country</label>
                            <select className="form-control">
                              <option>India</option>
                            </select>
                          </div>

                          {/* State */}
                          <div className="form-group col-md-3">
                            <label>State</label>
                            <select className="form-control">
                              <option>Bihar</option>
                            </select>
                          </div>

                          {/* City */}
                          <div className="form-group col-md-3">
                            <label>City</label>
                            <select className="form-control">
                              <option>Buxar</option>
                            </select>
                          </div>

                          {/* Zip / Postal Code */}
                          <div className="form-group col-md-6">
                            <label>Zip / Postal Code</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>

                          {/* Street Address */}
                          <div className="form-group col-md-6">
                            <label>Street Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>

                          {/* Primary Business Type */}
                          <div className="form-group col-md-6">
                            <label>Primary Business Type</label>
                            <select className="form-control">
                              <option>Select...</option>
                            </select>
                          </div>

                          {/* Business Categories */}
                          <div className="form-group col-md-6">
                            <label>Business Categories</label>
                            <select className="form-control">
                              <option>Select...</option>
                            </select>
                          </div>

                          {/* Working Days */}
                          <div className="form-group col-md-6">
                            <label>Working Days</label>
                            <select className="form-control">
                              <option>Select...</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Contact Information</h3>
                        <div className="form-row">
                          {/* Contact Person */}
                          <div className="form-group col-md-6">
                            <label>Contact Person</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                            />
                          </div>

                          {/* Mobile Number */}
                          <div className="form-group col-md-6">
                            <label>Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="+91 98765 43210"
                            />
                          </div>

                          {/* Alternate Mobile Number */}
                          <div className="form-group col-md-6">
                            <label>Alternate Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="+1 (555) 123-4567"
                            />
                          </div>

                          {/* Primary Email Address */}
                          <div className="form-group col-md-6">
                            <label>Primary Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@gmail.com"
                            />
                          </div>

                          {/* Alternate Email Address */}
                          <div className="form-group col-md-6">
                            <label>Alternate Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>

                          {/* Landline Number */}
                          <div className="form-group col-md-6">
                            <label>Landline Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>

                          {/* Fax Number */}
                          <div className="form-group col-md-6">
                            <label>Fax Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Save and Cancel Buttons */}
                    <div className="form-actions text-right">
                      <button type="submit" className="btn btn-primary mr-2">
                        Save
                      </button>
                      <button type="submit" className="btn btn-secondary">
                        Cancel
                      </button>
                    </div>
                  </div>

              )}

              {activeTab === "companyInfo" && (
                  <div>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Basic Information</h3>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Year of establishment *</label>
                            <select className="form-control">
                              <option>Please select year</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Ownership type *</label>
                            <select className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Major market *</label>
                            <select className="form-control">
                              <option>Select...</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Terms of delivery *</label>
                            <select className="form-control">
                              <option>DAP - Delivery at place</option>
                              <option>DDP - Delivered Duty Paid</option>
                              <option>FAS - Free Alongside Ship</option>
                              <option>FOB - Free On Board</option>
                              <option>CIF - Cost, Insurance, Freight</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Area</label>
                            <select className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>No. of employees</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>No. of product line</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Output capacity</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Average lead time</label>
                            <select className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Trade Information</h3>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>GST number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>PAN number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>TAN number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Annual revenue *</label>
                            <select className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Export percentage</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Nearest port</label>
                            <select className="form-control">
                              <option>Please select</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions text-right">
                      <button type="submit" className="btn btn-primary mr-2">
                        Save
                      </button>
                      <button type="submit" className="btn btn-secondary">
                        Cancel
                      </button>
                    </div>
                  </div>
              )}

              {activeTab === "certification" && (
                  <div>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Certification</h3>
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label>Recommended format: </label>
                            <label>Size: Less than 5MB</label>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Upload Certificate</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="companyLogo"
                              />
                              <label className="custom-file-label" htmlFor="companyLogo">
                                Choose file
                              </label>
                            </div>
                          </div>
                          <div className="form-group col-md-12">
                            <label>Upload Documents (PDF | Less than 5MB)</label>
                          </div>

                          <div className="form-group col-md-6">
                            <label>Company Registration Certificate</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="companyLogo"
                              />
                              <label className="custom-file-label" htmlFor="companyLogo">
                                Choose file
                              </label>
                            </div>
                          </div>

                          <div className="form-group col-md-6">
                            <label>Tax Certificate</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="companyLogo"
                              />
                              <label className="custom-file-label" htmlFor="companyLogo">
                                Choose file
                              </label>
                            </div>
                          </div>

                          <div className="form-group col-md-6">
                            <label>Utility Bill</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="companyLogo"
                              />
                              <label className="custom-file-label" htmlFor="companyLogo">
                                Choose file
                              </label>
                            </div>
                          </div>

                          <div className="form-group col-md-6">
                            <label>Passport/Driving License</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="companyLogo"
                              />
                              <label className="custom-file-label" htmlFor="companyLogo">
                                Choose file
                              </label>
                            </div>
                          </div>

                          <div className="form-group col-md-6">
                            <label>Business License</label>
                            <div className="custom-file">
                              <input
                                  type="file"
                                  className="custom-file-input"
                                  id="companyLogo"
                              />
                              <label className="custom-file-label" htmlFor="companyLogo">
                                Choose file
                              </label>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Registration Information</h3>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Location of Registration *</label>
                            <select className="form-control">
                              <option>Select country</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Registration Date *</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Please enter registration date"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Registration Number *</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>FAX Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions text-right">
                      <button type="submit" className="btn btn-primary mr-2">
                        Save
                      </button>
                      <button type="submit" className="btn btn-secondary">
                        Cancel
                      </button>
                    </div>
                  </div>
              )}

              {activeTab === "officeLocation" && (
                  <div>
                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Head Office</h3>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Office location *</label>
                            <select className="form-control">
                              <option>Select country</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>State</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="State (optional)"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Zipcode *</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Street Address *</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-4">
                      <div className="card-body">
                        <h3 className="mb-4">Branches</h3>
                        <p>Add your branch details (If any)</p>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Office location *</label>
                            <select className="form-control">
                              <option>Select country</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>State</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="State (optional)"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Zipcode *</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter here..."
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Street Address *</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions text-right">
                      <button type="submit" className="btn btn-primary mr-2">
                        Save
                      </button>
                      <button type="submit" className="btn btn-secondary">
                        Cancel
                      </button>
                    </div>
                  </div>
              )}
            </div>
          </div>
        </section>
      </div>
  );
};

export default CompanyProfileForm;