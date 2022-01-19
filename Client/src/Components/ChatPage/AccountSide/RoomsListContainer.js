import React from "react";
import RoomCard from "./RoomCard";

const RoomsListContainer = (props) => {

  return (
    <>
      <div className=" flex-auto h-56 w-95 rounded-lg flex flex-col items-center  bg-layer1-500  ">
        {/* search part*/}
        <input
          type="text"
          className="w-90 lg:h-10 md:h-8 lg:rounded-xl md:rounded-lg lg:mt-3 md:mt-2 bg-search lg:px-3 md:px-3 text-snowWhite md:text-sm outline-none  "
          placeholder="Search"
        />
        <div className="flex-1 w-95  my-2 space-y-1  items-center overflow-scroll">
          {
            props.rooms.map(i=> {
              return <>
              <RoomCard {...i}/>
              </>
            }
            )
          }
        </div>
      </div>
    </>
  );
};

export default RoomsListContainer;
