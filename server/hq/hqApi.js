// require('dotenv').config(); // Ensure environment variables are loaded

// const axios = require('axios');

// const token = process.env.ENCODE_TOKEN; // Load the token from environment variables

// const hqApi = axios.create({
//     baseURL: 'https://api-asia.caagcrm.com/api-asia/',
// });

// hqApi.defaults.headers.common['Authorization'] = `Basic ${token}`;
// hqApi.defaults.headers.common['Content-Type'] = 'application/json';

// module.exports = hqApi;
require('dotenv').config(); // Ensure environment variables are loaded

const axios = require('axios');

const token = process.env.ENCODE_TOKEN; // Load the token from environment variables

// Create an axios instance with baseURL and default headers
const hqApi = axios.create({
    baseURL: 'https://api-asia.caagcrm.com/api-asia/',
    headers: {
        Authorization: `Basic ${token}`, // Add Basic Authentication token
    },
});

// Interceptor for debugging errors
hqApi.interceptors.response.use(
    (response) => response, // Return the response directly
    (error) => {
        console.error('API Error:', error.response?.data || error.message); // Log error
        return Promise.reject(error); // Pass error to calling function
    }
);

module.exports = hqApi;
