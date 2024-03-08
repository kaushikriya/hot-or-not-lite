import React, { createContext, useContext, useState } from "react";

const defaultValue = {
  resetKey: 0,
  handleReset: () => {},
};

export interface ErrorContext {
  resetKey: number;
  handleReset: () => void;
}

const ErrorHandlerContext = createContext<ErrorContext>(defaultValue);

export function useErrorHandler() {
  return useContext(ErrorHandlerContext);
}

export function ErrorHandlerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey((prevKey) => prevKey + 1);
  };

  const value = {
    resetKey,
    handleReset,
  };

  return (
    <ErrorHandlerContext.Provider value={value}>
      {children}
    </ErrorHandlerContext.Provider>
  );
}
