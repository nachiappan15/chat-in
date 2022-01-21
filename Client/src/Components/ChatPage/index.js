import React from "react";
import  {useParams}  from "react-router-dom";
import axios from "axios";
import FriendsData from "../../DataHub/RoomData";

import AccountSide from "./AccountSide";

import ChatSide from "./ChatSide";
// import MobileChatView from "./MobileChatView";
import AddFriend from "./CreateRoom";






const ChatPage = () => {
  const {id} = useParams();

  // stateManagement
  const [userDetails , setUserDetails] = React.useState({
    name : "", 
    id : "",
    roomsData:[]
  })

  //  Create room
  const [createRoomElement , setCreateRoomElement] = React.useState(false);


  // Active Chat Element

  const [activeChatId , setActiveChatId] = React.useState("")
  
  

  React.useEffect(()=> {
      console.log("running one time")
      console.log(id);

      axios({
        method: 'get',
        url: `http://localhost:9000/api/user/data/${id} `
        
      })
        .then(function (response) {
          const userData = response.data.user;
          if(userData){
            setUserDetails(userData) 
          }
        });
  } , [])

  const elementAppear = () => {
    setCreateRoomElement(prev => !prev)
  }

  // use effect
  const changeActiveChat = (e)=> {
    setActiveChatId(e.currentTarget.id)
  }

  


  return (
    <>
    { id && 
     <div className="bg-layer2 h-screen w-full">
     <div className=" h-full w-full  hidden md:flex ">
       {/* tablet and mobile view */}
       {/* left side */}
       <AccountSide   name = {userDetails.name} id= {userDetails.id} rooms = {userDetails.roomsData} elementAppear = {elementAppear} changeActiveChat= {changeActiveChat} />
       {/* right side */}
      {
        activeChatId &&  userDetails.roomsData.map( i=> {
          if(i.RoomId === activeChatId ){
           return <ChatSide chatRoomData= {i}  />
          }
        })
      }
       {createRoomElement && <AddFriend onClickHandler = {elementAppear} />}
     </div>
     {/* <MobileChatView data={FriendsData} /> */}
   </div>

    }      
    </>
  );
};

export default ChatPage;

{/*  */}