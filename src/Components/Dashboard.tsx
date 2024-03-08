import React, { useEffect, useRef, useState } from "react";
import { Video, useGetVideos } from "../Data/useGetVideos";
import { VideoPlayer } from "./VideoPlayer";
import { ReactComponent as HotOrNot } from "../Assets/hotOrNot.svg";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import { AudioButton } from "./AudioButton";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
import { useErrorHandler } from "../Contexts/ErrorHandlerContext";
import { AnimatedLoader } from "./AnimatedLoader";

export const Dashboard = () => {
  const { data: videosData, isLoading } = useGetVideos();
  const [videos, setVideos] = useState<Video[]>([]);
  const { resetKey } = useErrorHandler();

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
        } else {
          videoElement.pause();
          videoElement.currentTime = 0;
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
  }, [videos]);

  const handleVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    if (ref) {
      videoRefs.current[index] = ref;
      observer.current?.observe(ref);
    }
  };

  const Row = ({ index, style }: { index: number; style: any }) => (
    <div
      className="snap-start w-[40%] shrink-0 transition-all  place-items-center snap-always"
      style={style}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback} key={resetKey}>
        <VideoPlayer
          video={videos[index]}
          key={index}
          setVideoRef={handleVideoRef(index)}
        />
      </ErrorBoundary>
    </div>
  );

  if (isLoading) {
    return <AnimatedLoader />;
  }

  return (
    <>
      <div className="w-screen flex justify-center items-center">
        <div className="w-full md:w-[50%] absolute top-[5%] z-50 flex justify-between py-2">
          <HotOrNot className="ml-[45%]" />
          <AudioButton />
        </div>
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
                itemSize={height}
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
