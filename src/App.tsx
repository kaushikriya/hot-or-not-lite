import "./App.css";
import React from "react";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";
import { HireMe } from "./Components/HireMe";
import { Dashboard } from "./Components/Dashboard";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./Components/ErrorFallback";
import { useErrorHandler } from "./Contexts/ErrorHandlerContext";

function App() {
  const { resetKey } = useErrorHandler();
  return (
    <div className="h-screen w-screen min-w-[40%] backdrop-blur-xl flex justify-center">
      <div className="ml-5 mt-5 z-50 fixed left-0">
        <HireMe />
      </div>
      <ErrorBoundary FallbackComponent={ErrorFallback} key={resetKey}>
        <div className="w-full h-full">
          <Dashboard />
        </div>
      </ErrorBoundary>
      <div className="px-2 grid fixed bottom-0 md:bottom-[1%] z-50 w-[90%] md:w-[45%] md:min-w-[45%]">
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
