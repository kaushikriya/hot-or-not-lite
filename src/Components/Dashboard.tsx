import React, { useEffect, useRef, useState } from "react";
import { Video, useGetVideos } from "../Data/useGetVideos";
import { VideoPlayer } from "./VideoPlayer";
import { ReactComponent as Mute } from "../Assets/mute.svg";
import { ReactComponent as Unmute } from "../Assets/unmute.svg";
import { ReactComponent as HotOrNot } from "../Assets/hotOrNot.svg";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

export const Dashboard = () => {
  const { data: videosData } = useGetVideos();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    if (videosData) setVideos(videosData);
  }, [videosData]);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

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
          videoElement.muted = false;
        } else {
          if (!videoElement.paused) {
            videoElement.pause();
            videoElement.currentTime = 0;
          }
          videoElement.muted = true;
        }
      });
    };

    observer.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    videoRefs.current.forEach((videoRef) => {
      observer.current?.observe(videoRef);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [videos, videoRefs]);

  const handleVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    if (ref) {
      videoRefs.current[index] = ref;
      observer.current?.observe(ref);
    }
  };

  const getAudioIcon = () => {
    return muted ? (
      <Unmute className="w-9 h-9" />
    ) : (
      <Mute className="w-8 h-8" />
    );
  };

  const Row = ({ index, style }: { index: number; style: any }) => (
    <div
      className="snap-start w-[40%] shrink-0 transition-all  place-items-center snap-always"
      ref={containerRef}
      style={style}
    >
      <VideoPlayer
        video={videos[index]}
        key={index}
        setVideoRef={handleVideoRef(index)}
        muted={muted}
      />
    </div>
  );

  return (
    <>
      <div className="w-full absolute top-[5%] z-50 grid grid-cols-3">
        <div className="col-span-2 flex justify-center ml-[50%]">
          <HotOrNot />
        </div>
        <button
          className="col-span-1 flex justify-end"
          onClick={() => setMuted(!muted)}
        >
          {getAudioIcon()}
        </button>
      </div>
      <InfiniteLoader
        isItemLoaded={(index) => index < videos.length}
        itemCount={videos.length + 1}
        loadMoreItems={() => {
          if (videosData && videosData?.length > 0) {
            setVideos(videos.concat(videosData));
          }
        }}
      >
        {({ onItemsRendered, ref }) => (
          <AutoSizer>
            {({ height, width }: { height: number; width: number }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={videos.length + 1}
                itemSize={1000}
                onItemsRendered={onItemsRendered}
                ref={ref}
                style={{ scrollSnapType: "y mandatory" }}
              >
                {Row}
              </FixedSizeList>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </>
  );
};
