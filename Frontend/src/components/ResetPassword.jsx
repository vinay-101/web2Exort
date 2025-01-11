import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/resetPassword.css";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";
import { useNavigate } from "react-router-dom";


const ResetPassword = ({ token }) => {
  const navigate = useNavigate();
  const handleSubmit = handleApiResponse(async(e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('password', e.target.password.value);
    formData.append('confirm_password', e.target.confirmPassword.value)
    formData.append('forget_password_token', token)

   return await userService.resetPassword(formData)
    
  },(data)=>{
    navigate('/login')
  },(error)=>{
    console.log(error)
  }
);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="form-card shadow p-4">
        <h3 className="text-center mb-3">Reset Your Password</h3>
        <form onSubmit={handleSubmit}>
          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your new password"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your new password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
