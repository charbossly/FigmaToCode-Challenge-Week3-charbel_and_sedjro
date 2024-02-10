import React from "react";
import TopPrice from "./parts/top_price";
import ButtonBlue from "../../utils/buttons/button_blue";
import images from "../../../constants/images";
export default function index() {
  const cardList = [
    {
      title: "free",
      price: 0,
      color: "blackBlueUi",
      textcolor: "white",
    },
    {
      title: "standard",
      price: 9.99,
      color: "blueUi",
      textcolor: "white",
    },

    {
      title: "premium",
      price: 19.99,
      color: "blueUi",
      textcolor: "white",
    },
  ];
  return (
    <div>
      <TopPrice />
      <div className="max-w-screen-lg mx-auto  gap-8 lg:gap-0.5 p-4 lg:p-0  flex  flex-col lg:flex-row justify-center lg:items-end lg:h-[700px]">
        {cardList.map((offer, index) => {
          return (
            <div
              key={index}
              className={`flex-1 hover:scale-105 hover:border-green-950 hover:bg-gray-400 transition-all duration-200 ease-in shadow-sm  flex flex-col gap-8 items-center justify-around py-16 border rounded-lg border-blueUi ${
                index % 2 == 0 ? "" : "h-full bg-blackBlueUi pb-24 text-white"
              }`}
            >
              <h1
                className={`font-bold text-t24 uppercase ${
                  index % 2 == 0 ? "text-blackBlueUi" : "text-white"
                }`}
              >
                {offer.title}
              </h1>
              <p
                className={`text-t18 w-1/2 text-center font-medium ${
                  index % 2 == 0 ? "text-grayUi" : "text-white"
                }`}
              >
                Organize across all apps by hand
              </p>
              <div className="flex items-center gap-2">
                <h4 className="text-t38 font-extrabold text-blueUi">
                  {offer.price}
                </h4>
                <div>
                  <p className="text-blueUi text-t28 font-extrabold">$</p>
                  <p className="text-t18 text-blueUi">Per Month</p>
                </div>
              </div>
              <ul
                className={`flex flex-col gap-y-4 mb-2 ${
                  index % 2 == 0 ? "text-black" : "text-white"
                }`}
              >
                <li className="text-t16 font-bold  flex gap-x-3  items-center">
                  <div className="p-1 w-6 h-6 bg-green-500 bg-opacity-80 rounded-full flex items-center justify-center">
                    <img src={images.Check} alt="" className="mx-6" />
                  </div>
                  <p>Unlimited product updates</p>
                </li>
                <li className="text-t16 font-bold  flex gap-x-3  items-center">
                  <div className="p-1 w-6 h-6 bg-green-500 bg-opacity-80 rounded-full flex items-center justify-center">
                    <img src={images.Check} alt="" className="mx-6" />
                  </div>
                  <p>Unlimited product updates</p>
                </li>
                <li className="text-t16 font-bold  flex gap-x-3 items-center">
                  <div className="p-1 w-6 h-6 bg-green-500 bg-opacity-80 rounded-full flex items-center justify-center">
                    <img src={images.Check} alt="" className="mx-6" />
                  </div>
                  <p>Unlimited product updates</p>
                </li>
                <li className="text-t16 font-bold flex gap-x-3  items-center">
                  <div className="p-1 w-6 h-6 bg-gray-500 bg-opacity-80 rounded-full flex items-center justify-center">
                    <img src={images.Check} alt="" className="mx-6" />
                  </div>
                  <p>1GB Cloud storage</p>
                </li>
                <li className="text-t16 font-bold  flex gap-x-3  items-center">
                  <div className="p-1 w-6 h-6 bg-gray-500 bg-opacity-80 rounded-full flex items-center justify-center">
                    <img src={images.Check} alt="" className="mx-6" />
                  </div>
                  <p>Email and community support</p>
                </li>
              </ul>
              <div className="w-4/5">
                <ButtonBlue
                  title="Try for free"
                  color={offer.color}
                  textcolor={offer.textcolor}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
