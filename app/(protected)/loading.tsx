import { RotateLoader } from "react-spinners";

const ProtectedLoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="flex flex-col items-center space-y-4">
        <RotateLoader color="#6366f1" />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Loading your learning dashboard...
        </p>
      </div>
    </div>
  );
};

export default ProtectedLoadingScreen;
