import apiClient from "./apiClient";

export const getDashboardSummary = async () => {
  const res = await apiClient.get("/dashboard/summary");
  return res.data;
};

export const getWasteFindings = async () => {
  const res = await apiClient.get("/dashboard/waste");
  return res.data;
};
export const getRecommendations = async () => {
  const res = await apiClient.get("/dashboard/recommendations");
  return res.data;
};