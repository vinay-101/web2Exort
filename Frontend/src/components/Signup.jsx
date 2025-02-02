import React from "react";
import "../assets/signup.scss";
import { Link, useNavigate } from "react-router-dom";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit =  handleApiResponse(async (e) => {
      e.preventDefault();

      const formData = new FormData();

      // Append form data
      formData.append("email", e.target.email.value);
      formData.append("password", e.target.password.value);
      formData.append("name", e.target.name.value);
      formData.append("country", e.target.country.value);
      formData.append("state", e.target.state.value);
      formData.append("city", e.target.city.value);
      formData.append("phoneNumber", e.target.phoneNumber.value);
      formData.append("company", e.target.company.value);
      formData.append("confirmPassword", e.target.confirmPassword.value);
      formData.append("userType", e.target.userType.value);
      formData.append("terms", e.target.terms.checked);

      return await userService.signup(formData);
    },
    (data) => {
      navigate('/login');
    },
    (error) => {
      console.log(error)
    }
  );
  return (
    <>
      <div className="signup_container container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg rounded" style={{ maxWidth: '600px', width: '100%' }}>
          <div className="text-center mb-4">
            <img src="logo.png" alt="Web2Export" className="mb-3" style={{ width: '80px' }} />
            <h5 className="font-weight-bold">JOIN NOW FOR FREE</h5>
            <p className="text-muted">Create your free Web2Export account today</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* User Role Selection */}
              <div className="col-12 mb-3">
                <h6 className="font-weight-bold">I am a:</h6>
                <div className="d-flex">
                  <div className="form-check mr-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="seller"
                      value="Seller"
                      required
                    />
                    <label className="form-check-label" htmlFor="seller">
                      Seller
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="userType"
                      id="buyer"
                      value="Buyer"
                      required
                    />
                    <label className="form-check-label" htmlFor="buyer">
                      Buyer
                    </label>
                  </div>
                </div>
              </div>
  
              {/* Form Fields */}
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Full name *"
                  name="name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control rounded"
                  placeholder="Email address *"
                  name="email"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <select className="form-control rounded" name="country" required>
                  <option value="" disabled selected>
                    Country
                  </option>
                  <option value="1">India</option>
                  <option value="2">USA</option>
                  <option value="3">UK</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <select className="form-control rounded" name="state" required>
                  <option value="" disabled selected>
                    State
                  </option>
                  <option value="4">Bihar</option>
                  <option value="5">Maharashtra</option>
                  <option value="7">Delhi</option>
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <select className="form-control rounded" name="city" required>
                  <option value="" disabled selected>
                    Select City
                  </option>
                  <option value="8">Patna</option>
                  <option value="9">Mumbai</option>
                  <option value="10">Delhi</option>
                </select>
              </div>
              <div className="col-md-12 mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-light text-muted">+91</span>
                  <input
                    type="text"
                    className="form-control rounded"
                    placeholder="Phone number"
                    name="phoneNumber"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Company name *"
                  name="company"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="password"
                  className="form-control rounded"
                  placeholder="Password *"
                  name="password"
                  required
                />
              </div>
              <div className="col-md-12 mb-3">
                <input
                  type="password"
                  className="form-control rounded"
                  placeholder="Confirm password *"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I agree with
                    <a href="#" className="text-primary text-decoration-none mx-1">
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block rounded">
                  Join Now
                </button>
              </div>
            </div>
          </form>
          <p className="text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-decoration-none text-primary ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
  
};

export default Signup;
