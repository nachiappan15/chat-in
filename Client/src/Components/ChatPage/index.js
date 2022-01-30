import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import RoomsListContainer from "./SubComponents/RoomsListContainer";
import UserDetails from "./SubComponents/UserDetails";
import ChatSide from "./SubComponents/ChatSide";
import FloatingCard from "../ReusableComponents/FloatingCard";
import RoomActions from "./SubComponents/RoomActions"

// socket.io
import io from "socket.io-client"

const ChatPage = () => {

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
  const [FloatingCardRender, setFloatingCardRender] = React.useState(false);


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
    setSocket(io.connect("http://localhost:9000"))
  }, [])



  // actions
  const elementAppear = (content) => {
    // console.log(content);
    setFloatingCardRender(prev => !prev)
  }

 

  const changeActiveChat = (RoomId) => {
    setActiveChatId(RoomId)
  }



  const ActiveChatElement = () => {
    return activeChatId && <ChatSide chatRoomId={activeChatId} socket={socket} userName={userDetails.name} FloatingCardRender={elementAppear} />
  }



  return (
    <>
      {id &&
        <div className="bg-layer2 h-screen w-full">
          <div className=" h-full w-full  hidden md:flex ">
            {/* tablet and mobile view */}
            {/* left side */}
            <div className="h-full w-3/12   flex flex-col items-center gap-3 py-2 ">
              {/* user Details */}
              <UserDetails name={userDetails.name} id={userDetails.id} elementAppear={elementAppear} />
              {/* lower part */}
              <RoomsListContainer rooms={userDetails.roomsData} changeActiveChat={changeActiveChat} />
            </div>
            {/* right side */}
            <ActiveChatElement />

            {FloatingCardRender && <RoomActions onClickHandler = {elementAppear}/>}
          </div>
        </div>
      }
    </>
  );
};

export default ChatPage;

