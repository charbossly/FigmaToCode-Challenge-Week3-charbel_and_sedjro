import React from "react";

const Text = ({ title, paragraph }) => {
  return (
    <div>
      <div className="text-center">
        <div className="text-blackUi text-t32 font-bold capitalize">
          {title}
        </div>
        <div className="font-montserrat text-xl leading-6 tracking-wide text-center">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default Text;
