import React from "react";
import images from "../../../constants/images";
import Card from "./parts/card";

export default function grid3(/*{cardList}*/) {
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
    {
      title: "username",
      position: "Profession",
      image: images.Team4,
    },
    {
      title: "username",
      position: "Profession",
      image: images.Team5,
    },
    {
      title: "username",
      position: "Profession",
      image: images.Team6,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 gap-x-1">
      {cardList.map((elt) => {
        return <Card element={elt} />;
      })}
    </div>
  );
}
