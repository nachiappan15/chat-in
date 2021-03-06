import React from 'react';

const MembersCard = (props) => {
  return <>
  <div className=' text-snowWhite my-3 w-90 md:w-2/4 p-2  bg-layer1-300 rounded-lg flex justify-center gap-2 md:gap-8 items-center'>
    <span className='md:text-lg text-base  font-semibold'>{props.name}</span>
    <span className='text-xs font-semibold  bg-defaultYellow text-card px-3  py-1 rounded-md'>#{props.id}</span>
  </div>
  </>
  
}


const RoomMembers = (props) => {
console.log(props);

  return <>
    <div className='mx-auto my-auto rounded-3xl h-70p w-90 max-w-3xl bg-layer1-700 flex flex-col items-center absolute top-0 left-0 right-0 bottom-0'>
      <h1 className='text-xl font-bold my-3 text-snowWhite'>Room Members </h1>
      <div className='w-full h-4/6 flex flex-col gap-2 items-center overflow-scroll'>
        {/* <MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/><MembersCard/> */}
        {
          props.members.map(i=> {
            return <MembersCard {...i}/>
          })
        }
     
      </div>

    <button
      onClick={props.onClickHandler}
      className=" bg-snowWhite text-sm font-bold px-4 md:px-8 py-2 rounded-md hover:scale-110  "
    > Close
    </button>
    </div>
  </>;
};

export default RoomMembers;
