import React from "react";
import { Video } from "../Data/useGetVideos";

export const VideoPlayer = ({ video }: { video: Video }) => {
  return (
    <div>
      <video controls width="400">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
