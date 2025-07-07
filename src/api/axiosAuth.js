import axios from './api.js';

const axiosAuth = axios.create();

// Always attach the latest token before each request
axiosAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {1
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosAuth;
