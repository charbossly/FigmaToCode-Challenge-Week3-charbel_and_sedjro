import React from "react";

export default function work_with_us() {
  return (
    <div className="flex relative">
      <div className="w-full lg:w-2/3 h-[636px] bg-blueUi"></div>
      <div className="hidden lg:block w-1/3 h-[636px] bg-cover bg-center bg-image"></div>
      <div className="absolute inset-0   flex flex-col justify-center lg:justify-start lg:grid lg:grid-cols-2 items-center lg:pl-52">
        <div className="flex flex-col px-20 lg:px-0 text-center lg:text-left  items-center lg:items-start lg:grid-cols-1">
          <h4 className="text-white font-bold text-t16 my-2 lg:my-8 space-x-4">
            WORK WITH US
          </h4>
          <h1 className="text-t38 font-bold text-white  my-2 lg:my-8 space-x-4">
            Now Let’s grow Yours
          </h1>
          <p className="text-white font-medium text-t14  my-2 lg:my-8 lg:w-2/3 space-x-4">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="p-3 px-8 rounded-lg  border border-white text-center bg-transparent text-white text-t18">
            Button
          </button>
        </div>
        <div className="grid-cols-1"></div>
      </div>
    </div>
  );
}
