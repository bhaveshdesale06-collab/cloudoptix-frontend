import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import Settings from "../pages/Settings";

import AdminHome from "../pages/admin/AdminHome";
import CloudAccounts from "../pages/admin/CloudAccounts";
import AdminAnalytics from "../pages/admin/AdminAnalytics";
import UserManagement from "../pages/admin/UserManagement";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* User Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminRoute />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="cloud-accounts" element={<CloudAccounts />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="users" element={<UserManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
