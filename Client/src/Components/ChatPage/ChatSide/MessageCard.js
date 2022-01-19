import React from "react";

const MessageCard = (props) => {


  return (
    <div className={`w-full flex ${props.sent ? `flex-row-reverse`:`flex-row`}`}>
      <div className={`lg:max-w-lg md:max-w-md  gap-2  rounded-lg   left-2 my-2 flex  flex-col justify-between ${props.sent ? `bg-search text-defaultYellow`  :`bg-snowWhite text-card`}  lg:px-2    font-medium text-sm`}>
        <span className=" mt-2">{props.messageText}</span>
        <span className="w-full  text-xs  flex flex-row-reverse pr-2 mb-1  font-light">{props.time}</span>
      </div>
    </div>
  );
};

export default MessageCard;
