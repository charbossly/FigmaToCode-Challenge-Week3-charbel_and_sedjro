import React from "react";
import Grid3 from "../components/utils/grid/grid3";
import WorkWithUs from "../components/sections/callToAction/work_with_us";
import ButtonBlue from "../components/utils/buttons/button_blue";
import About from "../components/sections/Presentation/About";
import Stats from "../components/stats/Stats";
import Team from "../components/sections/team/Team";
import Free_trial from "../components/sections/callToAction/Free_trial";

export default function index() {
  return (
    <>
      <About />
      <Stats />
      <Team />
      <Free_trial />
      <Grid3 />
      <WorkWithUs /> 
      {/* <ButtonBlue title="Become member" icon={true} /> */}
    </>
  );
}
