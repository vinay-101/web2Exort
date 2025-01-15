import { useRef, useState } from "react";
import "../assets/forgotPassword.css";
import "../assets/verifyOTP.css";
import { Link, useNavigate } from "react-router-dom";
import handleApiResponse from "../helpers/responseHandler";
import userService from "../Services/userServices";
import { validateEmailOrPhone } from "../helpers/function";
import ResetPassword from "./ResetPassword";

const ForgotPassword = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [verificationModalOpen, setVerificationModal] = useState(false);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [resetPasswordScreen, setResetPasswordScreen] = useState(false);
  const [forgetPasswordToken, setForgetPasswordToken] = useState(null);
  const navigate = useNavigate();

  // Otp verification modal

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

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
    const validation = validateEmailOrPhone(value);

    if (!validation.isValid) {
      setError("Please enter a valid email or mobile number.");
    } else {
      setError("");
    }
  };

  // End otp verification modal

  // send Otp handler
  const handleSubmit = handleApiResponse(
    async (e) => {
      e.preventDefault();

      // Validate the input value (email or phone)
      const validation = validateEmailOrPhone(inputValue);
      if (!validation.isValid) {
        throw new Error(
          "Invalid input. Please enter a valid email or mobile number."
        ); // Throw an error for invalid input
      }

      // Prepare data for the API
      const data = { identity: inputValue };

      // Call the API
      const response = await userService.forgetPasswordSendOtp(data);

      // Return the response for further handling
      return response;
    },
    // onSuccess callback
    (responseData) => {
      // console.log("OTP sent successfully:", responseData);
      if (isNaN(inputValue)) {
        setEmail(inputValue); // Set email if input is not a number
      } else {
        setPhoneNumber(inputValue); // Set phone number if input is numeric
      }
      setVerificationModal(true); // Open OTP verification modal
    },
    // onError callback
    (errorData) => {
      // console.error("Error in API response:", errorData);
      setError(errorData?.message || "Failed to send OTP. Please try again.");
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
      // console.log("83", data);
      return await userService.forgetPasswordVerifyOtp(data);
    },
    (data) => {
      setResetPasswordScreen(true);
      // console.log("resetPwdToken", data.data)
      setForgetPasswordToken(data.data);
    },
    (error) => {
      console.log("89", error);
    }
  );

  // console.log("147", resetPasswordScreen)

  // Resend OTP handler
  const handleResendOtp = handleApiResponse(async (e) => {
    e.preventDefault();

    let data = {
      identity: email || phoneNumber,
    };

    return await userService.resendOtp(data);
  });

  // console.log("142", verificationModalOpen);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {resetPasswordScreen ? (
        <ResetPassword token={forgetPasswordToken} />
      ) : verificationModalOpen ? (
<div className="modal fade show d-block" tabIndex="-1" role="dialog">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div
      className="modal-content shadow"
      style={{
        borderRadius: "1rem", // Square with soft rounded corners
        maxWidth: "400px", // Restrict width for a compact modern look
        margin: "0 auto", // Center horizontally
      }}
    >
      <div
        className="modal-header border-0"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      >
        <h5 className="modal-title font-weight-bold text-center w-100">
          Verify OTP
        </h5>
        <button
          type="button"
          className="close text-white"
          aria-label="Close"
          onClick={() => setVerificationModal(false)}
          style={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body p-4 text-center">
        <form onSubmit={handleSubmitOtp}>
          <div className="d-flex justify-content-center mb-4">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="form-control text-center mx-1"
                style={{
                  width: "3rem",
                  height: "3rem",
                  fontSize: "1.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.5rem", // Rounded edges for inputs
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
                onInput={handleOTPInput}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                ref={(el) => (otpRefs.current[index] = el)}
                required
              />
            ))}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              borderRadius: "0.5rem", // Rounded button
              padding: "0.75rem",
            }}
          >
            Verify OTP
          </button>
        </form>
        <p className="text-center mt-3">
          Didn't receive the OTP?{" "}
          <button
            className="btn btn-link text-primary p-0"
            onClick={handleResendOtp}
            style={{
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  </div>
</div>

      ) : (
        <div
          className="form-card p-4 shadow rounded-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="text-center mb-4">
            <img
              src="logo.png"
              alt="Web2Export"
              className="logo mb-2"
              style={{ maxWidth: "150px" }}
            />
            <h5 className="font-weight-bold">Forgot Password</h5>
            <p className="text-muted">
              Enter your registered email address or phone number to reset your
              password.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="inputValue"
                className="form-label font-weight-bold"
              >
                Email or Mobile Number
              </label>
              <input
                type="text"
                className={`form-control ${error ? "is-invalid" : ""}`}
                id="inputValue"
                placeholder="Enter your email or phone number"
                value={inputValue}
                onChange={handleInputChange}
                required
              />
              {error && <div className="invalid-feedback">{error}</div>}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 rounded-lg mt-3"
              disabled={!!error || inputValue.length === 0}
            >
              Send OTP
            </button>
          </form>
          <p className="text-center mt-4">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-decoration-none text-primary font-weight-bold"
            >
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
