import React from 'react'

const FriendCard = (props) => {
console.log(props);
    return (
        <div className="h-full w-full lg:px-5 px-2 lg:py-2 py-1 flex flex-col bg-layer1-600  text-snowWhite rounded-md hover:bg-defaultYellow hover:text-card  hover:rounded-lg cursor-pointer" onClick={props.openChat} >
        {/* freined details */}
        <div className="flex gap-10 items-center h-8">
          <p className="lg:text-lg md:text-base  text-lg  font-bold   ">{props.name}</p>
          <p className="lg:text-sm md:text-xs text-sm font-medium text-slate-600">{props.id}</p>
        </div>
        <div className="w-full flex justify-between gap-4">
          <div className="lg:text-xs  md:text-tiny text-sm 
          text-ellipsis truncate w-90 ">
           {props.messages[0].text}
          </div>
          <div className="lg:text-xs  text-sm md:text-tiny  text-ellipsis truncate lg:w-14 md:w-20 w-20">
          {props.messages[0].time}
          </div>
        </div>
      </div>
    )
}

export default FriendCard
