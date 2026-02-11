import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getAdminAnalytics } from "../../api/adminAnalytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, AlertTriangle, IndianRupee } from "lucide-react";

const AdminAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAdminAnalytics()
      .then(setData)
      .catch(() => setError("Failed to load admin analytics"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-500">
        <h1 className="text-2xl font-bold mb-2">Admin Analytics</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Organization-wide cloud optimization overview
        </p>

        {/* Loading */}
        {loading && (
          <p className="text-gray-500">Loading admin analytics...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {/* Empty State */}
        {!loading && data && data.totalCloudAccounts === 0 && (
          <div className="text-center py-12 text-gray-500">
            📊 Analytics will appear once cloud accounts are onboarded.
          </div>
        )}

        {/* KPI CARDS */}
        {!loading && !error && data && data.totalCloudAccounts > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="flex items-center gap-3">
                <Cloud className="h-5 w-5 text-blue-500" />
                <CardTitle>Total Cloud Accounts</CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-bold">
                {data.totalCloudAccounts}
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <CardTitle>Total Waste Findings</CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-bold">
                {data.totalWasteFindings}
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="flex items-center gap-3">
                <IndianRupee className="h-5 w-5 text-green-500" />
                <CardTitle>Total Estimated Savings</CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-bold">
                ₹{data.totalEstimatedMonthlySavings}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminAnalytics;
