// components/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isTokenExpired } from "../Services/API"; // Utility function to check token expiration
import AuthService from "../Services/authService";

const ProtectedRoute = () => {
  const token = AuthService.getAccessToken(); // Get the token from local storage

  // Check if the token exists and is not expired
  if (!token || isTokenExpired(token)) {
    AuthService.clearTokens(token) // Clear expired token 
    return <Navigate to="/login" replace />; // Redirect to login page
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;