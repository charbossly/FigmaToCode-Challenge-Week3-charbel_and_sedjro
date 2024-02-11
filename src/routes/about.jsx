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

export default function about() {
  return (
    <div>
      <Hero
        title={"ABOUT US"}
        subtitle={"ABOUT COMPANY"}
        description={
          "We know how large objects will act, but things on a small scale"
        }
        button_title={"Get Quote Now"}
        image={images.AboutPresentation}
      />
      <ProblemsTrying />
      {/* <TitlePage
        title={"Simple Pricing"}
        subtitle={"PRICING"}
        source={{ title: "Home", link: "/" }}
        destination={{ title: "Pricing", link: "/" }}
      /> */}
      <Stats />
      <Video />
      <Team
        title={"Meet our team"}
        description={
          "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
        }
      />
      <OurTeam />
      <div className="bg-lightGrayUi py-8">
        <Team
          title={"Big Companies are there"}
          description={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        />
        <div className="my-20 lg:my-16">
          <Sponsors />
        </div>
      </div>
      <WorkWithUs />

      {/*       
      <Price />

      <Adress />
      <Gallery />
      

      <FreeTrial />

      <Faq /> */}
    </div>
  );
}
