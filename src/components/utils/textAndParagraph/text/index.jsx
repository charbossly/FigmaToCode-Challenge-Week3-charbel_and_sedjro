import React from "react";

const Text = ({ title, paragraph }) => {
  return (
    <div>
      <div className="text-center">
        <div className="text-blackUi text-t32 font-bold capitalize my-4">
          {title}
        </div>
        <div className="font-montserrat text-xl leading-6 tracking-wide text-center my-4">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default Text;
