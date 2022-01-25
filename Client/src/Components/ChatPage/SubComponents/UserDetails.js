import React from "react";

// icons
import {FaUserFriends, FaUserAlt} from "react-icons/fa"
import {AiFillSetting} from "react-icons/ai"


const UserDetails = (props) => {
  return (
    <>
      <div className=" lg:h-32 md:h-24 w-95 rounded-lg flex flex-col  bg-layer1-500 ">
        {/* user Details */}
        <div className="flex items-center lg:gap-12 md:gap-3 px-4 py-2 border-b border-layer1-300">
          {/* user name */}
          <p className="lg:text-lg md:text-sm font-semibold  text-snowWhite ">{props.name}</p>
          {/* user id */}
          <p className="font-medium lg:text-sm md:text-xs text-stone-400">#{props.id}</p>
        </div>
        <div className=" h-full w-full flex items-center lg:px-2 md:px-1">
          <button className=" bg-bckground lg:h-8 md:h-6 lg:px-4 md:px-2 lg:rounded-xl md:rounded-lg text-xs  text-black font-bold outline-none hover:scale-105 flex  items-center gap-1" onClick={props.elementAppear}>
            Create Room <FaUserFriends />
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
    </>
  );
};

export default UserDetails;