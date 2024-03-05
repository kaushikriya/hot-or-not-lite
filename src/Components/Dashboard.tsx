import React, { useEffect, useRef, useState } from "react";
import { Video, useGetVideos } from "../Data/useGetVideos";
import { VideoPlayer } from "./VideoPlayer";
import InfiniteScroll from "react-infinite-scroller";
import { ReactComponent as Mute } from "../Assets/mute.svg";
import { ReactComponent as Unmute } from "../Assets/mute.svg";

export const Dashboard = () => {
  const { data: videosData } = useGetVideos();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    if (videosData) setVideos(videosData);
  }, [videosData]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { isIntersecting, target } = entry;
        const videoElement = target as HTMLVideoElement;

        if (isIntersecting) {
          if (videoElement.paused) {
            videoElement.play().catch((error) => {
              console.error("Error during video play:", error);
            });
          }
        } else {
          if (!videoElement.paused) {
            videoElement.pause();
            videoElement.currentTime = 0; // Reset playback position to the beginning
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [videos]);

  const handleVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    if (ref) {
      videoRefs.current[index] = ref;
    }
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  const getAudioIcon = () => {
    return muted ? (
      <Unmute className="w-8 h-8" />
    ) : (
      <Mute className="w-8 h-8" />
    );
  };

  return (
    <>
      <div className="p-2 w-[40%] fixed top-0 z-50 flex justify-end">
        <button className="fixed w-8 h-8" onClick={() => setMuted(!muted)}>
          {getAudioIcon()}
        </button>
      </div>
      <InfiniteScroll
        loadMore={() => {
          console.log("loading more");
          // if (videosData) setVideos([...videos, ...videosData]);
        }}
        hasMore={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div
          className="snap-y snap-mandatory h-screen w-screen mx:auto overflow-y-auto"
          ref={containerRef}
        >
          <button onClick={handleMute}>{muted ? <Unmute /> : <Mute />}</button>
          {videos?.map((video: Video, index: number) => (
            <VideoPlayer
              video={video}
              key={index}
              setVideoRef={handleVideoRef(index)}
              autoPlay={false}
              muted={muted}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};
