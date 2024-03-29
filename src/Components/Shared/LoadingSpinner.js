import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
