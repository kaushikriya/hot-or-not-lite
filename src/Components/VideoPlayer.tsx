import React, { useEffect, useRef } from "react";
import { Video } from "../Data/useGetVideos";

export const VideoPlayer = ({
  video,
  autoPlay,
  setVideoRef,
  muted,
}: {
  video: Video;
  autoPlay: boolean;
  setVideoRef: (index: HTMLVideoElement | null) => void;
  muted: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play();
    }
  }, [autoPlay]);

  const onVideoTap = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <div className="relative w-full h-full flex justify-center items-center snap-always snap-center transition-all">
      <div className="w-1/2 relative">
        <video
          loop
          onClick={onVideoTap}
          ref={(ref) => {
            videoRef.current = ref;
            setVideoRef(ref);
          }}
          className="h-screen object-fill z-10"
          muted={true}
        >
          <source src={video.url} type="video/mp4" className="object-fit" />
        </video>
      </div>
    </div>
  );
};
