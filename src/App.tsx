import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import React from "react";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="h-full w-full flex items-center justify-center backdrop-blur-xl">
      <Dashboard />
      <div className="p-2 grid fixed bottom-[8%] md:bottom-[2%] z-50 w-[90%] md:w-[40%]">
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
