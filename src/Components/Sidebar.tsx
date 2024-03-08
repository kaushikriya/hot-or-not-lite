import React from "react";
import { ReactComponent as Like } from "../Assets/like.svg";
import { ReactComponent as Share } from "../Assets/share.svg";
import { ReactComponent as Hot } from "../Assets/hot.svg";
import { iconStyle } from "./Footer";

export const Sidebar = () => {
  return (
    <div className="grid right-2 md:right-[26%] fixed bottom-[10%] gap-8 justify-end">
      <Like className={iconStyle} />
      <Share className={iconStyle} />
      <Hot className={iconStyle} />
    </div>
  );
};
