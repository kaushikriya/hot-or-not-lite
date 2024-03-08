import React from "react";
import { ReactComponent as Icon } from "../Assets/hireMe.svg";

export const HireMe = () => {
  return (
    <div className="h-30 w-30 relative flex justify-center items-center">
      <Icon className="w-[100px] h-[100px] animate-spin-slow font-extrabold" />
      <p className="text-xs font-mono font-extrabold text-white whitespace-nowrap absolute bottom-0 mb-10 text-center w-full">
        HIRE ME!
      </p>
    </div>
  );
};
