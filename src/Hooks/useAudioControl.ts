import { useContext } from "react";
import {
  AudioControlContext,
  MutedContext,
} from "../Contexts/AudioControlContext";

const useAudioControl = (): MutedContext => {
  const audioControl = useContext(AudioControlContext);

  if (!audioControl) {
    throw new Error(
      "useAudioControl must be used within an AudioControlProvider"
    );
  }

  return audioControl;
};

export default useAudioControl;
