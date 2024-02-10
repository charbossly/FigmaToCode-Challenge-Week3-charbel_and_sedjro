import React from "react";
import Text from "../../utils/textAndParagraph/text";

const Team = ({ title, description }) => {
  return (
    <div className="max-w-screen-lg mx-auto w-[90%] lg:w-[607px] h-[100px] ">
      <Text title={title} paragraph={description} />
    </div>
  );
};

export default Team;
