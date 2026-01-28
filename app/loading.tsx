import { RotateLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <RotateLoader />
    </div>
  );
};

export default LoadingScreen;
