import { ReactComponent as Mute } from "../Assets/mute.svg";
import { ReactComponent as Unmute } from "../Assets/unmute.svg";
import React, { useContext } from "react";
import { AudioControlContext } from "../Contexts/AudioControlContext";

export const AudioButton = () => {
  const { muted, handleChangeMuted } = useContext(AudioControlContext);

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
    <button
      className="col-span-1 ml-[50%] md:ml-[12%] pl-3 md:pl-1"
      onClick={handleMute}
    >
      {getAudioIcon()}
    </button>
  );
};
