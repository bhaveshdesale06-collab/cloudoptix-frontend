// src/utils/auth.js

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const getUserRole = () => {
  return localStorage.getItem("role");
};

export const getUserEmail = () => {
  return localStorage.getItem("email");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
};
