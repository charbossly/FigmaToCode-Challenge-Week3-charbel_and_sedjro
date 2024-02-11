import React from "react";
import Price from "../components/sections/price";
import Team from "../components/sections/team";
import WorkWithUs from "../components/sections/callToAction/work_with_us";
import Stats from "../components/sections/stats";
import OurTeam from "../components/sections/callToAction/our_team";
import Video from "../components/sections/medias/video";
import FreeTrial from "../components/sections/callToAction/freeTrial";
import ProblemsTrying from "../components/sections/infos/problems_trying";
import Hero from "../components/sections/hero";
import TitlePage from "../components/sections/titlePage";
import Gallery from "../components/sections/gallery";
import Adress from "../components/sections/adress";
import images from "../constants/images";
import Faq from "../components/sections/faq";
import Sponsors from "../components/sections/sponsors";

export default function contact() {
  return (
    <div>
      <Hero
        title={"Get in touch today!"}
        subtitle={"CONTACT US"}
        description={
          "We know how large objects will act, but things on a small scale"
        }
        button_title={"Get Quote Now"}
        image={images.contactPresentation}
      />
      <Team
        title={"Meet Our Team"}
        description={"We help small businesses with bid ideas"}
      />
      <Adress />
      <FreeTrial
        title={"Let's Talk"}
        icon={true}
        subtitle={"WE Can't Wait to meet YOU"}
      />
    </div>
  );
}
