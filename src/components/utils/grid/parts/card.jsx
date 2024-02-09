import React from "react";
import Socials from "./socials";

export default function Card({ element }) {
  return (
    <div className="grid-cols-1 flex flex-col justify-center items-center gap-y-2">
      <img src={element.image} alt="" />
      <h2>{element.title}</h2>
      <p>{element.position}</p>
      <Socials />
    </div>
  );
}
