import React from "react";
import { useParams } from "react-router-dom";

const MessageCard = (props) => {
  var {id}= useParams()   
  var sent = false;
  if(props.sentBy == id){
    sent = true
  }

  return (
    <div className={`w-full flex ${sent ? `flex-row-reverse`:`flex-row`}`}>
      <div className={`lg:max-w-lg md:max-w-md  gap-2  rounded-lg   left-2  flex  flex-col justify-between ${sent ? `bg-search text-defaultYellow`  :`bg-snowWhite text-card`}  lg:px-2    font-medium text-sm`}>
        <span className=" mt-2">{props.text}</span>
        <span className="w-full  text-xs  flex flex-row-reverse pr-2 mb-1  font-light">{props.time}</span>
      </div>
    </div>
  );
};

export default MessageCard;
