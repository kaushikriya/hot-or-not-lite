import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import React from "react";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="h-screen w-screen min-w-[40%] backdrop-blur-xl flex justify-center">
      <div className="w-full h-full">
        <Dashboard />
      </div>
      <div className="p-2 grid fixed bottom-[2%] md:bottom-[1%] z-50 w-[90%] md:w-[45%] md:min-w-[45%]">
        <Sidebar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
