import { ReactComponent as HomeIcon } from "../Assets/home-icon.svg";
import { ReactComponent as Subscribe } from "../Assets/subscribe.svg";
import { ReactComponent as Add } from "../Assets/add.svg";
import { ReactComponent as Options } from "../Assets/options.svg";
import { ReactComponent as Trophy } from "../Assets/trophy.svg";
import React from "react";

export const iconStyle =
  "h-8 w-8 cursor-pointer transition-transform transform hover:scale-110";

export const Footer = () => {
  return (
    <div className="flex justify-between py-10">
      <HomeIcon className={iconStyle} />
      <Subscribe className={iconStyle} />
      <Add className={iconStyle} />
      <Options className={iconStyle} />
      <Trophy className={iconStyle} />
    </div>
  );
};
