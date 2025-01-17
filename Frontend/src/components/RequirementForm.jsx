import React from "react";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";

const InquiryForm = () => {
  const handleSubmit = handleApiResponse(
    async (e) => {
      e.preventDefault();

      let formData = new FormData();
      formData.append("requirement", e.target.requirement.value);
      formData.append("fullname", e.target.fullname.value);
      formData.append("email", e.target.email.value);
      formData.append("phoneNumber", e.target.phoneNumber.value);
      formData.append("companyName", e.target.companyName.value);
      formData.append("userType", e.target.userType.value);
      
      // Reset the form 
      e.target.reset();
      return userService.createEnquiry(formData)
    },
    (data) => {
      
    },
    (error) => {}
  );

  return (
    <div
      style={{
        margin: "20px auto",
        padding: "0px 30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0px 0px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "1467c1",
          padding: " 10px 10px 0 10px ",
          margin: "0",
        }}
      >
        Post Your <span style={{ color: "#1467c1" }}>Need</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="requirement"
          placeholder="Enter Requirement"
          style={inputStyle}
        />
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          style={inputStyle}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone No"
            style={{ ...inputStyle, flex: 1 }}
          />
        </div>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          style={inputStyle}
        />
        <select name="userType" style={dropdownStyle}>
          <option value="Seller">Seller</option>
          <option value="Buyer">Buyer</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Styles
const inputStyle = {
  width: "100%",
  padding: "9px",
  margin: "10px 0 0 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const dropdownStyle = {
  ...inputStyle,
};

const submitButtonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#1467c1",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  margin: "10px 0px",
};

export default InquiryForm;
