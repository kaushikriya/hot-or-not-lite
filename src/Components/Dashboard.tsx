import React, { useEffect, useRef, useState } from "react";
import { Video, useGetVideos } from "../Data/useGetVideos";
import { VideoPlayer } from "./VideoPlayer";
import InfiniteScroll from "react-infinite-scroller";

export const Dashboard = () => {
  const { data: videosData } = useGetVideos();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    if (videosData) setVideos(videosData);
  }, [videosData]);

  return (
    <InfiniteScroll
      loadMore={() => {
        if (videosData) setVideos([...videos, ...videosData]);
      }}
      hasMore={true}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <div className="w-full h-full">
        {videos?.map((video: Video, index: number) => (
          <VideoPlayer video={video} key={index} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
