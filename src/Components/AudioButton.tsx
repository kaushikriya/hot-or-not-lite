import { useState, useEffect, useCallback } from "react";
import { ReactComponent as Mute } from "../Assets/mute.svg";
import { ReactComponent as Unmute } from "../Assets/unmute.svg";
import React from "react";

export const AudioButton = () => {
  const [muted, setMuted] = useState(true);

  const getAudioIcon = () => {
    return muted ? (
      <Unmute className="w-9 h-9" />
    ) : (
      <Mute className="w-8 h-8" />
    );
  };

  const handleMute = useCallback(() => {
    setMuted(!muted);
    const videoPlayers = document.getElementsByTagName("video");

    // Only 5 videos are rendered at a time in the DOM because of virtual list
    for (let i = 0; i < videoPlayers.length; i++) {
      const videoPlayer = videoPlayers[i];
      videoPlayer.muted = !muted;
    }
  }, [muted]);

  useEffect(() => {
    return () => {
      const videoPlayers = document.getElementsByTagName("video");
      for (let i = 0; i < videoPlayers.length; i++) {
        const videoPlayer = videoPlayers[i];
        videoPlayer.removeEventListener("play", handleMute);
      }
    };
  }, [handleMute]);

  return (
    <button className="col-span-1 ml-[12%]" onClick={handleMute}>
      {getAudioIcon()}
    </button>
  );
};
