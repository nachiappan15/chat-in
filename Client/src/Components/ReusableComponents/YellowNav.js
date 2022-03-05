import React from "react";

import { GrFormPrevious } from "react-icons/gr";
import {BsPeopleFill} from "react-icons/bs"
// import {BiDotsVerticalRounded} from "react-icons/bi"

const YellowNav = (props) => {
  return (
    <div className="bg-defaultYellow h-12 md:w-95 w-full   md:mt-2 md:rounded-md flex gap-4 md:gap-8 items-center px-4 md:px-10">
      <span className="font-bold  text-card cursor-pointer" onClick = {props.closeChat} >
        <GrFormPrevious />
      </span>
      <span className="font-bold text-card  ">{props.name}</span>
     {props.id &&  <span className="text-xs font-bold text-layer1-100 bg-white px-2 md:px-4 rounded-lg py-1">
       {props.id}
      </span>}
      <div className="cursor-pointer"  onClick={props.elementAppear} >
      <BsPeopleFill/> 
      </div>
    </div>
  );
};

export default YellowNav;