const ChartContainer = ({ title, children }) => {
  return (
    <div className="rounded-xl border p-6
      bg-white dark:bg-gray-800
      border-gray-200 dark:border-gray-700"
    >
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default ChartContainer;
