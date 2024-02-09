import React from "react";
import images from "../../../constants/images";

export default function button_blue({ title, icon }) {
  return (
    <a
      href="#"
      className="px-6 flex py-3 justify-center items-center gap-x-5 text-white rounded-lg  bg-blueUi"
    >
      <span>{title} </span>
      {icon && <img src={images.Arrow} alt="" />}
    </a>
  );
}
