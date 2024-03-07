import React, { createContext, useState } from "react";

const defaultValue = {
  muted: true,
  handleChangeMuted: () => {},
};

export interface MutedContext {
  muted: boolean;
  handleChangeMuted: () => void;
}

export const AudioControlContext = createContext<MutedContext>(defaultValue);

export const AudioControlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [muted, setMuted] = useState(true);

  console.log(muted);

  const handleChangeMuted = () => {
    console.log("setting muted in context", !muted);
    setMuted(!muted);
  };

  return (
    <AudioControlContext.Provider value={{ muted, handleChangeMuted }}>
      {children}
    </AudioControlContext.Provider>
  );
};
