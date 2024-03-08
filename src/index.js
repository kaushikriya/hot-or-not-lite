import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./Components/ErrorFallback";
import { AudioControlProvider } from "./Contexts/AudioControlContext";
import { ErrorHandlerProvider } from "./Contexts/ErrorHandlerContext";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorHandlerProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <AudioControlProvider>
            <App />
          </AudioControlProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </ErrorHandlerProvider>
  </React.StrictMode>
);

reportWebVitals();
