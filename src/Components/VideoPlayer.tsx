import React from "react";
import { Video } from "../Data/useGetVideos";

export const VideoPlayer = ({ video }: { video: Video }) => {
  return (
    <div className="w-full h-full flex justify-center items-center snap-always snap-center transition-all overflow-hidden">
      <video
        loop
        autoPlay={true}
        playsInline
        className="w-1/2 h-screen object-fill z-10"
      >
        <source src={video.url} type="video/mp4" className="object-fit" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
