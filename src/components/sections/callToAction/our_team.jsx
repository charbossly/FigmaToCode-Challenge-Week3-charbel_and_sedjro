import React from "react";
import Grid3 from "../../utils/grid/grid3";
import images from "../../../constants/images";

export default function our_team() {
  const cardList = [
    {
      title: "username",
      position: "Profession",
      image: images.Team1,
    },
    {
      title: "username",
      position: "Profession",
      image: images.Team2,
    },
    {
      title: "username",
      position: "Profession",
      image: images.Team3,
    },
    // {
    //   title: "username",
    //   position: "Profession",
    //   image: images.Team4,
    // },
    // {
    //   title: "username",
    //   position: "Profession",
    //   image: images.Team5,
    // },
    // {
    //   title: "username",
    //   position: "Profession",
    //   image: images.Team6,
    // },
  ];
  return (
    <div className="max-w-screen-lg mx-auto">
      <Grid3 cardList={cardList} />
    </div>
  );
}
