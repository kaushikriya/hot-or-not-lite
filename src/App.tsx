import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dashboard } from "./Components/Dashboard";
import React from "react";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </div>
  );
}

export default App;
