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

export default function career() {
  return (
    <div>
      <TitlePage
        title={"Careers"}
        subtitle={"Your Careers"}
        source={{ title: "Home", link: "/" }}
        destination={{ title: "Careers", link: "/" }}
      />
      <Team
        title={"Meet Our Team"}
        description={"We help small businesses with bid ideas"}
      />
      <OurTeam />
      <Team
        title={"Introduction?"}
        description={"We help small businesses with bid ideas"}
      />
      <Team
        title={"Why Join Us"}
        description={
          "Highlight the unique benefits and opportunities that your company offers to employees, such as professional development, a positive work environment, cutting-edge projects, and any specific perks or initiatives."
        }
      />
      <div className="my-16">
        <Team
          title={"Career Development"}
          description={
            "Discuss opportunities for career growth and advancement within your organization, such as mentorship programs, training, or educational support."
          }
        />
      </div>
      <FreeTrial
        title={"Let's Talk"}
        icon={true}
        subtitle={"WE Can't Wait to meet YOU"}
      />
    </div>
  );
}
