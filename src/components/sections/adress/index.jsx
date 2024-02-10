import React from "react";
import images from "../../../constants/images";

export default function index() {
  const adresses = [
    {
      image: images.Map,
    },
    {
      image: images.Telephone,
    },
    {
      image: images.Messagerie,
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto  gap-8 lg:gap-0.5 p-4 lg:p-0  flex  flex-col lg:flex-row justify-center lg:items-end lg:h-[700px]">
      {adresses.map((addr, index) => {
        return (
          <div
            className={`flex-1  flex flex-col gap-8 items-center justify-around py-16  ${
              index % 2 == 0 ? "" : "bg-blackBlueUi  text-white"
            }`}
          >
            <img src={addr.image} alt="" />
            <div className="text-center">
              <h1
                className={`font-bold text-t14 uppercase  ${
                  index % 2 == 0 ? "text-blackBlueUi" : "text-white"
                }`}
              >
                {"georgia.young@example.com"}
              </h1>
              <p
                className={`mt-4 text-t14  font-medium ${
                  index % 2 == 0 ? "text-grayUi" : "text-white"
                }`}
              >
                georgia.young@ple.com
              </p>
            </div>
            <p
              className={`text-t18 w-1/2 text-center font-medium ${
                index % 2 == 0 ? "text-grayUi" : "text-white"
              }`}
            >
              Get Support
            </p>

            <button className="p-3 px-16 rounded-3xl  border border-blueUi text-blueUi text-center bg-transparent  text-t18">
              Submit Request
            </button>
          </div>
        );
      })}
    </div>
  );
}
