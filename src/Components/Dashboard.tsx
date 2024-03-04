import React from "react";
import { useGetVideos } from "../Data/useGetVideos";
import { VideoPlayer } from "./VideoPlayer";

export const Dashboard = () => {
  const { data: videos, isLoading, isError } = useGetVideos();

  console.log(videos);

  return (
    <div className="w-full h-full">
      {videos?.map((video, index) => (
        <VideoPlayer video={video} />
      ))}
    </div>
  );
};
