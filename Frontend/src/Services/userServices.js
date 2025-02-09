import axiosClient from '../api/axiosClient';
import AuthService from './authService';

// Define API functions
const userService = {
    // Get all records
    getAll: () => axiosClient.get('/records'),

    // Get a record by ID
    getById: (id) => axiosClient.get(`/records/${id}`),

    // signup
    signup: (data) => axiosClient.post('/users/register', data),

    // signin
    signin: (data) => axiosClient.post('/users/login', data),

    // Verify OTP
    verifyOtp: (data) => axiosClient.post('/users/login/otp/verify', data),

    // Resend OTP
    resendOtp: (data) => axiosClient.post('/users/login/send/otp', data),

    // Forget password send OTP
    forgetPasswordSendOtp: (data) => axiosClient.post('/users/forget/password/send/otp', data),

    // Forget password Verify OTP
    forgetPasswordVerifyOtp: (data) => axiosClient.post('/users/forget/password/verify/otp', data),

    // Reset password
    resetPassword: (data) => axiosClient.post('/users/forget/password/reset', data),

    // Update a record by ID
    update: (id, data) => axiosClient.put(`/records/${id}`, data),

    // Delete a record by ID
    delete: (id) => axiosClient.delete(`/records/${id}`),

    // Create Enquiry
    createEnquiry: (data) => axiosClient.post('/users/create/enquiry', data),

    // Get all Enquiry
    allEnquiry: (currentPage, size) => axiosClient.get(`/users/all/enquiry?page=${currentPage}&size=${size}`, {
        headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    // Get user profile
    getProfile: () => axiosClient.get(`/users/profile`, {
        headers:{
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    // update User
    updateUser: (data)=> axiosClient.patch('users/profile/update', data, {
        headers:{
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    // change password
    changePassword: (data)=> axiosClient.post('/users/change/password', data, {
        headers:{
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    })
};

export default userService;
