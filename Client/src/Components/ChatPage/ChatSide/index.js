import React from "react";
import YellowNav from "./YellowNav";

// icons
import {IoSendSharp} from "react-icons/io5"
import MessageCard from "./MessageCard";

const ChatSide = (props) => {
  console.log(props.chatRoomData);
  return (
    <div className="h-full   w-9/12  flex flex-col items-center gap-4">
      <YellowNav name = {props.chatRoomData.name} id= {props.chatRoomData.RoomId} />
      <div className="w-95 h-56 flex-auto  mb-4 bg-layer1-500 rounded-lg flex flex-col ">
        <div className="  h-full flex  flex-col-reverse   lg:mx-8 md:mx-2  px-2 flex-nowrap overflow-scroll">
          
        

        </div>
        <div className=" h-10 lg:mx-8 md:mx-2 my-2  rounded-xl bg-white flex flex-nowrap justify-evenly overflow-hidden outline-none">
          <span className="w-full">
            <input type="text" className="w-full h-full px-4 " />
          </span>
          <span className="h-full w-16 bg-defaultYellow flex items-center justify-center cursor-pointer">
            <IoSendSharp className="hover:scale-150 duration-700" size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatSide;
