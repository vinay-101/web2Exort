import React from "react";
import { useState } from "react";

const CompanyProfileForm = () => {

  const [activeTab, setActiveTab] = useState("generalDetails");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>

      <section className="col-lg-10 company-profile-form-section">
        <article className="Navborder">

        </article>
        
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "generalDetails" ? "active" : ""}`}
              onClick={() => handleTabClick("generalDetails")}
            >
              General details
            </button>
            <button
              className={`tab ${activeTab === "companyInfo" ? "active" : ""}`}
              onClick={() => handleTabClick("companyInfo")}
            >
              Company info
            </button>
            <button
              className={`tab ${
                activeTab === "certification" ? "active" : ""
              }`}
              onClick={() => handleTabClick("certification")}
            >
              Certification & Licensing
            </button>
            <button
              className={`tab ${
                activeTab === "officeLocation" ? "active" : ""
              }`}
              onClick={() => handleTabClick("officeLocation")}
            >
              Office location(s)
            </button>
          </div>
        <h2>Company Profile</h2>


          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "generalDetails" &&
              <div>
                  
                  <div className=" company-profile-form">

                    {/* Basic Information Section */}
                    <section className="form-section">
                      <h3>Basic Information</h3>
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" placeholder="Enter company name" />
                      </div>
                      <div className="form-group">
                        <label>Company Description</label>
                        <textarea placeholder="Enter here..."></textarea>
                      </div>
                      <div className="form-group">
                        <label>Upload Images</label>
                        <div className="upload-buttons">
                          <button className="logo-banner-button" type="button"><input type="file" />Add company logo</button>
                          <button className="logo-banner-button" type="button"><input type="file" />Add profile banner</button>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Country</label>
                        <select>
                          <option>India</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>State</label>
                        <select>
                          <option>Bihar</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>City</label>
                        <select>
                          <option>Buxar</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Zip / Postal Code</label>
                        <input type="text" placeholder="Enter here..." />
                      </div>
                      <div className="form-group">
                        <label>Street Address</label>
                        <input type="text" placeholder="Enter here..." />
                      </div>
                      <div className="form-group">
                        <label>Primary Business Type</label>
                        <select>
                          <option>Select...</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Business Categories</label>
                        <select>
                          <option>Select...</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Working Days</label>
                        <select>
                          <option>Select...</option>
                        </select>
                      </div>
                    </section>
                  </div>
                  <div className=" company-profile-form">

                    {/* Contact Information Section */}
                    <section className="form-section">
                      <h3>Contact Information</h3>
                      <div className="form-group">
                        <label>Contact Person</label>
                        <input type="text" placeholder="Enter name" />
                      </div>
                      <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="text" placeholder="+91 98765 43210" />
                      </div>
                      <div className="form-group">
                        <label>Alternate Mobile Number</label>
                        <input type="text" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div className="form-group">
                        <label>Primary Email Address</label>
                        <input type="email" placeholder="example@gmail.com" />
                      </div>
                      <div className="form-group">
                        <label>Alternate Email Address</label>
                        <input type="email" placeholder="Enter here..." />
                      </div>
                      <div className="form-group">
                        <label>Landline Number</label>
                        <input type="text" placeholder="Enter here..." />
                      </div>
                      <div className="form-group">
                        <label>Fax Number</label>
                        <input type="text" placeholder="Enter here..." />
                      </div>
                    </section>

                    {/* Save Button */}
                    <div className="form-actions">
                          <button type="submit" className="save-button">Save</button>
                          <button type="submit" className="cancel-button">Cancel</button>
                      </div> 
                  </div>
      

            </div>}
            {activeTab === "companyInfo" &&
                  <div>
                    <form className="company-profile-form">
                      {/* Basic Information Section */}
                      <section className="form-section chat-custom-form-section">
                        <h3 className="mb-4">Basic Information</h3>
                        <div className="chat-custom-grid">
                          <div className="chat-custom-grid-row">
                            <label htmlFor="year-of-establishment">Year of establishment *</label>
                            <select id="year-of-establishment" className="form-control">
                              <option>Please select year</option>
                            </select>
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="ownership-type">Ownership type *</label>
                            <select id="ownership-type" className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="major-market">Major market *</label>
                            <select id="major-market" className="form-control">
                              <option>Select...</option>
                            </select>
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="terms-of-delivery">Terms of delivery *</label>
                            <select id="terms-of-delivery" className="form-control">
                              <option>DAP - Delivery at place</option>
                              <option>DDP - Delivered Duty Paid</option>
                              <option>FAS - Free Alongside Ship</option>
                              <option>FOB - Free On Board</option>
                              <option>CIF - Cost, Insurance, Freight</option>
                            </select>
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="area">Area</label>
                            <select id="area" className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="employees">No. of employees</label>
                            <input
                              type="text"
                              id="employees"
                              className="form-control"
                              placeholder="Enter here..."
                            />
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="product-line">No. of product line</label>
                            <input
                              type="text"
                              id="product-line"
                              className="form-control"
                              placeholder="Enter here..."
                            />
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="output-capacity">Output capacity</label>
                            <input
                              type="text"
                              id="output-capacity"
                              className="form-control"
                              placeholder="Enter here..."
                            />
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="lead-time">Average lead time</label>
                            <select id="lead-time" className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                        </div>
                      </section>

                    {/* Trade Information Section */}
                    </form>
                    <form className="company-profile-form">
                      <section className="form-section chat-custom-form-section mt-4">
                        <h3 className="mb-4">Trade Information</h3>
                        <div className="chat-custom-grid">
                          <div className="chat-custom-grid-row">
                            <label htmlFor="gst-number">GST number</label>
                            <input
                              type="text"
                              id="gst-number"
                              className="form-control"
                              placeholder="Enter here..."
                            />
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="pan-number">PAN number</label>
                            <input
                              type="text"
                              id="pan-number"
                              className="form-control"
                              placeholder="Enter here..."
                            />
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="tan-number">TAN number</label>
                            <input
                              type="text"
                              id="tan-number"
                              className="form-control"
                              placeholder="Enter here..."
                            />
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="annual-revenue">Annual revenue *</label>
                            <select id="annual-revenue" className="form-control">
                              <option>Select</option>
                            </select>
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="export-percentage">Export percentage</label>
                            <input
                              type="text"
                              id="export-percentage"
                              className="form-control"
                              placeholder="Enter here..."
                            />
                          </div>
                          <div className="chat-custom-grid-row">
                            <label htmlFor="nearest-port">Nearest port</label>
                            <select id="nearest-port" className="form-control">
                              <option>Please select</option>
                            </select>
                          </div>
                        </div>
                      </section>

                      {/* Save Button */}
                        <div className="form-actions">
                          <button type="submit" className="save-button">Save</button>
                          <button type="submit" className="cancel-button">Cancel</button>
                      </div>  
                    </form>
                  </div>
              }
            {activeTab === "certification" && (
              
              <div className="">
                <form className=" company-profile-form certification-form">
                  {/* Certification Section */}
                  <section className="form-section chat-custom-form-section">
                    <h3 className="mb-4">Certification</h3>
                    <div className="chat-custom-grid">
                      <div className="chat-custom-grid-row">
                        <label className="mb-0">Recommended format: PDF | Size: Less than 5MB</label>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label htmlFor="certification-name">Name</label>
                        <input
                          type="text"
                          id="certification-name"
                          className="form-control"
                          placeholder="Enter here..."
                        />
                      </div>
                      <div className="chat-custom-grid-row">
                        <label htmlFor="upload-certificate">Upload Certificate</label>
                        <div className="file-upload">
                          <button className="btn btn-secondary certificate-upload-buton1" type="button">
                          <input type="file" id="upload-certificate"  className="certificate-upload-input"/>
                            
                          </button>
                        </div>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label>Upload Documents (PDF | Less than 5MB)</label>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label>Company Registration Certificate</label>
                        <div className="file-upload">
                          <button className="btn btn-secondary certificate-upload-buton" type="button">
                          <input type="file" className="certificate-upload-input" />
                             
                          </button>
                        </div>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label>Tax Certificate</label>
                        <div className="file-upload">
                          <button className="btn btn-secondary certificate-upload-buton" type="button">
                          <input type="file" className="certificate-upload-input" />
                             
                          </button>
                        </div>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label>Utility Bill</label>
                        <div className="file-upload">
                          <button className="btn btn-secondary certificate-upload-buton" type="button">
                          <input type="file" className="certificate-upload-input" />
                             
                          </button>
                        </div>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label>Passport/Driving License</label>
                        <div className="file-upload">
                          <button className="btn btn-secondary certificate-upload-buton" type="button">
                          <input type="file" className="certificate-upload-input" />
                             
                          </button>
                        </div>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label>Business License</label>
                        <div className="file-upload">
                          <button className="btn btn-secondary  certificate-upload-buton" type="button">
                          <input type="file" className="certificate-upload-input"  />
                             
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
                  {/* Registration Information Section */}
                <form className=" company-profile-form">
                  <section className="form-section chat-custom-form-section mt-4">
                    <h3 className="mb-4">Registration Information</h3>
                    <div className="chat-custom-grid">
                      <div className="chat-custom-grid-row">
                        <label htmlFor="location-of-registration">
                          Location of Registration *
                        </label>
                        <select
                          id="location-of-registration"
                          className="form-control"
                        >
                          <option>Select country</option>
                        </select>
                      </div>
                      <div className="chat-custom-grid-row">
                        <label htmlFor="registration-date">Registration Date *</label>
                        <input
                          type="date"
                          id="registration-date"
                          className="form-control"
                          placeholder="Please enter registration date"
                        />
                      </div>
                      <div className="chat-custom-grid-row">
                        <label htmlFor="registration-number">Registration Number *</label>
                        <input
                          type="text"
                          id="registration-number"
                          className="form-control"
                          placeholder="Enter here..."
                        />
                      </div>
                      <div className="chat-custom-grid-row">
                        <label htmlFor="fax-number">FAX Number</label>
                        <input
                          type="text"
                          id="fax-number"
                          className="form-control"
                          placeholder="Enter here..."
                        />
                      </div>
                    </div>
                  </section>

                  {/* Save Button */}
                  <div className="form-actions">
                          <button type="submit" className="save-button">Save</button>
                          <button type="submit" className="cancel-button">Cancel</button>
                  </div> 
                </form>
              </div>

              
            )}
            {activeTab === "officeLocation" && (
              <div>
                
                  <form className="company-profile-form office-form">
                    {/* Head Office Section */}
                    <section className="form-section chat-custom-form-section">
                      <h3 className="mb-4">Head Office</h3>
                      <div className="chat-custom-grid">
                        <div className="chat-custom-grid-row">
                          <label htmlFor="office-location">Office location *</label>
                          <select id="office-location" className="form-control">
                            <option>Select country</option>
                          </select>
                        </div>
                        <div className="chat-custom-grid-row">
                          <label htmlFor="state">State</label>
                          <input
                            type="text"
                            id="state"
                            className="form-control"
                            placeholder="State (optional)"
                          />
                        </div>
                        <div className="chat-custom-grid-row">
                          <label htmlFor="zipcode">Zipcode *</label>
                          <input
                            type="text"
                            id="zipcode"
                            className="form-control"
                            placeholder="Enter here..."
                          />
                        </div>
                        <div className="chat-custom-grid-row">
                          <label htmlFor="street-address">Street Address *</label>
                          <textarea
                            id="street-address"
                            className="form-control"
                            placeholder="Enter here..."
                          ></textarea>
                        </div>
                      </div>
                    </section>
                  </form>
                  <form className=" company-profile-form">
                    {/* Branches Section */}
                    <section className="form-section chat-custom-form-section mt-4">
                      <h3 className="mb-4">Branches</h3>
                      <p>Add your branch details (If any)</p>
                      <div className="chat-custom-grid">
                        <div className="chat-custom-grid-row">
                          <label htmlFor="branch-office-location">Office location *</label>
                          <select id="branch-office-location" className="form-control">
                            <option>Select country</option>
                          </select>
                        </div>
                        <div className="chat-custom-grid-row">
                          <label htmlFor="branch-state">State</label>
                          <input
                            type="text"
                            id="branch-state"
                            className="form-control"
                            placeholder="State (optional)"
                          />
                        </div>
                        <div className="chat-custom-grid-row">
                          <label htmlFor="branch-zipcode">Zipcode *</label>
                          <input
                            type="text"
                            id="branch-zipcode"
                            className="form-control"
                            placeholder="Enter here..."
                          />
                        </div>
                        <div className="chat-custom-grid-row">
                          <label htmlFor="branch-street-address">Street Address *</label>
                          <textarea
                            id="branch-street-address"
                            className="form-control"
                            placeholder="Enter here..."
                          ></textarea>
                        </div>
                      </div>
                    </section>

                    {/* Save Button */}
                    <div className="form-actions">
                          <button type="submit" className="save-button">Save</button>
                          <button type="submit" className="cancel-button">Cancel</button>
                      </div>
                  </form>
                
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProfileForm;
