import React from "react";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";
import AuthService from "../Services/authService";

const InquiryForm = ({ enquiryHeading }) => {
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
     AuthService.getAccessToken() ?  formData.append("userId", AuthService.getUserId()) : null

      // Reset the form
      e.target.reset();
      return userService.createEnquiry(formData);
    },
    (data) => {},
    (error) => {}
  );
  return (
    <div className={`container ${enquiryHeading == "" ? "": "mt-3"} p-2 border rounded shadow-sm`}>
      <h2 className="text-center text-primary mb-3">
        {enquiryHeading == "" ? (
          enquiryHeading
        ) : (
          <>
            Post Your <span className="text-primary">Need</span>
          </>
        )}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="requirement"
            className="form-control"
            placeholder="Enter Requirement"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="fullname"
            className="form-control"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phoneNumber"
            className="form-control"
            placeholder="Phone No"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="companyName"
            className="form-control"
            placeholder="Company Name"
            required
          />
        </div>
        <div className="form-group">
          <select name="userType" className="form-control" required>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {enquiryHeading == "" ? (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary btn-block text-center"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default InquiryForm;
