import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WasteTrendChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No waste data available yet
      </p>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="date" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" allowDecimals={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1F2937",
            borderColor: "#374151",
            color: "#F9FAFB",
          }}
        />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#EF4444"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WasteTrendChart;
