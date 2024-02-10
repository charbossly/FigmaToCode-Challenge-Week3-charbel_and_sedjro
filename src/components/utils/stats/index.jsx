import React from "react";

const StatsComponents = ({ number, text }) => {
  return (
    <div>
      <div className="text-center">
        <div className="text-blackUi text-t48 font-bold uppercase">
          {number}
        </div>
        <div className="font-montserrat text-xl font-bold leading-6 tracking-wide text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default StatsComponents;
