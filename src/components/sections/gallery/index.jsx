import React from "react";
import images from "../../../constants/images";
import { useState } from "react";
export default function index() {
  const [imagesList, setImagesList] = useState([
    {
      image: images.Gal1,
      name: "Gal1",
    },
    {
      image: images.Gal4,
      name: "Gal2",
    },
    {
      image: images.Gal3,
      name: "Gal3",
    },
    {
      image: images.Gal2,
      name: "Gal4",
    },
    {
      image: images.Gal5,
      name: "Gal5",
    },
  ]);
  const changerFocus = (element) => {
    let itemIndex = imagesList.findIndex((item) => item.name === element.name);
    let newArray = [...imagesList];
    if (itemIndex !== -1) {
      let item = newArray.splice(itemIndex, 1)[0]; // Remove the item from original position
      newArray.unshift(item); // Add the item to the beginning of the array
    }
    console.log(newArray);
    setImagesList(newArray);
  };
  return (
    <div className="max-w-screen-lg  my-8 mx-auto grid lg:grid-cols-2 gap-2">
      <div className="grid-cols-1 h-[384.63px]">
        <img className="h-full object-cover" src={imagesList[0].image} alt="" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {imagesList.slice(1).map((element, index) => {
          return (
            <div
              key={index}
              className="grid-cols-1 cursor-pointer"
              onClick={() => changerFocus(element)}
            >
              <img
                src={element.image}
                className="h-full duration-300 transition-all ease-out"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
