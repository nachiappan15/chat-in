import React from "react";
import RoomCard from "./RoomCard";

const RoomsListContainer = (props) => {

  return (
    <>
      <div className=" flex-auto h-56 w-95 rounded-lg flex flex-col items-center  bg-layer1-500  ">
        {/* search part*/}
        
        <div className="flex-1 w-95  my-2 space-y-1  items-center overflow-scroll">
          {
            props.rooms.map(i => {
              return <>
                <RoomCard {...i} changeActiveChat={props.changeActiveChat} />
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
