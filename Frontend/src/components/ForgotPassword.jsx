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
  const [email, setEmail] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [resetPasswordScreen, setResetPasswordScreen] = useState(false);
  const [forgetPasswordToken, setForgetPasswordToken] = useState(null)
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
      throw new Error("Invalid input. Please enter a valid email or mobile number."); // Throw an error for invalid input
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
      setResetPasswordScreen(true)
      // console.log("resetPwdToken", data.data)
      setForgetPasswordToken(data.data)
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
        <ResetPassword token={forgetPasswordToken}/>
      ) : verificationModalOpen ? (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title">Verify OTP</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setVerificationModal(false)}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmitOtp}>
                  <div className="otp-input d-flex justify-content-center gap-2">
                    {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="form-control text-center otp-box"
                        onInput={handleOTPInput}
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                        ref={(el) => (otpRefs.current[index] = el)}
                        required
                      />
                    ))}
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-4">
                    Verify OTP
                  </button>
                </form>
                <p className="text-center mt-3">
                  Didn't receive the OTP?{" "}
                  <Link onClick={handleResendOtp} className="text-decoration-none text-danger">
                    Resend OTP
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="form-card p-4 shadow">
          <div className="text-center mb-4">
            <img src="logo.png" alt="Web2Export" className="logo mb-2" />
            <h5>Forgot Password</h5>
            <p className="text-muted">
              Enter your registered email address or phone number to reset your password.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputValue" className="form-label fw-bold">
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
              {error && <div className="text-danger mt-2">{error}</div>}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
              disabled={!!error || inputValue.length === 0}
            >
              Send OTP
            </button>
          </form>
          <p className="text-center mt-4">
            Remember your password?{" "}
            <Link to="/login" className="text-decoration-none text-danger">
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
  
};

export default ForgotPassword;
