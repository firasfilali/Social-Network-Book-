import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8089/api/v1", // Replace with your actual API base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the JWT token from local storage or any other storage
    const token = localStorage.getItem("token");

    // If the token exists, set it in the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any errors in the request setup
    return Promise.reject(error);
  }
);

export default axiosInstance;
