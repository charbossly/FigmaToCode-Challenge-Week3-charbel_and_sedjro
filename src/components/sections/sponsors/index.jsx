import React from "react";
import images from "../../../constants/images";
export default function index() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center gap-x-12 justify-center">
      <img src={images.Sponsor1} alt="" />
      <img src={images.Sponsor2} alt="" />
      <img src={images.Sponsor3} alt="" />
      <img src={images.Sponsor4} alt="" />
      <img src={images.Sponsor5} alt="" />
      <img src={images.Sponsor6} alt="" />
    </div>
  );
}
