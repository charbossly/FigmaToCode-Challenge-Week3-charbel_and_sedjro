import React from "react";
import StatsComponents from "../../utils/stats";

const Stats = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col lg:flex-row  justify-center items-center">
        <div className=" w-full md:w-1/4 p-4  ">
          <StatsComponents number="15" text="Happy Customers" unit="K" />
        </div>
        <div className=" w-full md:w-1/4 p-4 ">
          <StatsComponents number="150" text="Monthly Visitors" unit="K" />
        </div>
        <div className=" w-full md:w-1/4 p-4 ">
          <StatsComponents number="15" text="Countries worldwide" />
        </div>
        <div className=" w-full md:w-1/4 p-4 ">
          <StatsComponents number="100" text="Partners" unit="+" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
