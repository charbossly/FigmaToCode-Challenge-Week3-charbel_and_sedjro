import React from "react";
import images from "../../../../constants/images";

export default function top_price() {
  return (
    <div className="flex items-center justify-center gap-x-4 my-8">
      <span className="text-black text-t16 font-semibold">Monthly</span>
      <img src={images.Switcher} alt="" />
      <span className="text-black text-t16 font-semibold">Yearly</span>
      <button className="p-2 px-4 rounded-2xl text-blueUi bg-blueUi bg-opacity-20 text-center text-t16">
        Save 25%
      </button>
    </div>
  );
}
