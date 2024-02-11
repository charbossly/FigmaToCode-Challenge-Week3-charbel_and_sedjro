import React from "react";
import ButtonBlue from "../../utils/buttons/button_blue";
import images from "../../../constants/images";

const Free_trial = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-center">
      <div className="flex flex-col items-center justify-center w-[547px] h-[282px] gap-4 ">
        <h2 className="w-[80%] lg:w-full text-blackUi text-t32 text-center  font-bold font-montserrat capitalize">
          Start your 14 days free trial
        </h2>
        <p className="w-[80%] lg:w-full  font-montserrat text-xl leading-6 tracking-wide text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <ButtonBlue title="Try it free now" />
        <div className="flex space-x-4 mt-6">
          <a href="#">
            <img src={images.Twitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src={images.Facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src={images.InstagramO} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src={images.InstagramO} alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Free_trial;
