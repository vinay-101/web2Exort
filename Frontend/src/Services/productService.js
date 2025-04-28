import axiosClient from '../api/axiosClient';
import AuthService from './authService';

const productService = {
    
    // create product
    createProduct: (data) => axiosClient.post('/products/create', data,{
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    // get all products category
    allCategory: (data) => axiosClient.get(`/products/category/all?scope=${data}`),

    // get all products
    getAllProducts: (currentPage, pageSize, type) => axiosClient.get(`http://localhost:5000/products/all?page=${currentPage}&size=${pageSize}&type=${type}`, {
        headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    // get product by id
    getProductById: (productId) => axiosClient.get(`/products/${productId}`, {
        headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    // Product delete
    deleteProduct: (productId) => axiosClient.delete(`/products/delete/${productId}`, {
        headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    // Product Feataure
    featureProduct: (productId) => 
        axiosClient.post(`/products/feature/${productId}`, {}, { // Empty body
          headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
          }
    }),

    // fetch all categories
    fetchCategories: () => axiosClient.get('/products/category/all'),
     
    // Fetch dashboard data
    fetchDashboardData: () => axiosClient.get('/products/dashboard/data', {
        headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    fetchCatalogue: (slug) => axiosClient.get(`/products/catalogue/member/${slug}`, {
        headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    fetchLeads: (type) => axiosClient.get(`/products/leads/all?type=${type}`, {
        headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`
        }
    }),

    fetchHomeLeads: (type) => axiosClient.get(`/products/home/leads/all?type=${type}`),

    fetchHomeCategory: (id) => axiosClient.get(`/products/home/category/all/${id}`),

    // Fetch micro categories
    fetchMicroCategories: (categoryId) => 
        axiosClient.get(`/products/micro-category/${categoryId}`),

    // Fetch products by micro category
    fetchProductsByMicroCategory: (categoryId, microCategoryId, page = 1, size = 10) =>
        axiosClient.get(`/products/all/${categoryId}/${microCategoryId}?page=${page}&size=${size}`),

    // Fetch leads by category (for buyer and supplier tabs)
    fetchLeadsByCategory: (categoryId, type, page = 1, size = 5) =>
        axiosClient.get(`/products/all/lead/${categoryId}?type=${type}&page=${page}&size=${size}`),
}


export default productService;