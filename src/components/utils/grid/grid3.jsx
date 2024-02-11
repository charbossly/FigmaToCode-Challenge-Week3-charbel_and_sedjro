import React from "react";
import Card from "./parts/card";

export default function grid3({ cardList }) {
  return (
    <div className="grid lg:grid-cols-3 gap-36 gap-x-1 my-8 mb-40">
      {cardList.map((elt, id) => {
        return <Card key={id} element={elt} />;
      })}
    </div>
  );
}
