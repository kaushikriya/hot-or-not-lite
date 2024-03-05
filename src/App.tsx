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
  const iconStyle =
    "h-8 w-8 cursor-pointer transition-transform transform hover:scale-110";

  return (
    <div className="relative h-screen w-full flex items-center justify-center backdrop-blur-xl">
      <Dashboard />
      <div className="p-2 grid fixed bottom-0 z-50 w-[40%]">
        <div className="grid py-3 justify-end my-8">
          <Like className={iconStyle} />
          <Share className={iconStyle} />
          <Hot className={iconStyle} />
        </div>
        <div className="flex justify-between my-2">
          <HomeIcon className={iconStyle} />
          <Subscribe className={iconStyle} />
          <Add className={iconStyle} />
          <Options className={iconStyle} />
          <Trophy className={iconStyle} />
        </div>
      </div>
    </div>
  );
}

export default App;
