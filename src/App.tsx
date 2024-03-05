import "./App.css";
import { Dashboard } from "./Components/Dashboard";
import React from "react";
import { ReactComponent as HomeIcon } from "./Assets/home-icon.svg";
import { ReactComponent as Subscribe } from "./Assets/subscribe.svg";
import { ReactComponent as Add } from "./Assets/add.svg";
import { ReactComponent as Options } from "./Assets/options.svg";
import { ReactComponent as Trophy } from "./Assets/trophy.svg";
import { ReactComponent as Like } from "./Assets/like.svg";
import { ReactComponent as Share } from "./Assets/share.svg";
import { ReactComponent as Hot } from "./Assets/hot.svg";

function App() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <Dashboard />
      <div className="p-2 grid fixed bottom-0 z-50 w-[40%]">
        <div className="grid py-3 justify-end">
          <Like className="my-8 h-8 w-8" />
          <Share className="my-8 h-8 w-8" />
          <Hot className="my-8 h-8 w-8" />
        </div>
        <div className="flex justify-between">
          <HomeIcon className="h-8 w-8" />
          <Subscribe className="h-8 w-8" />
          <Add className="h-8 w-8" />
          <Options className="h-8 w-8" />
          <Trophy className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

export default App;
