import React from "react";
import Socials from "./socials";

export default function Card({ element }) {
  return (
    <div className="grid-cols-1 flex flex-col justify-center items-center gap-y-2 group relative">
      <img
        src={element.image}
        alt=""
        className="mb-6 group-hover:brightness-50 transition-all duration-200 ease-in "
      />
      <div className="flex items-center  justify-center transition-all duration-200 ease-in  flex-col gap-y-2 group-hover:absolute mx-auto inset-0">
        <h2 className="text-t18 font-bold text-blackBlueUi group-hover:text-white  capitalize">
          {element.title}
        </h2>
        <p className="text-grayUi font-bold text-t14 group-hover:text-white">
          {element.position}
        </p>
        <Socials />
      </div>
    </div>
  );
}
