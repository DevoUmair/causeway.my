import axios from 'axios';

// Access the environment variable using import.meta.env
const server = import.meta.env.VITE_DEVELOPMENT;

const hqApi = axios.create({
    baseURL: `${server}/api`,
});

export default hqApi;
