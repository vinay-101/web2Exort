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
import CataloguePage from "./pages/CataloguePage";
import LeadHome from "./pages/LeadHome";
import HomePageCategoryListing from "./pages/HomePageCategoryListing";
import ProductListingByCategory from "./pages/ProductListingByCategory";
import TermConditionPage from "./pages/TermConditionPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUsPage from "./pages/AboutUsPage";
import FaqPage from "./pages/FaqPage";
import TestimonialsPage from "./pages/TestimonialsPage";

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
          <Route path="member/:slug" element={<CataloguePage />}/>
          <Route path="lead-home" element={<LeadHome/>}/>
          <Route path="categories/:categoryId" element={<HomePageCategoryListing/>}/>
          <Route path="products/:categoryId/:microCategoryId" element={<ProductListingByCategory/>}/>
          <Route path="term-condition" element={<TermConditionPage/>}/>
          <Route path="privacy-policy" element={<PrivacyPolicyPage/>}/>
          <Route path="about-us" element={<AboutUsPage/>}/>
          <Route path="faq" element={<FaqPage/>}/>
          <Route path="testimonials" element={<TestimonialsPage/>}/>
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