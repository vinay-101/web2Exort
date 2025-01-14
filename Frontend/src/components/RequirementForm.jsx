import React, { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    requirements: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    userType: "Seller",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

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
      <h2 style={{ textAlign: "center", color: "1467c1", padding:" 10px 10px 0 10px ", margin:"0", }}>
        Post Your <span style={{ color: "#1467c1" }}>Need</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="requirements"
          placeholder="Enter Requirement"
          value={formData.requirements}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
            style={{ ...inputStyle, flex: 1 }}
          />
        </div>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          style={inputStyle}
        />
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          style={dropdownStyle}
        >
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
