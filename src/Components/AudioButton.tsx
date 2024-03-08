import { ReactComponent as Mute } from "../Assets/mute.svg";
import { ReactComponent as Unmute } from "../Assets/unmute.svg";
import React from "react";
import useAudioControl from "../Hooks/useAudioControl";

export const AudioButton = () => {
  const { muted, handleChangeMuted } = useAudioControl();

  const getAudioIcon = () => {
    return muted ? (
      <Unmute className="w-9 h-9" />
    ) : (
      <Mute className="w-8 h-8" />
    );
  };

  const handleMute = () => {
    handleChangeMuted();
  };

  return (
    <button className="mr-3" onClick={handleMute}>
      {getAudioIcon()}
    </button>
  );
};
