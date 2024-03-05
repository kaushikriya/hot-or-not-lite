import React from "react";
import { Video } from "../Data/useGetVideos";

export const VideoPlayer = ({ video }: { video: Video }) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center snap-always snap-center transition-all">
      <div className="w-1/2 relative">
        <video loop className="h-screen object-fill z-10">
          <source src={video.url} type="video/mp4" className="object-fit" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
