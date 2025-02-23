import React, { useEffect } from "react";
import { useState } from "react";
import handleApiResponse from "../../helpers/responseHandler.js";
import userService from "../../Services/userServices.js";
import Select from "react-select";
import {
  businessCategories,
  businessTypesOptions,
  majorMarket,
  workingDaysOptions,
} from "../../helpers/data.js";
import "../../assets/profile/dropdown.css";
const CompanyProfileForm = () => {
  const [activeTab, setActiveTab] = useState("generalDetails");
  const [companyData, setCompanyData] = useState(null);

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
        locationType: "Head", // Specify the location type
        country: formData.get("officeLocation"),
        state: formData.get("officeState"),
        zipcode: formData.get("officeZipcode"),
        streetAddress: formData.get("officeAddress"),
      };

      // Reset the form
      e.target.reset();
      // Call the API
      return await userService.createOfficeLocation(data);
    },
    (response) => {
      // Success callback
      console.log("Head Office details saved successfully:", response);
    },
    (error) => {
      // Error callback
      console.error("Head Office submission failed:", error);
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
      e.target.reset();
      // Call the API
      return await userService.createOfficeLocation(data);
    },
    (response) => {
      // Success callback
      console.log("Branch details saved successfully:", response);
    },
    (error) => {
      // Error callback
      console.error("Branch submission failed:", error);
    }
  );

  // populate data for tab change
  useEffect(() => {
    async function showCompanyData() {
      const response = await userService.showCompanyData(activeTab);
      if (response.data.success === true) {
        setCompanyData(response.data.data);
      }
    }
    showCompanyData();
  }, [activeTab]);

  // Multi select options
  // 1. Business type
  const [selectedBusinessType, setSelectedBusinessType] = useState([]);
  // 2. Working days
  const [selectedWorkingDays, setSelectedWorkingDays] = useState([]);
  // 3. Business Categories
  const [selectedBusinessCategories, setSelectedBusinessCategories] = useState(
    []
  );
  // 4. Major Market
  const [selectedMajorMarket, setSelectedMajorMarket] = useState([]);

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
                          defaultValue={companyData?.user?.company}
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
                          defaultValue={companyData?.companyDescription}
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
                          {companyData?.companyLogo && (
                            <img
                              className="my-1 mb-5"
                              src={`${import.meta.env.VITE_BACKEND_BASEURL}/${
                                companyData?.companyLogo
                              }`}
                              alt="Company Logo"
                              style={{ width: "100px", height: "100px" }}
                            />
                          )}
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
                          {companyData?.profileBanner && (
                            <img
                              className="my-1 mb-5"
                              src={`${import.meta.env.VITE_BACKEND_BASEURL}/${
                                companyData.profileBanner
                              }`}
                              alt="Profile Banner"
                              style={{ width: "100px", height: "100px" }}
                            />
                          )}
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
                          defaultValue={companyData?.zipCode}
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
                          defaultValue={companyData?.streetAddress}
                        />
                      </div>

                      {/* Primary Business Type */}
                      <div className="form-group col-md-6">
                        <label>Primary Business Type</label>
                        <Select
                          name="primaryBusinessType"
                          options={businessTypesOptions}
                          isMulti
                          value={selectedBusinessType}
                          onChange={setSelectedBusinessType}
                          placeholder="Select business types"
                        />
                      </div>

                      {/* Business Categories */}
                      <div className="form-group col-md-6">
                        <label>Business Categories</label>
                        <Select
                          name="businessCategories"
                          options={businessCategories}
                          isMulti
                          value={selectedBusinessCategories}
                          onChange={setSelectedBusinessCategories}
                          placeholder="Select business types"
                        />
                        {/* <select
                          className="form-control"
                          name="businessCategories"
                        >
                          <option value="1">Retail</option>
                          <option value="2">Wholesale</option>
                          <option value="3">Manufacturing</option>
                          <option value="4">Services</option>
                          <option value="5">Technology</option>
                          <option value="6">Healthcare</option>
                          <option value="7">Education</option>
                          <option value="8">Finance</option>
                          <option value="9">Real Estate</option>
                          <option value="10">Construction</option>
                          <option value="11">Agriculture</option>
                          <option value="12">Entertainment</option>
                          <option value="13">Hospitality</option>
                          <option value="14">Transportation</option>
                          <option value="15">Logistics</option>
                        </select> */}
                      </div>

                      {/* Working Days */}
                      <div className="form-group col-md-6">
                        <label>Working Days</label>
                        <Select
                          name="workingDays"
                          options={workingDaysOptions}
                          isMulti
                          value={selectedWorkingDays}
                          onChange={setSelectedWorkingDays}
                          placeholder="Select business types"
                        />
                        {/* <select className="form-control" name="workingDays">
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select> */}
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
                          defaultValue={companyData?.user?.name}
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
                          defaultValue={companyData?.user?.phoneNumber}
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
                          defaultChecked={companyData?.alternateMobileNumber}
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
                          defaultValue={companyData?.user?.email}
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
                          defaultValue={companyData?.alternateEmail}
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
                          defaultValue={companyData?.landlineNumber}
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
                          defaultValue={companyData?.faxNumber}
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
                          defaultValue={companyData?.yearOfEstablishment}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Ownership type *</label>
                        <select className="form-control" name="ownershipType" defaultValue={companyData.ownershipType || ""}>
                          <option value="Pvt Ltd">Pvt Ltd</option>
                          <option value="LLC">LLC</option>
                          <option value="Sole Proprietorship">
                            Sole Proprietorship
                          </option>
                          <option value="Inc">Inc</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Major market *</label>
                        <Select
                          name="majorMarket"
                          options={majorMarket}
                          isMulti
                          value={selectedMajorMarket}
                          onChange={setSelectedMajorMarket}
                          placeholder="Select major market"
                          defaultValue={companyData?.majorMarket}
                        />
                        {/* <select className="form-control" name="majorMarket">
                        </select> */}
                      </div>
                      <div className="form-group col-md-6">
                        <label>Terms of delivery *</label>
                        <select className="form-control" name="termsOfDelivery" defaultValue={companyData?.termsOfDelivery}>
                          <option>DAP - Delivery at place</option>
                          <option>DDP - Delivered Duty Paid</option>
                          <option>FAS - Free Alongside Ship</option>
                          <option>FOB - Free On Board</option>
                          <option>CIF - Cost, Insurance, Freight</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Area</label>
                        <select className="form-control" name="area" defaultValue={companyData?.area}>
                          <option value="1000-3000 square meter">
                            1000-3000 square meter
                          </option>
                          <option value="3000-8000 square meter">
                            3000-8000 square meter
                          </option>
                          <option value="below - 1000 square meter">
                            below - 1000 square meter
                          </option>
                          <option value="above - 8000 square meter">
                            above - 8000 square meter
                          </option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>No. of employees</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="numberOfEmployees"
                          defaultValue={companyData?.numberOfEmployees}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>No. of product line</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="numberOfProductLines"
                          defaultValue={companyData?.numberOfProductLines}
                        />
                      </div>
                      <div className="form-group row col-md-6">
                        {/* Output Capacity Input */}
                        <div className="col-md-6">
                          <label htmlFor="outputCapacity">
                            Output Capacity
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="outputCapacity"
                            placeholder="Enter here..."
                            name="outputCapacity"
                            defaultValue={companyData?.outputCapacity}
                          />
                        </div>

                        {/* Output Capacity Unit Dropdown */}
                        <div className="col-md-6">
                          <label htmlFor="outputCapacityUnit">
                            Output capacity unit
                          </label>
                          <select
                            className="form-control"
                            id="outputCapacityUnit"
                            name="outputCapacityUnit"
                            defaultValue={companyData?.outputCapacityUnit}
                          >
                            <option value="Bags">Bags</option>
                            <option value="Carton">Carton</option>
                            <option value="Dozen">Dozen</option>
                            <option value="Feet">Feet</option>
                            <option value="Kilogram">Kilogram</option>
                            <option value="Meter">Meter</option>
                            <option value="Metric Ton">Metric Ton</option>
                            <option value="Pieces">Pieces</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group row col-md-6">
                        <div className="col-md-6">
                          <label htmlFor="leadTime">Average lead time</label>
                          <input
                            type="text"
                            className="form-control"
                            id="leadTime"
                            placeholder="Enter here..."
                            name="averageLeadTime"
                            defaultValue={companyData?.averageLeadTime}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Average lead unit</label>
                          <select
                            className="form-control"
                            name="averageLeadTimeUnit"
                            defaultValue={companyData?.averageLeadTimeUnit}
                          >
                            <option value="Day">Day</option>
                            <option value="Week">Week</option>
                            <option value="Month">Month</option>
                            <option value="Quarter">Quarter</option>
                            <option value="Year">Year</option>
                          </select>
                        </div>
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
                          defaultValue={companyData?.gstNumber}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>PAN number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="panNumber"
                          defaultValue={companyData?.panNumber}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>TAN number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="tanNumber"
                          defaultValue={companyData?.tanNumber}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Annual revenue *</label>
                        <select className="form-control" name="annualRevenue" defaultValue={companyData?.annualRevenue}>
                          <option value="USD $2.5 Million - USD $5 Million">
                            USD $2.5 Million - USD $5 Million
                          </option>
                          <option value="USD $5 Million - USD $10 Million">
                            USD $5 Million - USD $10 Million
                          </option>
                          <option value="above - USD $10 Million">
                            above - USD $10 Million
                          </option>
                          <option value="below - USD $2.5 Million">
                            below - USD $2.5 Million
                          </option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Export percentage</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="exportPercentage"
                          defaultValue={companyData?.exportPercentage}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Nearest port</label>
                        <select className="form-control" name="nearestPort" defaultValue={companyData?.nearestPort}>
                          <option value="Mumbai">Mumbai Port</option>
                          <option value="Nhava Sheva">
                            Nhava Sheva (JNPT)
                          </option>
                          <option value="Mundra">Mundra Port</option>
                          <option value="Kandla">
                            Kandla Port (Deendayal Port)
                          </option>
                          <option value="Visakhapatnam">
                            Visakhapatnam Port
                          </option>
                          <option value="1">Chennai Port</option>
                          <option value="2">Kolkata Port</option>
                          <option value="3">Haldia Port</option>
                          <option value="4">Cochin Port (Kochi)</option>
                          <option value="5">New Mangalore Port</option>
                          <option value="6">
                            V.O. Chidambaranar Port (Tuticorin)
                          </option>
                          <option value="7">Paradip Port</option>
                          <option value="8">Hazira Port</option>
                          <option value="9">Pipavav Port</option>
                          <option value="10">
                            Krishnapatnam Port
                          </option>
                          <option value="11">
                            Ennore Port (Kamarajar Port)
                          </option>
                          <option value="12">Karaikal Port</option>
                          <option value="13">Gopalpur Port</option>
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
                            <label
                              className="custom-file-label"
                              htmlFor="companyLogo"
                            >
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
                          <label
                            className="custom-file-label"
                            htmlFor="companyLogo"
                          >
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
                          <label
                            className="custom-file-label"
                            htmlFor="companyLogo"
                          >
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
                          <label
                            className="custom-file-label"
                            htmlFor="companyLogo"
                          >
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
                            onChange={handleDocumentFileChange(
                              "Identification"
                            )}
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="companyLogo"
                          >
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
                          <label
                            className="custom-file-label"
                            htmlFor="companyLogo"
                          >
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
                    <form
                      onSubmit={handleRegistrationSubmit}
                      className="form-row"
                    >
                      <div className="form-group col-md-6">
                        <label>Location of Registration *</label>
                        <select
                          className="form-control"
                          name="registrationLocation"
                          defaultValue={companyData?.registration?.registrationLocation}
                        >
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
                          defaultValue={companyData?.registration?.registrationDate}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Registration Number *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="registrationNumber"
                          placeholder="Enter here..."
                          defaultValue={companyData?.registration?.registrationNumber}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>FAX Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="faxNumber"
                          placeholder="Enter here..."
                          defaultValue={companyData?.registration?.faxNumber}
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
                    <form
                      onSubmit={handleHeadOfficeSubmit}
                      className="form-row"
                    >
                      <div className="form-group col-md-6">
                        <label>Office location *</label>
                        <select
                          className="form-control"
                          name="officeLocation"
                          defaultValue= {companyData[0]?.country}
                          required
                        >
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
                          placeholder="State *"
                          required
                          name="officeState"
                          defaultValue={companyData[0]?.state}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Zipcode *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="officeZipcode"
                          defaultValue={companyData[0]?.zipcode}
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
                          defaultValue={companyData[0]?.streetAddress}
                        ></textarea>
                      </div>
                      {/* Right-aligned buttons */}
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

                {/* Branches Section */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="mb-4">Branches</h3>
                    <p>Add your branch details (If any)</p>
                    <form onSubmit={handleBranchSubmit} className="form-row">
                      <div className="form-group col-md-6">
                        <label>Office location *</label>
                        <select
                          className="form-control"
                          name="branchLocation"
                          defaultValue={companyData[1]?.country}
                          required
                        >
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
                          defaultValue={companyData[1]?.state}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Zipcode *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter here..."
                          name="branchZipcode"
                          defaultValue={companyData[1]?.zipcode}
                          required
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Street Address *</label>
                        <textarea
                          className="form-control"
                          placeholder="Enter here..."
                          name="branchAddress"
                          defaultValue={companyData[1]?.streetAddress}
                          required
                        ></textarea>
                      </div>
                      {/* Right-aligned buttons */}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfileForm;
