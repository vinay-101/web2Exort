import React from "react";
import { useState } from "react";
import handleApiResponse from "../../helpers/responseHandler.js";
import userService from "../../Services/userServices.js";
import toast from "react-hot-toast";

const CompanyProfileForm = () => {
  const [activeTab, setActiveTab] = useState("generalDetails");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // handle General details
  const handleGeneralDetailsSubmit = handleApiResponse(async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append form data to the FormData object
    formData.append("companyName", e.target.companyName.value);
    formData.append("companyDescription", e.target.companyDescription.value);
    formData.append("companyLogo", e.target.companyLogo.files[0]);
    formData.append("profileBanner", e.target.profileBanner.files[0]);
    formData.append("country", e.target.country.value);
    formData.append("state", e.target.state.value);
    formData.append("city", e.target.city.value);
    formData.append("zipCode", e.target.zipCode.value);
    formData.append("streetAddress", e.target.streetAddress.value);
    formData.append("primaryBusinessType", e.target.primaryBusinessType.value);
    formData.append("businessCategories", e.target.businessCategories.value);
    formData.append("workingDays", e.target.workingDays.value);
    formData.append("contactPerson", e.target.contactPerson.value);
    formData.append("mobileNumber", e.target.mobileNumber.value);
    formData.append(
      "alternateMobileNumber",
      e.target.alternateMobileNumber.value
    );
    formData.append("primaryEmail", e.target.primaryEmail.value);
    formData.append("alternateEmail", e.target.alternateEmail.value);
    formData.append("landlineNumber", e.target.landlineNumber.value);
    formData.append("faxNumber", e.target.faxNumber.value);

    // Call the API using the userService
    return await userService.createGeneralDetail(formData);
  });

  // Handle comp info
  const handleCompanyInfo = handleApiResponse(async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    return await userService.createCompanyInfo(formData);
  });

  // Handle certification
  const handleCertificateFileChange = handleApiResponse(async (e) => {
    e.preventDefault();

    const form = e.target.form;
    const nameInput = form.querySelector('input[name="name"]');

    if (!nameInput?.value) {
      throw new Error("Please enter certificate name");
    }

    let formData = new FormData();
    formData.append("name", nameInput.value);
    formData.append("certificateFile", e.target.files[0]);

    return await userService.createCertificate(formData);
  });

  // Handle handleRegistrationSubmit
  const handleRegistrationSubmit = handleApiResponse(async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    return await userService.createCompanyRegistration(formData);
  });

  // Handle Document submission
  const handleDocumentFileChange = (documentType) =>
    handleApiResponse(
      async (e) => {
        e.preventDefault();

        // Create FormData object
        const formData = new FormData();

        // Append the file and document type to FormData
        const file = e.target.files[0]; // Get the selected file
        formData.append("documentFile", file);
        formData.append("documentType", documentType);

        // Call the API using userService.createCompanyDocument
        return await userService.createDocument(formData);
      },
      (response) => {
        // Success callback
        console.log(
          `${documentType} document uploaded successfully:`,
          response.data
        );
      },
      (error) => {
        // Error callback
        console.error(`${documentType} document upload failed:`, error);
      }
    );


    // handle office location
    const handleHeadOfficeSubmit = handleApiResponse(
      async (e) => {
        e.preventDefault();
    
        // Create FormData object from the form
        const formData = new FormData(e.target);
    
        // Prepare the data for the API
        const data = {
          locationType: "Head Office", // Specify the location type
          country: formData.get("officeLocation"),
          state: formData.get("officeState"),
          zipcode: formData.get("officeZipcode"),
          streetAddress: formData.get("officeAddress"),
        };
    
        // Call the API
        return await userService.createOfficeLocation(data);
      },
      (response) => {
        // Success callback
        console.log("Head Office details saved successfully:", response);
        toast.success("Head Office details saved successfully!");
      },
      (error) => {
        // Error callback
        console.error("Head Office submission failed:", error);
        toast.error(error.message || "Head Office submission failed!");
      }
    );


    const handleBranchSubmit = handleApiResponse(
      async (e) => {
        e.preventDefault();
    
        // Create FormData object from the form
        const formData = new FormData(e.target);
    
        // Prepare the data for the API
        const data = {
          locationType: "Branch", // Specify the location type
          country: formData.get("branchLocation"),
          state: formData.get("branchState"),
          zipcode: formData.get("branchZipcode"),
          streetAddress: formData.get("branchAddress"),
        };
    
        // Call the API
        return await userService.createOfficeLocation(data);
      },
      (response) => {
        // Success callback
        console.log("Branch details saved successfully:", response);
        toast.success("Branch details saved successfully!");
      },
      (error) => {
        // Error callback
        console.error("Branch submission failed:", error);
        toast.error(error.message || "Branch submission failed!");
      }
    );

  return (
    <div className="container col-md-10">
      <section className="row justify-content-center">
        <div className="col-lg-10">
          <article className="Navborder"></article>

          <div className="tabs-container text-center mb-4">
            <div
              className="nav nav-tabs justify-content-center my-3"
              style={{ border: 0 }}
            >
              <button
                style={{
                  color: "#555",
                  fontWeight: "bold",
                  border: "none",
                  outline: "none",
                  cursor: "default",
                }}
                className={`nav-link d-flex align-items-center gap-2 ${
                  activeTab === "generalDetails"
                    ? "active btn-primary text-white rounded-pill px-3"
                    : ""
                }`}
                onClick={() => handleTabClick("generalDetails")}
              >
                <i className="bi bi-box"></i>
                General Details
              </button>
              <button
                style={{
                  color: "#555",
                  fontWeight: "bold",
                  border: "none",
                  outline: "none",
                  cursor: "default",
                }}
                className={`nav-link d-flex align-items-center gap-2 ${
                  activeTab === "companyInfo"
                    ? "active btn-primary text-white rounded-pill px-3"
                    : ""
                }`}
                onClick={() => handleTabClick("companyInfo")}
              >
                <i className="bi bi-building"></i>
                Company Info
              </button>
              <button
                style={{
                  color: "#555",
                  fontWeight: "bold",
                  border: "none",
                  outline: "none",
                  cursor: "default",
                }}
                className={`nav-link d-flex align-items-center gap-2 ${
                  activeTab === "certification"
                    ? "active btn-primary text-white rounded-pill px-3"
                    : ""
                }`}
                onClick={() => handleTabClick("certification")}
              >
                <i className="bi bi-award"></i>
                Certification & Licensing
              </button>
              <button
                style={{
                  color: "#555",
                  fontWeight: "bold",
                  border: "none",
                  outline: "none",
                  cursor: "default",
                }}
                className={`nav-link d-flex align-items-center gap-2 ${
                  activeTab === "officeLocation"
                    ? "active btn-primary text-white rounded-pill px-3"
                    : ""
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
              <form onSubmit={handleGeneralDetailsSubmit}>
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
                          name="companyName"
                        />
                      </div>

                      {/* Company Description */}
                      <div className="form-group col-md-6">
                        <label>Company Description</label>
                        <textarea
                          className="form-control"
                          placeholder="Enter here..."
                          rows="3"
                          name="companyDescription"
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
                            name="companyLogo"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="companyLogo"
                          >
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
                            name="profileBanner"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="profileBanner"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>

                      {/* Country */}
                      <div className="form-group col-md-6">
                        <label>Country</label>
                        <select className="form-control" name="country">
                          <option value="1">India</option>
                        </select>
                      </div>

                      {/* State */}
                      <div className="form-group col-md-3">
                        <label>State</label>
                        <select className="form-control" name="state">
                          <option value="3">Bihar</option>
                        </select>
                      </div>

                      {/* City */}
                      <div className="form-group col-md-3">
                        <label>City</label>
                        <select className="form-control" name="city">
                          <option value="2">Buxar</option>
                        </select>
                      </div>

                      {/* Zip / Postal Code */}
                      <div className="form-group col-md-6">
                        <label>Zip / Postal Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="zipCode"
                        />
                      </div>

                      {/* Street Address */}
                      <div className="form-group col-md-6">
                        <label>Street Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="streetAddress"
                        />
                      </div>

                      {/* Primary Business Type */}
                      <div className="form-group col-md-6">
                        <label>Primary Business Type</label>
                        <select
                          className="form-control"
                          name="primaryBusinessType"
                        >
                          <option>Select...</option>
                        </select>
                      </div>

                      {/* Business Categories */}
                      <div className="form-group col-md-6">
                        <label>Business Categories</label>
                        <select
                          className="form-control"
                          name="businessCategories"
                        >
                          <option>Select...</option>
                        </select>
                      </div>

                      {/* Working Days */}
                      <div className="form-group col-md-6">
                        <label>Working Days</label>
                        <select className="form-control" name="workingDays">
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
                          name="contactPerson"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div className="form-group col-md-6">
                        <label>Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+91 98765 43210"
                          name="mobileNumber"
                        />
                      </div>

                      {/* Alternate Mobile Number */}
                      <div className="form-group col-md-6">
                        <label>Alternate Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+1 (555) 123-4567"
                          name="alternateMobileNumber"
                        />
                      </div>

                      {/* Primary Email Address */}
                      <div className="form-group col-md-6">
                        <label>Primary Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@gmail.com"
                          name="primaryEmail"
                        />
                      </div>

                      {/* Alternate Email Address */}
                      <div className="form-group col-md-6">
                        <label>Alternate Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter here..."
                          name="alternateEmail"
                        />
                      </div>

                      {/* Landline Number */}
                      <div className="form-group col-md-6">
                        <label>Landline Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="landlineNumber"
                        />
                      </div>

                      {/* Fax Number */}
                      <div className="form-group col-md-6">
                        <label>Fax Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="faxNumber"
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
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {activeTab === "companyInfo" && (
              <form onSubmit={handleCompanyInfo}>
                {/* Basic Information Section */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mb-4">Basic Information</h3>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Year of establishment *</label>
                        <input
                          className="form-control"
                          type="date"
                          name="yearOfEstablishment"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Ownership type *</label>
                        <select className="form-control" name="ownershipType">
                          <option>Select</option>
                          {/* Add options dynamically or statically */}
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Major market *</label>
                        <select className="form-control" name="majorMarket">
                          <option>Select...</option>
                          {/* Add options dynamically or statically */}
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Terms of delivery *</label>
                        <select className="form-control" name="termsOfDelivery">
                          <option>DAP - Delivery at place</option>
                          <option>DDP - Delivered Duty Paid</option>
                          <option>FAS - Free Alongside Ship</option>
                          <option>FOB - Free On Board</option>
                          <option>CIF - Cost, Insurance, Freight</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Area</label>
                        <select className="form-control" name="area">
                          <option>Select</option>
                          {/* Add options dynamically or statically */}
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>No. of employees</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="numberOfEmployees"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>No. of product line</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="numberOfProductLines"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Output capacity</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="outputCapacity"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Average lead time</label>
                        <select className="form-control" name="averageLeadTime">
                          <option>Select</option>
                          {/* Add options dynamically or statically */}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trade Information Section */}
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
                          name="gstNumber"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>PAN number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="panNumber"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>TAN number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="tanNumber"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Annual revenue *</label>
                        <select className="form-control" name="annualRevenue">
                          <option>Select</option>
                          {/* Add options dynamically or statically */}
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Export percentage</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="exportPercentage"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Nearest port</label>
                        <select className="form-control" name="nearestPort">
                          <option>Please select</option>
                          {/* Add options dynamically or statically */}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Save and Cancel Buttons */}
                <div className="form-actions text-right">
                  <button type="submit" className="btn btn-primary mr-2">
                    Save
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {activeTab === "certification" && (
             <div>
             {/* Certification Section */}
             <div className="card mb-4">
               <div className="card-body">
                 <h3 className="mb-4">Certification</h3>
                 <div className="form-row">
                   <div className="form-group col-md-12">
                     <label>Recommended format: </label>
                     <label>Size: Less than 5MB</label>
                   </div>
                 <form className="form-row col-md-12">
                   <div className="form-group col-md-6">
                     <label>Name</label>
                     <input
                       type="text"
                       className="form-control"
                       placeholder="Enter here..."
                       name="name"
                     />
                   </div>
                   <div className="form-group col-md-6">
                     <label>Upload Certificate</label>
                     <div className="custom-file">
                       <input
                         type="file"
                         className="custom-file-input"
                         id="companyLogo"
                         name="certificateFile"
                         onChange={handleCertificateFileChange}
                       />
                       <label className="custom-file-label" htmlFor="companyLogo">
                         Choose file
                       </label>
                     </div>
                   </div>
                   </form>
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
                         onChange={handleDocumentFileChange("Registration")} // Pass document type
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
                         onChange={handleDocumentFileChange("Tax")}
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
                         onChange={handleDocumentFileChange("Utility")}
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
                         onChange={handleDocumentFileChange("Identification")}
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
                         onChange={handleDocumentFileChange("Business")}
                       />
                       <label className="custom-file-label" htmlFor="companyLogo">
                         Choose file
                       </label>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           
             {/* Registration Information Section */}
             <div className="card mb-4">
               <div className="card-body">
                 <h3 className="mb-4">Registration Information</h3>
                 <form onSubmit={handleRegistrationSubmit} className="form-row">
                   <div className="form-group col-md-6">
                     <label>Location of Registration *</label>
                     <select className="form-control" name="registrationLocation">
                       <option value="">Select country</option>
                       <option value="1">USA</option>
                       <option value="2">Canada</option>
                       <option value="3">UK</option>
                       {/* Add more options as needed */}
                     </select>
                   </div>
                   <div className="form-group col-md-6">
                     <label>Registration Date *</label>
                     <input
                       type="date"
                       className="form-control"
                       name="registrationDate"
                       placeholder="Please enter registration date"
                     />
                   </div>
                   <div className="form-group col-md-6">
                     <label>Registration Number *</label>
                     <input
                       type="text"
                       className="form-control"
                       name="registrationNumber"
                       placeholder="Enter here..."
                     />
                   </div>
                   <div className="form-group col-md-6">
                     <label>FAX Number</label>
                     <input
                       type="text"
                       className="form-control"
                       name="faxNumber"
                       placeholder="Enter here..."
                     />
                   </div>
                   {/* Form Actions - Buttons */}
                   <div className="form-actions d-flex justify-content-end w-100 mt-3">
                     <button type="submit" className="btn btn-primary mr-2">
                       Save
                     </button>
                     <button type="button" className="btn btn-secondary">
                       Cancel
                     </button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
            )}

            {activeTab === "officeLocation" && (
           <div>
           {/* Head Office Section */}
           <div className="card mb-4">
             <div className="card-body">
               <h3 className="mb-4">Head Office</h3>
               <form onSubmit={handleHeadOfficeSubmit} className="form-row">
                 <div className="form-group col-md-6">
                   <label>Office location *</label>
                   <select className="form-control" name="officeLocation" required>
                     <option value="">Select country</option>
                     <option value="1">USA</option>
                     <option value="2">Canada</option>
                     <option value="3">UK</option>
                   </select>
                 </div>
                 <div className="form-group col-md-6">
                   <label>State *</label>
                   <input
                     type="text"
                     className="form-control"
                     placeholder="State (optional)"
                     required
                     name="officeState"
                   />
                 </div>
                 <div className="form-group col-md-6">
                   <label>Zipcode *</label>
                   <input
                     type="text"
                     className="form-control"
                     placeholder="Enter here..."
                     name="officeZipcode"
                     required
                   />
                 </div>
                 <div className="form-group col-md-6">
                   <label>Street Address *</label>
                   <textarea
                     className="form-control"
                     placeholder="Enter here..."
                     name="officeAddress"
                     required
                   ></textarea>
                 </div>
                 <div className="form-actions text-right">
                   <button type="submit" className="btn btn-primary mr-2">
                     Save
                   </button>
                   <button type="button" className="btn btn-secondary">
                     Cancel
                   </button>
                 </div>
               </form>
             </div>
           </div>
         
           {/* Branches Section */}
           <div className="card mb-4">
             <div className="card-body">
               <h3 className="mb-4">Branches</h3>
               <p>Add your branch details (If any)</p>
               <form onSubmit={handleBranchSubmit} className="form-row">
                 <div className="form-group col-md-6">
                   <label>Office location *</label>
                   <select className="form-control" name="branchLocation" required>
                     <option value="">Select country</option>
                     <option value="1">USA</option>
                     <option value="2">Canada</option>
                     <option value="3">UK</option>
                   </select>
                 </div>
                 <div className="form-group col-md-6">
                   <label>State *</label>
                   <input
                     type="text"
                     className="form-control"
                     placeholder="State"
                     required
                     name="branchState"
                   />
                 </div>
                 <div className="form-group col-md-6">
                   <label>Zipcode *</label>
                   <input
                     type="text"
                     className="form-control"
                     placeholder="Enter here..."
                     name="branchZipcode"
                     required
                   />
                 </div>
                 <div className="form-group col-md-6">
                   <label>Street Address *</label>
                   <textarea
                     className="form-control"
                     placeholder="Enter here..."
                     name="branchAddress"
                     required
                   ></textarea>
                 </div>
                 <div className="form-actions text-right">
                   <button type="submit" className="btn btn-primary mr-2">
                     Save
                   </button>
                   <button type="button" className="btn btn-secondary">
                     Cancel
                   </button>
                 </div>
               </form>
             </div>
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
