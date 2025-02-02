// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./components/ResetPassword";
import DashboardPage from "./pages/DashboardPage";
import MembershipPage from "./pages/MembershipPage";
import TestimonialPage from "./pages/TestimonialPage";
import ComplaintFeedbackPage from "./pages/ComplaintFeedbackPage";
import ProfilesettingPage from "./pages/ProfilesettingPage";
import AddProductPage from "./Pages/AddProductPage";
import ProductListingPage from "./Pages/ProductListingPage";
import ViewProductPage from "./Pages/ViewProductPage";
import CompanyProfilePage from "./Pages/CompanyProfilePage";
import EnquiryPage from "./Pages/EnquiryPage";
import MyRequirementPage from "./Pages/MyRequirementPage";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  return (
    <Router>
      <div>
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="user/profile" element={<DashboardPage />} />
            <Route
              path="user/profile/membership-plans"
              element={<MembershipPage />}
            />
            <Route
              path="user/profile/testimonial"
              element={<TestimonialPage />}
            />
            <Route
              path="user/profile/complaint-feedback"
              element={<ComplaintFeedbackPage />}
            />
            <Route
              path="user/profile/profile-setting"
              element={<ProfilesettingPage />}
            />
            <Route
              path="user/profile/add-product"
              element={<AddProductPage />}
            />
            <Route
              path="user/profile/product-listing"
              element={<ProductListingPage />}
            />
            <Route
              path="user/profile/view-product/:id"
              element={<ViewProductPage />}
            />
            <Route
              path="user/profile/company-profile"
              element={<CompanyProfilePage />}
            />
            <Route path="user/profile/enquiry" element={<EnquiryPage />} />
            <Route
              path="user/profile/my-requirement"
              element={<MyRequirementPage />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;