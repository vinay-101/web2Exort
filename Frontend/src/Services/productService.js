import axiosClient from '../api/axiosClient';

const productService = {
    
    // create product
    createProduct: (data) => axiosClient.post('/products/create', data),
}


export default productService;