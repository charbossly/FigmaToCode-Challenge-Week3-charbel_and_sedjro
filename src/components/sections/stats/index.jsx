import React from "react";
import StatsComponents from "../../utils/stats";

const Stats = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col lg:flex-row  justify-center items-center">
        <div className=" w-full md:w-1/4 p-4  ">
          <StatsComponents number="15K" text="Happy Customers" />
        </div>
        <div className=" w-full md:w-1/4 p-4 ">
          <StatsComponents number="150K" text="Monthly Visitors" />
        </div>
        <div className=" w-full md:w-1/4 p-4 ">
          <StatsComponents number="15" text="Countries worldwide" />
        </div>
        <div className=" w-full md:w-1/4 p-4 ">
          <StatsComponents number="100+" text="Partners" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
