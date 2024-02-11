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
import Pricing from "../components/sections/price";

export default function () {
  return (
    <div>
      <TitlePage
        title={"Simple Pricing"}
        subtitle={"PRICING"}
        source={{ title: "Home", link: "/" }}
        destination={{ title: "Pricing", link: "/" }}
      />
      <div className="bg-lightGrayUi py-12">
        <Team
          title={"Pricing"}
          description={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        />{" "}
        <Pricing />
        <Team title={""} description={"Treat over by 4000 bigs companies "} />
        <Sponsors />
      </div>
      <div className="my-24">
        <Team
          title={"Pricing FAQ"}
          description={
            "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
          }
        />
        <Faq />
        <Team
          title={""}
          description={"Haven't you got your answer ? Contact your support "}
        />
      </div>

      <FreeTrial
        title={"Start your 14 days free trial"}
        subtitle={
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent."
        }
        icon={false}
      />
    </div>
  );
}
