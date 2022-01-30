import React from "react";

import { GrFormPrevious } from "react-icons/gr";
import { GiTimeBomb } from "react-icons/gi";
import {BsPeopleFill} from "react-icons/bs"
import {BiDotsVerticalRounded} from "react-icons/bi"

const YellowNav = (props) => {
  return (
    <div className="bg-defaultYellow h-12 w-95   mt-2 rounded-md flex gap-8 items-center px-10">
      <span className="font-bold text-card cursor-pointer"  >
        <GrFormPrevious />
      </span>
      <span className="font-bold text-card  ">{props.name}</span>
      <span className="text-xs font-bold text-layer1-100 bg-white  px-4 rounded-lg py-1">
       {props.id}
      </span>
      <div className="cursor-pointer" >
      <BsPeopleFill/> 
      </div>
      <div className=" ml-auto cursor-pointer ">
        <BiDotsVerticalRounded/>
      </div>
    </div>
  );
};

export default YellowNav;
