import React from "react";

import { GrFormPrevious } from "react-icons/gr";
import { GiTimeBomb } from "react-icons/gi";

const YellowNav = (props) => {
  return (
    <div className="bg-defaultYellow h-12 w-95   mt-2 rounded-md flex gap-8 items-center px-10">
      <span className="font-bold text-card cursor-pointer" onClick={props.openChat}>
        <GrFormPrevious />
      </span>
      <span className="font-bold text-card  ">Friend!</span>
      <span className="text-xs font-bold text-layer1-100 bg-white  px-4 rounded-lg py-1">
        #48674567
      </span>
    </div>
  );
};

export default YellowNav;
