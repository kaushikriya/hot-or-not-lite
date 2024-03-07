import React, { useContext, useRef, useState } from "react";
import { Video } from "../Data/useGetVideos";
import { ReactComponent as Views } from "../Assets/views.svg";
import Loader from "react-js-loader";
import clsx from "clsx";
import { AudioControlContext } from "../Contexts/AudioControlContext";

export const VideoPlayer = ({
  video,
  setVideoRef,
}: {
  video: Video;
  setVideoRef: (index: HTMLVideoElement | null) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { muted } = useContext(AudioControlContext);

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

  const videoLoader = (
    <div className="h-screen w-[90%] md:w-[50%] justify-center flex items-center bg-black animate-pulse">
      <Loader
        type="box-up"
        bgColor={"#E96B25"}
        color={"#E96B25"}
        title={"Loading"}
        size={100}
      />
    </div>
  );

  return (
    <div className="grid relative w-full place-items-center">
      {video ? (
        <>
          <video
            loop
            onClick={onVideoTap}
            onLoadedData={handleLoadedData}
            ref={(ref) => {
              videoRef.current = ref;
              setVideoRef(ref);
            }}
            className={clsx("w-full md:w-[50%] object-fill h-screen z-10", {
              hidden: isLoading,
            })}
            autoPlay={true}
            muted={muted}
            id="videoPlayer"
          >
            <source src={video.url} type="video/mp4" className="object-fit" />
          </video>
          <div className="absolute z-20 flex gap-2 items-center justify-start w-[90%] md:w-[45%] bottom-[7%]">
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
        </>
      ) : (
        <Loader />
      )}
      {(isLoading ||
        (videoRef.current && videoRef.current.buffered.length > 0)) && (
        <>{videoLoader}</>
      )}
    </div>
  );
};
