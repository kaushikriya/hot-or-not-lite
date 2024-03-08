import React, { useContext } from "react";
import { ReactComponent as Retry } from "../Assets/retry.svg";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="grid justify-center items-center">
        <p className="text-lg text-white font-extrabold w-full h-10">
          {error.message}
        </p>
        <button
          className="w-full h-10 flex justify-center items-center"
          onClick={() => {
            console.log("resetting");
            resetErrorBoundary();
            // handleReset();
          }}
        >
          <Retry className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110" />
        </button>
      </div>
    </div>
  );
};
