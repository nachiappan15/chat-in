import React from "react";

// icons
import { FaUserFriends, FaUserAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import FriendCard from "./FriendCard";


const MobileChatView = (props) => {
  console.log(props);
  return (
    <div className="h-full w-full" >
      
      <div className=" w-90 bg-layer1-400  mt-3 rounded-lg mx-auto">
        <div className="  flex items-center gap-8 px-4 py-2 border-b border-layer1-300">
          {/* user name */}
          <p className="text-sm font-semibold  text-snowWhite ">USER NAME</p>
          {/* user id */}
          <p className="text-xs text-stone-400">#1234453</p>
        </div>
        <div className="  w-full flex items-center justify-center py-1">
          <button className=" bg-bckground px-2 rounded-md  text-black font-bold outline-none hover:scale-105 flex  items-center gap-1">
            Add Friend <FaUserFriends />
          </button>
          <div className="h-full lg:px-4  flex lg:gap-2 items-center">
            {/* icon contsiner */}
            <div className="h-10 w-10 bg-layer1  rounded-2xl text-snowWhite flex justify-center items-center  ">
              <AiFillSetting
                size={20}
                className="hover:rotate-90 duration-1000  cursor-pointer"
              />
            </div>
            <div className="h-10 w-10 bg-layer1  rounded-2xl text-snowWhite flex justify-center items-center  ">
              <FaUserAlt
                size={15}
                className="hover:scale-125 duration-1000 cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1  my-2  overflow-scroll  h-56 w-full mt-3 rounded-lg flex flex-col space-y-2 items-center   mx-auto ">
        {/* search part*/}

        {props.UserData.map((i) => {
          return (
         
             <FriendCard {...i} openChat = {props.onClickHandler}   />
          
              
            
          );
        })}
      </div>
    </div>


// chat page

  );
};

export default MobileChatView;
