import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getDashboardSummary,
  getWasteFindings,
  getRecommendations,
} from "../api/dashboard";
import WasteTrendChart from "../components/charts/WasteTrendChart";
import SavingsTrendChart from "../components/charts/SavingsTrendChart";
import { AlertTriangle, Lightbulb, IndianRupee } from "lucide-react";
import { getUserRole } from "../utils/auth";

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [waste, setWaste] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const role = getUserRole();
  const isAdmin = role === "ROLE_ADMIN";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const summaryData = await getDashboardSummary();
        const wasteData = await getWasteFindings();
        const recommendationData = await getRecommendations();

        setSummary(summaryData);
        setWaste(wasteData);
        setRecommendations(recommendationData);
      } catch {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 📊 Waste trend
  const wasteChartData = waste.map((item) => ({
    date: new Date(item.detectedAt).toLocaleDateString(),
    count: 1,
  }));

  // 💰 Savings trend
  const savingsChartData = recommendations.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    amount: item.estimatedSavings,
  }));

  return (
    <DashboardLayout>
      <div className="animate-in fade-in duration-500">
        <h1 className="text-2xl font-bold mb-6">CloudOptix Overview</h1>

        {loading && <p className="text-gray-500">Loading dashboard...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && summary && (
          <>
            {/* KPI CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-red-500 bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Total Waste</CardTitle>
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {summary.totalWasteFindings ?? 0}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500 bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Optimizations</CardTitle>
                  <Lightbulb className="h-5 w-5 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {summary.totalRecommendations ?? 0}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-green-500 bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Estimated Savings</CardTitle>
                  <IndianRupee className="h-5 w-5 text-green-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    ₹{summary.totalEstimatedMonthlySavings ?? 0}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* WASTE FINDINGS */}
            <div className="mt-14">
              <h2 className="text-xl font-semibold mb-4">Waste Findings</h2>

              <div className="rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900 border-b">
                    <tr>
                      <th className="px-4 py-3 text-left">Type</th>
                      <th className="px-4 py-3 text-left">Severity</th>
                      <th className="px-4 py-3 text-left">Detected At</th>
                      <th className="px-4 py-3 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waste.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                          🎉 No waste detected — your cloud is optimized
                        </td>
                      </tr>
                    ) : (
                      waste.map((item) => (
                        <tr
                          key={item.id}
                          className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        >
                          <td className="px-4 py-3">{item.wasteType}</td>
                          <td className="px-4 py-3">{item.severity}</td>
                          <td className="px-4 py-3">
                            {new Date(item.detectedAt).toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                            {item.description}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CHARTS */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold mb-4">Waste Trend</h2>
                <WasteTrendChart data={wasteChartData} />
              </div>

              <div className="rounded-xl border p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-semibold mb-4">Estimated Savings Trend</h2>
                <SavingsTrendChart data={savingsChartData} />
              </div>
            </div>

            {/* ADMIN ANALYTICS */}
            {isAdmin && (
              <div className="mt-16">
                <h2 className="text-xl font-semibold mb-6">
                  Admin Analytics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-white dark:bg-gray-800 transition-all hover:shadow-xl">
                    <CardHeader>
                      <CardTitle>Total Cloud Accounts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">
                        {summary.totalCloudAccounts ?? 0}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white dark:bg-gray-800 transition-all hover:shadow-xl">
                    <CardHeader>
                      <CardTitle>Total Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">
                        {summary.totalMetrics ?? 0}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white dark:bg-gray-800 transition-all hover:shadow-xl">
                    <CardHeader>
                      <CardTitle>System Health</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        Healthy
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
