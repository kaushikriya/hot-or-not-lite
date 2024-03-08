import React from "react";
import Loader from "react-js-loader";

export const AnimatedLoader = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <div className="bg-black w-full md:w-[50%] h-full flex justify-center items-center animate-pulse">
      <Loader
        type="box-up"
        bgColor={"#E96B25"}
        color={"#E96B25"}
        title={"Loading"}
        size={100}
      />
    </div>
  </div>
);
