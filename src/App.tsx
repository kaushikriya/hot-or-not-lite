import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import React from "react";
import { ReactComponent as HomeIcon } from "./Assets/home-icon.svg";
import { ReactComponent as Subscribe } from "./Assets/subscribe.svg";
import { ReactComponent as Add } from "./Assets/add.svg";
import { ReactComponent as Options } from "./Assets/options.svg";
import { ReactComponent as Trophy } from "./Assets/trophy.svg";

function App() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <Dashboard />
      <div className="flex p-2 fixed bottom-0 z-50 w-[40%] justify-between">
        <HomeIcon className="h-8 w-8" />
        <Subscribe className="h-8 w-8" />
        <Add className="h-8 w-8" />
        <Options className="h-8 w-8" />
        <Trophy className="h-8 w-8" />
      </div>
    </div>
  );
}

export default App;
