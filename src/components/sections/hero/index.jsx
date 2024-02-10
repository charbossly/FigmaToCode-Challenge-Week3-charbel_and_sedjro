import React from "react";
import ButtonBlue from "../../utils/buttons/button_blue";
export default function index({
  title,
  subtitle,
  description,
  image,
  button_title,
}) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-y-24 lg:gap-y-0 sm:flex-row">
        <div className="pt-24 m-2  w-full sm:w-1/2">
          <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start">
            <div className="hidden sm:block text-blackUi font-bold uppercase py-4 my-2 text-t18 ">
              {subtitle}
            </div>
            <div className="text-blackUi text-t42 font-bold uppercase py-4 my-2 ">
              {title}
            </div>
            <p className="text-t18 text-center lg:text-left text-grayUi  py-4 my-2 w-[60%]">
              {description}
            </p>
            <div className=" my-2  lg:w-[193px]">
              <ButtonBlue title={button_title} />
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2">
          <img src={image} alt="Image" className="z-20 relative" />
          {/* Cercles */}
          <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[415px] lg:h-[415px] rounded-full bg-pinkUi  z-10 "></div>
          <div className="absolute   top-[7%] left-[3%] transform -translate-x-[3%] -translate-y-[7%]  w-[67px] h-[67px] lg:w-[77px] lg:h-[77px] rounded-full bg-pinkUi  z-10 "></div>
          {/* <div className="absolute   top-[7%] left-[5%] transform -translate-x-[5%] -translate-y-[7%] w-[77px] h-[77px] rounded-full bg-pinkUi  z-10 "></div> */}
          <div className="absolute  right-[2%] lg:-right-[2%] top-[25%] transform -translate-x-[2%] lg:translate-x-[2%] -translate-y-[25%] w-[14px] h-[14px] rounded-full bg-indigoUi  z-10 "></div>
          <div className="absolute   right-[1%] top-[47%] transform -translate-x-[1%] -translate-y-[47%] w-[30px] h-[30px] rounded-full bg-pinkUi  z-10 "></div>
          <div className="absolute   left-[5%] bottom-[25%] transform -translate-x-[5%] -translate-y-[25%] w-[14px] h-[14px] rounded-full bg-indigoUi  z-10 "></div>
        </div>
      </div>
    </div>
  );
}
