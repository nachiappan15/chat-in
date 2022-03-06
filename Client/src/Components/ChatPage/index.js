import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import RoomsListContainer from "./SubComponents/RoomsListContainer";
import UserDetails from "./SubComponents/UserDetails";
import ChatSide from "./SubComponents/ChatSide";


// socket.io
import io from "socket.io-client"

const ChatPage = () => {


  // mobile view managing state
  const [mobileViewChatSide , setMobileViewChatSide] = React.useState(false)

  const { id } = useParams();

  // stateManagement
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    id: "",
    roomsData: []
  })
  const [activeChatId, setActiveChatId] = React.useState("")
  // socket
  const [socket, setSocket] = React.useState(null);


  //  Create room


  // USEEFFECT
  React.useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:9000/api/user/data/${id} `

    })
      .then(function (response) {
        const userData = response.data.user;
        if (userData) {
          setUserDetails(userData)
        }
      });
    setSocket(io.connect("http://localhost:9000/"))
    
  }, [])

  socket && socket.on(`${id}Render` , (data)=> {
    setUserDetails(prev => {
      return {
        ...prev ,
        roomsData : data.rooms
      }
    
    })
    console.log(data);
  })

  // actions
  


 

  const changeActiveChat = (RoomId) => {
    setMobileViewChatSide(true)
    setActiveChatId(RoomId)
  }

  const closeChat = () => {
    setMobileViewChatSide(false)
    setActiveChatId("")
  }


  const ActiveChatElement = () => {
    return activeChatId && <ChatSide chatRoomId={activeChatId} socket={socket} userName={userDetails.name} closeChat = {closeChat}  />
  }

  


  return (
    <>
      {id &&
        <div className="bg-layer2 h-screen w-full">
          <div className=" h-full w-full  flex ">
            {/* tablet and mobile view */}
            {/* left side */}
            <div className={`h-full  md:w-3/12 w-full  flex flex-col items-center gap-3 py-2 md:flex  ${mobileViewChatSide ? `hidden`:`block`}`}>
              {/* user Details */}
              <UserDetails name={userDetails.name} id={userDetails.id}  />
              {/* lower part */}
              <RoomsListContainer rooms={userDetails.roomsData} changeActiveChat={changeActiveChat}  />
            </div>
            {/* right side */}
            <ActiveChatElement  />

            
          </div>
        </div>
      }
    </>
  );
};

export default ChatPage;

