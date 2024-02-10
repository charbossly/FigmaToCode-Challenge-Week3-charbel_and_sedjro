import React from "react";
import images from "../../../constants/images";
export default function index({ title, subtitle, source, destination }) {
  console.log(destination.link);
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center py-36 gap-y-8">
      <h4 className="text-t24 text-grayUi uppercase">{subtitle}</h4>
      <h1 className="text-t50 text-black font-bold">{title}</h1>
      <div className="flex justify-between gap-x-4 items-center">
        <a className="text-t16 text-blackBlueUi capitalize" href={source.link}>
          {source.title}
        </a>
        <img src={images.Breadcrumb} className="h-4" alt="" />
        <a className="text-grayUi text-t16 capitalize" href={destination.link}>
          {" "}
          {destination.title}
        </a>
      </div>
    </div>
  );
}
