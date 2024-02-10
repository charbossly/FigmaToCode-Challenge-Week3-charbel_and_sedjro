import React from "react";
import images from "../../../constants/images";

export default function index() {
  const imagesList = [
    {
      image: images.Gal1,
    },
    {
      image: images.Gal4,
    },
    {
      image: images.Gal3,
    },
    {
      image: images.Gal2,
    },
    {
      image: images.Gal5,
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 gap-2">
      <div className="grid-cols-1">
        <img src={imagesList[0].image} alt="" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {imagesList.slice(1).map((element, index) => {
          return (
            <div key={index} className="grid-cols-1">
              <img src={element.image} className="h-full" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
