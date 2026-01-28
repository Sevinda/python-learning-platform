import { RotateLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        <RotateLoader color="#6366f1" />
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
