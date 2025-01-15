import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./components/ResetPassword";
import ProductDetailPage from "./components/LoginComponents/ProductDetailPage";

const App = () => {
  return (
    <Router>
      <div>
        <Toaster position="top-right" reverseOrder={false} />







        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
           {/* Product Detail Page */}
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
