import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SavingsTrendChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-12">
        No savings data available yet
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#020617",
            border: "1px solid #1e293b",
            color: "#e5e7eb",
          }}
        />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#22c55e"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SavingsTrendChart;
