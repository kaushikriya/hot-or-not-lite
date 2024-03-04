import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dashboard } from "./Components/Dashboard";
import React from "react";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div>
          <Dashboard />
          Please
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
