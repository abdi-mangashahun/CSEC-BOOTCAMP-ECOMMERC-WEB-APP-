import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ecommerce-backend-tqgh.onrender.com/api/v1', // Set your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
