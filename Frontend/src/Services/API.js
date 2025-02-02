// api.js
import axios from "axios";
import {jwtDecode} from "jwt-decode"; // For decoding the JWT token
import AuthService from "./authService"; // Your service to handle tokens

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000", // Add http:// for proper URL formatting
});

// Function to check if the token is expired
export const isTokenExpired = (token) => {
  if (!token) return true; // Token doesn't exist

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime; // Check if token is expired
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // Treat invalid tokens as expired
  }
};

// Add a request interceptor to include the JWT token and check expiration
API.interceptors.request.use(
  (config) => {
    const token = AuthService.getAccessToken(); // Retrieve the JWT token

    if (token) {
      if (isTokenExpired(token)) {
        // Token is expired, clear it and redirect to login
        AuthService.clearTokens(); // Clear the token
        window.location.href = "/login"; // Redirect to login page
        return Promise.reject(new Error("Token expired")); // Stop the request
      }

      // Attach token to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor for handling specific error scenarios
API.interceptors.response.use(
  (response) => response, // Pass through successful responses
  async (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - Token might be invalid or expired
      console.error("Unauthorized - Redirecting to login");
      AuthService.clearTokens(); // Clear the token
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default API;