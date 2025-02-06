import React, { useRef, useState } from "react";
import "../assets/login.scss";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Services/authService";

const Login = () => {
  const [showModalState, setShowModalState] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [activeTab, setActiveTab] = useState("email-login"); // State to manage active tab
  const navigate = useNavigate();

  // Create a ref for the OTP input fields
  const otpRefs = useRef([]);

  // Handle OTP Input
  const handleOTPInput = (e) => {
    const input = e.target;
    const value = input.value;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (!/^\d$/.test(value)) {
      input.value = "";
      return;
    }

    if (value.length === 1 && nextInput) {
      nextInput.focus();
    }
  };

  const handleKeyDown = (e) => {
    const input = e.target;
    const key = e.key;

    if (
      key === "Backspace" &&
      input.value === "" &&
      input.previousElementSibling
    ) {
      input.previousElementSibling.focus(); // Move focus to previous input
    }
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text").replace(/\D/g, "");
    const inputs = document.querySelectorAll(".otp-input input");
    let currentIndex = 0;

    if (pastedText.length === inputs.length) {
      inputs.forEach((input) => {
        if (currentIndex < pastedText.length) {
          input.value = pastedText[currentIndex];
          currentIndex++;
        }
      });

      inputs[inputs.length - 1].focus();
    } else {
      e.preventDefault();
    }
  };

  // Email login handler
  const handleEmailLogin = handleApiResponse(
    async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("identity", e.target.email.value);
      formData.append("password", e.target.password.value);

      setEmail(e.target.email.value);
      return await userService.signin(formData);
    },
    (data) => {
      AuthService.setTokens(data.data.access_token);
      navigate("/user/profile");
    },
    (error) => {
      if (error.message === "Account has not been verified") {
        setShowModalState(true); // Show the modal if the account is not verified
      }
    }
  );

  // phone login handler
  const handlePhoneLogin = handleApiResponse(
    async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("identity", e.target.phoneNumber.value);
      formData.append("password", e.target.password.value);

      setPhoneNumber(e.target.phoneNumber.value);
      return await userService.signin(formData);
    },
    (data) => {
      AuthService.setTokens(data.data.access_token);
      navigate("/user/profile");
    },
    (error) => {
      if (error.message === "Account has not been verified") {
        setShowModalState(true); // Show the modal if the account is not verified
      }
    }
  );

  // Verify OTP handler
  const handleSubmitOtp = handleApiResponse(
    async (e) => {
      e.preventDefault();

      // Gather OTP values from refs
      const otpValue = otpRefs.current.map((ref) => ref.value).join("");

      let data = {
        identity: email || phoneNumber,
        otp: otpValue,
      };
      console.log("83", data);
      return await userService.verifyOtp(data);
    },
    (data) => {
      navigate("/");
    },
    (error) => {
      console.log("89", error);
    }
  );

  // Resend OTP handler
  const handleResendOtp = handleApiResponse(async (e) => {
    e.preventDefault();

    let data = {
      identity: email || phoneNumber,
    };

    return await userService.resendOtp(data);
  });

  return (
    <div className="Login_container container d-flex justify-content-center align-items-center vh-100">
      {!showModalState ? (
        <div
          className="card shadow-lg p-4 w-100 rounded-lg"
          style={{ maxWidth: "450px" }}
        >
          <div className="text-center mb-4">
            <img
              src="logo.png"
              alt="Web2Export"
              className="mb-3"
              style={{ width: "80px" }}
            />
            <h4 className="font-weight-bold">Welcome Back</h4>
            <p className="text-muted">Log in to continue to your account.</p>
          </div>
          <ul className="nav nav-pills nav-justified mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "email-login" ? "active" : ""}`}
                onClick={() => setActiveTab("email-login")}
              >
                <i className="bi bi-envelope"></i> Email
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "phone-login" ? "active" : ""}`}
                onClick={() => setActiveTab("phone-login")}
              >
                <i className="bi bi-phone"></i> Phone
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div id="email-login" className={`tab-pane fade ${activeTab === "email-login" ? "show active" : ""}`}>
              <form onSubmit={handleEmailLogin}>
                <div className="form-group">
                  <label className="font-weight-bold">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-lg"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-lg"
                    placeholder="Enter your password"
                    name="password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block rounded-lg mt-3"
                >
                  Login
                </button>
              </form>
            </div>
            <div id="phone-login" className={`tab-pane fade ${activeTab === "phone-login" ? "show active" : ""}`}>
              <form onSubmit={handlePhoneLogin}>
                <div className="form-group">
                  <label className="font-weight-bold">Phone Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">+91</span>
                    </div>
                    <input
                      type="number"
                      className="form-control rounded-lg"
                      placeholder="Enter your phone number"
                      name="phoneNumber"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="font-weight-bold">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-lg"
                    placeholder="Enter your password"
                    name="password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block rounded-lg mt-3"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      ) : (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            style={{
              maxWidth: "400px",
              width: "100%",
            }}
          >
            <div className="modal-content rounded-lg shadow">
              <div
                className="modal-header border-0 text-white"
                style={{
                  backgroundColor: "#007bff",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              >
                <h5 className="modal-title font-weight-bold">Verify OTP</h5>
                <button
                  type="button"
                  className="close text-white"
                  aria-label="Close"
                  onClick={() => setShowModalState(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center p-4">
                <p className="text-muted mb-4">
                  Enter the 6-digit OTP sent to your email or phone.
                </p>
                <form onSubmit={handleSubmitOtp}>
                  <div className="form-group d-flex justify-content-center">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="form-control otp-box text-center mx-1"
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          fontSize: "1.25rem",
                          border: "1px solid #ced4da",
                          borderRadius: "0.25rem",
                        }}
                        ref={(el) => (otpRefs.current[index] = el)}
                        onInput={handleOTPInput}
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                        required
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block rounded-lg mt-3"
                  >
                    Verify
                  </button>
                </form>
                <p className="text-muted mt-4">
                  Didn't receive the OTP?{" "}
                  <button
                    onClick={handleResendOtp}
                    className="btn btn-link p-0 text-primary"
                  >
                    Resend
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;