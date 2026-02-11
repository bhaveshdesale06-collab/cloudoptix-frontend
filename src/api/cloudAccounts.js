import apiClient from "./apiClient";

export const getCloudAccounts = async () => {
  const res = await apiClient.get("/cloud-accounts");
  return res.data;
};
