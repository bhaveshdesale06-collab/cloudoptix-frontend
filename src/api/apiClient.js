// src/api/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cloudoptix-production.up.railway.app/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// 🔐 Attach JWT automatically
apiClient.interceptors.request.use(
  (config) => {
    // ✅ FIXED KEY NAME
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Authorization header added ✅");
    } else {
      console.log("No token found ❌");
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// 🔁 Handle unauthorized globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiClient;
