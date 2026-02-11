import apiClient from "./apiClient";

export const getAdminAnalytics = async () => {
  const res = await apiClient.get("/dashboard/summary");
  return res.data;
};
