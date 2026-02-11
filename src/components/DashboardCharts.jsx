import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardCharts = ({ waste, recommendations }) => {
  // Waste trend: count per date
  const wasteChartData = waste.map((item) => ({
    date: new Date(item.detectedAt).toLocaleDateString(),
    count: 1,
  }));

  // Savings trend
  const savingsChartData = recommendations.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    savings: item.estimatedSavings,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* Waste Trend */}
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-semibold mb-4">Waste Trend</h3>

        {waste.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No waste data available yet
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={wasteChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Savings Trend */}
      <div className="bg-white border rounded-lg p-4">
        <h3 className="font-semibold mb-4">
          Estimated Savings Trend
        </h3>

        {recommendations.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No savings data available yet
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={savingsChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="savings" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default DashboardCharts;
