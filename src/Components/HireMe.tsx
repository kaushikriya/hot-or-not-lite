import React from "react";
import { ReactComponent as Icon } from "../Assets/hireMe.svg";

export const HireMe = () => {
  return (
    <div className="h-20 w-20 relative flex justify-center items-center">
      <Icon className="w-20 h-20 animate-spin duration-1000 font-extrabold" />
      <p className="text-md text-white whitespace-nowrap absolute bottom-0 mb-7 text-center w-full">
        Hire Me!
      </p>
    </div>
  );
};
