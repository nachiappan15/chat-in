import React from "react";
import { useParams } from "react-router-dom";

const MessageCard = (props) => {
  var {id}= useParams()   
  var sent = false;
  if(props.sentBy === id){
    sent = true
  }
  return (
    <div className={`w-full flex my-1 ${sent ? `flex-row-reverse`:`flex-row`}`}>
      <div>
        <span className="w-full  text-xs     mb-1 text-snowWhite  font-light">{props.senderName}</span>
      <div className={`lg:max-w-lg md:max-w-md  gap-2  rounded-lg   left-2  flex  flex-col justify-between ${sent ? `bg-search text-defaultYellow`  :`bg-snowWhite text-card`}  lg:px-2    font-medium text-sm`}>
        <span className="py-1">{props.text}</span>
        
      </div>
      <span className="w-full  text-xs  flex flex-row-reverse pr-2 mb-1 text-snowWhite  font-light">{props.time}</span>
    
      </div>
      </div>
  );
};

export default MessageCard;
