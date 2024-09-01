function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm ">
      <div className="mb-4 text-gray-900 dark:text-gray-100">{icon}</div>
      <h3 className="text-xl font-bold text-green-900 dark:text-green-600 mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureCard;
