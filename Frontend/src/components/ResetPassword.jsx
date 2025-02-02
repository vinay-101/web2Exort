import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/resetPassword.scss";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ token }) => {
  const navigate = useNavigate();
  const handleSubmit = handleApiResponse(
    async (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("password", e.target.password.value);
      formData.append("confirm_password", e.target.confirmPassword.value);
      formData.append("forget_password_token", token);

      return await userService.resetPassword(formData);
    },
    (data) => {
      navigate("/login");
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <div className="reset_password_container container d-flex justify-content-center align-items-center vh-100">
      <div
        className="shadow-lg p-4"
        style={{
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
        }}
      >
        <h3
          className="text-center mb-4 font-weight-bold"
          style={{ color: "#343a40" }}
        >
          Reset Your Password
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bold">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your new password"
              required
              style={{
                padding: "0.75rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ced4da",
              }}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword" className="font-weight-bold">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your new password"
              required
              style={{
                padding: "0.75rem",
                fontSize: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ced4da",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              borderRadius: "0.5rem",
              padding: "0.75rem",
              fontSize: "1rem",
            }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
