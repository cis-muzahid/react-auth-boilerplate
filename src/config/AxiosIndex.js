import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Set the base URL to your backend server
});

// Request interceptor
Axios.interceptors.request.use(
  (config) => {
    // Modify config before sending the request
    // For example, you can add headers or tokens
    // config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
Axios.interceptors.response.use(
  (response) => {
    // Modify response data before resolving the promise
    // For example, you can handle common error responses globally
    // if (response.data.error) {
    //   return Promise.reject(response.data.error);
    // }
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);


export default Axios;