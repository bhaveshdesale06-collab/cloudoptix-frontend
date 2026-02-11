// src/api/auth.js
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/auth`;

export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, {
    email,
    password,
  });

  return response.data;
};
