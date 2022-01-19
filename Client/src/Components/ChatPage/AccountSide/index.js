import React from "react";
import RoomsListContainer from "./RoomsListContainer";
import UserDetails from "./UserDetails";



const AccountSide = (props) => {
  console.log(props);
  return (
    <>
      <div className="h-full w-3/12   flex flex-col items-center gap-3 py-2 ">
        {/* user Details */}
        <UserDetails  name = {props.name} id = {props.id}/>
        {/* lower part */}
        <RoomsListContainer rooms = {props.data} />
      </div>
    </>
  );
};

export default AccountSide;
