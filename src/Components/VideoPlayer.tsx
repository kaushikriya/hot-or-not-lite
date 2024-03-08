import React, { useRef, useState } from "react";
import { Video } from "../Data/useGetVideos";
import { ReactComponent as Views } from "../Assets/views.svg";
import clsx from "clsx";
import useAudioControl from "../Hooks/useAudioControl";
import { AnimatedLoader } from "./AnimatedLoader";

export const VideoPlayer = ({
  video,
  setVideoRef,
}: {
  video: Video;
  setVideoRef: (index: HTMLVideoElement | null) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { muted } = useAudioControl();

  const onVideoTap = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="grid relative w-full place-items-center">
      {video ? (
        <div
          className={clsx("w-full h-full flex justify-center items-center", {
            hidden: isLoading,
          })}
        >
          <video
            loop
            onClick={onVideoTap}
            onLoadedData={handleLoadedData}
            ref={(ref) => {
              videoRef.current = ref;
              setVideoRef(ref);
            }}
            className="w-full md:w-[50%] object-fill h-screen z-10"
            autoPlay={true}
            muted={muted}
            id="videoPlayer"
          >
            <source src={video.url} type="video/mp4" className="object-fit" />
          </video>
          <div className="absolute z-20 min-h-screen h-full flex gap-2 items-center md:min-w-[50%] justify-start w-full md:w-[50%] bottom-[6%] ml-3">
            <img
              className="rounded-full h-10 w-10 border-white border-2"
              src={video.uploadedByAvatar}
              alt={video.uploadedByName}
            />
            <div className="grid text-white">
              <p>{video.uploadedByName}</p>
              <div className="flex items-center">
                <Views className="w-4 h-4 mr-1" />
                <p>2,500</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AnimatedLoader />
      )}
      {(isLoading ||
        (videoRef.current && videoRef.current.buffered.length > 0)) && (
        <>
          <AnimatedLoader />
        </>
      )}
    </div>
  );
};
