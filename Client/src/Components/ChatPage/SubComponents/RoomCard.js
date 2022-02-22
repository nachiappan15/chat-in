import React from 'react'

const RoomCard = (props) => {
    return (
      <>
        <div className=" w-full lg:px-5 px-2 lg:py-2 py-1 flex flex-col bg-layer1-600  text-snowWhite rounded-md hover:bg-defaultYellow hover:text-card  hover:rounded-lg cursor-pointer"  onClick={()=>{props.changeActiveChat(props.RoomId)}} >
          {/* freined details */}
          <div className="flex justify-between items-center h-8">
              <p className="lg:text-lg text-sm   font-bold ">{props.name}</p>
              <p className="lg:text-sm text-xs  font-medium text-black bg-snowWhite py-1 px-1 rounded-md">{props.RoomId}</p>
          </div>
                {/* <div className="w-full flex justify-between gap-4">
                    <div className="lg:text-xs  md:text-tiny text-sm 
                    text-ellipsis truncate w-90 ">
                      { props.messages.length>0 ?props.messages[0].text : "No messages Yet"  }
                    </div>
                    <div className="lg:text-xs  text-sm md:text-tiny  text-ellipsis truncate lg:w-14 md:w-20 w-20">
                      { props.messages.length>0 ?props.messages[0].time : ""  }
                    </div>
                </div> */}
      </div>
      
      </>
    )
}

export default RoomCard
