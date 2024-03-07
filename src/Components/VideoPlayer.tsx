import React, { useRef } from "react";
import { Video } from "../Data/useGetVideos";
import { ReactComponent as Views } from "../Assets/views.svg";
import Loader from "react-js-loader";

export const VideoPlayer = ({
  video,
  setVideoRef,
}: {
  video: Video;
  setVideoRef: (index: HTMLVideoElement | null) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onVideoTap = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  if (!video) return <div>Loading....</div>;

  return (
    <div className="grid relative w-full place-items-center">
      {video ? (
        <>
          <video
            loop
            onClick={onVideoTap}
            ref={(ref) => {
              videoRef.current = ref;
              setVideoRef(ref);
            }}
            className="w-full md:w-[50%] object-fill h-screen z-10"
            muted={true}
            autoPlay={true}
            id="videoPlayer"
          >
            <source src={video.url} type="video/mp4" className="object-fit" />
          </video>
          <div className="absolute z-20 flex gap-2 items-center justify-start w-[90%] md:w-[40%] bottom-[12%]">
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
        <div className="h-full w-full justify-center flex items-center">
          <Loader
            type="box-up"
            bgColor={"#E96B25"}
            color={"#E96B25"}
            title={"Loading"}
            size={100}
          />
        </div>
      )}
    </div>
  );
};
