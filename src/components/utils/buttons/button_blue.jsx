import React from "react";
import images from "../../../constants/images";

export default function button_blue({ title, icon, textcolor, color }) {
  return (
    <a
      href="#"
      className={`hover:bg-blackBlueUi px-6 flex py-3 justify-center items-center gap-x-5  rounded-lg  ${
        color ? ` bg-${color}` : " bg-blueUi"
      } ${textcolor ? ` text-${textcolor}` : "text-white"} `}
    >
      <span>{title} </span>
      {icon && <img src={images.Arrow} alt="" />}
    </a>
  );
}
