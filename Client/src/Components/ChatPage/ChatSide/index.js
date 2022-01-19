import React from "react";
import YellowNav from "./YellowNav";

// icons
import {IoSendSharp} from "react-icons/io5"
import MessageCard from "./MessageCard";

const ChatSide = () => {
  return (
    <div className="h-full   w-9/12  flex flex-col items-center gap-4">
      <YellowNav />
      <div className="w-95 h-56 flex-auto  mb-4 bg-layer1-500 rounded-lg flex flex-col ">
        <div className="  h-full flex  flex-col-reverse   lg:mx-8 md:mx-2  px-2 flex-nowrap overflow-scroll">
          
         <MessageCard sent = {false} messageText = "desfhhoefhs fsyh8fhs8hSOUfh8hd  wdyw8egh ew8 ed8ughoufbh oueui ueuhef u u hufehuehufhuh hodfh8uehuahfohu efhoui fhououhdreoifhoidhf hhoudfhoi hoidfhjdfhfdhoiefhodefjvnouider hoijfoih pijdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
          
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
          
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {true} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
         <MessageCard sent = {false} messageText = "jdukukhk uufhu f usfgsf fgufg ug g vgug iusgicgi gg" time = "7.00 pm" />
          
          {/* sent message */}
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
