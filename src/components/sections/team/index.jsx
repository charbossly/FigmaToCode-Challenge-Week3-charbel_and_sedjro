import React from "react";
import Text from "../../utils/textAndParagraph/text";

const Team = ({ title, description }) => {
  return (
    <div className="max-w-screen-lg mx-auto w-[70%] lg:w-[607px] h-[100px] my-16 lg:my-4">
      <Text title={title} paragraph={description} />
    </div>
  );
};

export default Team;
