const express = require("express");
const userRouter = express.Router();
const user_controller = require("../controllers/user/user.controller");
const { requireAuth } = require("../middlewares/auth.middleware");
const { uploadFiles } = require("../middlewares/uploadFiles.middleware");

/////////////////////////////////////// AUTH routes //////////////////////////////////////

userRouter.route("/register").post(user_controller.signUpUser);  
userRouter.route("/login").post(user_controller.userLogin);  
userRouter.route("/login/send/otp").post(user_controller.LoginSendOtp);  //resendOtp for login
userRouter.route("/login/otp/verify").post(user_controller.LoginVerifyOtp);  // Verify OTP
userRouter.route("/forget/password/send/otp").post(user_controller.forgetPasswordSendOtp);  // send OTP for forget password
userRouter.route("/forget/password/verify/otp").post(user_controller.forgetPasswordVerifyOtp);  // Verify OTP for forget password
userRouter.route("/forget/password/reset").post(user_controller.resetForgetPassword);  // Reset forget password
userRouter.route("/change/password").post(requireAuth, user_controller.changePassword);  // Change password


// profile 
userRouter.route("/profile").get(requireAuth, user_controller.getProfile);  
userRouter.route("/profile/update").patch(requireAuth, user_controller.updateProfile);  // update profile

// Post Requirement
userRouter.route("/create/enquiry").post(user_controller.createEnquiry);
userRouter.route("/all/enquiry").get(requireAuth, user_controller.allEnquiry);

// Company profile
// Basic details
userRouter.route("/create/company/profile/general/detail").post(requireAuth, uploadFiles("uploads/companies/", [
    { name: "companyLogo", maxCount: 1 },
    { name: "profileBanner", maxCount: 1 },
]),user_controller.createCompanyProfileGeneralDetail);

// Contact Info
userRouter.route("/create/company/profile/contact/info").post(requireAuth, user_controller.createCompanyContactInfo);
userRouter.route("/create/company/profile/certification").post(requireAuth,uploadFiles("uploads/companies/", [
    { name: "certificateFile", maxCount: 1 },
]), user_controller.createCompanyCertification);

userRouter.route("/create/company/document").post(requireAuth,uploadFiles("uploads/companies/", [
    { name: "documentFile", maxCount: 1 },
]), user_controller.createCompanyDocument);

// Register Company
userRouter.route("/create/company/profile/registration").post(requireAuth, user_controller.createCompanyRegistration);
// office location
userRouter.route("/create/company/office/location").post(requireAuth, user_controller.createCompanyLocation);

// Get Company Profile
userRouter.route("/company/profile").get(requireAuth, user_controller.getCompanyProfile);

// Delete Certificate
userRouter.route("/delete/certificate/:id").delete(requireAuth, user_controller.deleteCertificate);

module.exports = {userRouter}