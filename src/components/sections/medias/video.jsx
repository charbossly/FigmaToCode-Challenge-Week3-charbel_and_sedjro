import React from "react";
import images from "../../../constants/images";
import videos from "../../../constants/video";
import { useState } from "react";

export default function video() {
  const [autoplay, setautoplay] = useState(true);
  return (
    <div className="max-w-screen-lg mx-auto relative w-[90%] lg:w-[989px] lg:h-[540px] my-28">
      <video
        src={videos.Video}
        className="rounded-xl"
        autoPlay={autoplay}
      ></video>
      <div
        onClick={() => setautoplay(!autoplay)}
        className="rounded-full bg-blueUi p-8 absolute cursor-pointer left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <img src={images.Play} alt="" />
      </div>
    </div>
  );
}
