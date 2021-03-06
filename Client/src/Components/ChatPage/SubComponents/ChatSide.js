import React from "react";
import axios from "axios";
import reactDom from "react-dom"

import YellowNav from "../../ReusableComponents/YellowNav";
import RoomMembers from "./RoomMembers"

// icons
import { IoSendSharp } from "react-icons/io5";
import MessageCard from "../../ReusableComponents/MessageCard";
import { useParams } from "react-router-dom";

// socket code


const ChatSide = (props) => {

  const { id } = useParams();

  // state Management
  const [roomData, setRoomData] = React.useState({
    "name": "",
    "RoomId": "",
    "member": [
    ],
    "messages": [],
  })

  const [messages, setMessages] = React.useState(roomData.messages);
  const [messageData, setMessageData] = React.useState({
    RoomId: props.chatRoomId,
    userName: props.userName,
    text: "",
    time: "",
    sentBy: id,
  });

  const [FloatingCardRender, setFloatingCardRender] = React.useState(false);
  const elementAppear = (content) => {
    console.log(content);
    setFloatingCardRender(prev => !prev)
  }


  // useEffect
  React.useEffect(() => {
    // socket
    props.socket.emit("join_room", props.chatRoomId);

    // making api call for room
    axios({
      method: 'get',
      url: `https://chatin-server.herokuapp.com/room/getRoom/${props.chatRoomId}`

    })
      .then(function (response) {
        const gotroomData = response.data.room;
        if (gotroomData) {
          setRoomData(gotroomData)
          setMessages(gotroomData.messages)
        }
      });

  }, [])




  props.socket.on(props.chatRoomId, (data) => {
    // if(data.RoomId === ){
    setMessages(data.updatedMessage)
    // }
  })



  // time
  const getTime = () => {
    let currentDate = new Date();
    let hours = currentDate.getHours(), minutes = currentDate.getMinutes();
    if (hours < 10) {
      // hours = "0" + currentDate.getHours();
    }
    if (minutes < 10) {
      // minutes = "0" + currentDate.getMinutes();
    }
    let time = hours + ":" + minutes;
    return time;
  };

  const enterData = (e) => {
    setMessageData((prev) => {
      return {
        ...prev,
        time: getTime(),
        [e.target.name]: e.target.value,
      };
    });
  };


  const sendMessage = async (e) => {

    e.preventDefault();
    if (messageData.text != "") {
      e.target.children[0].children[0].value = "";
      await axios({
        method: "put",
        url: "https://chatin-server.herokuapp.com/api/message/send",
        data: messageData,
      })
        .then(function (response) {
          var data = response.data;

          if (data) {

          } else {
            console.log(data.error);
          }
        })
        .catch(function (error) {
          console.log("error");
        });

    }
  };



  return (
    <div className="h-full w-full md:w-9/12  flex flex-col md:items-center md:gap-4">
      <YellowNav
        name={roomData.name}
        id={roomData.RoomId}
        elementAppear={elementAppear}
        closeChat = {props.closeChat}
      />
      <div className="md:w-95 h-56 flex-auto    md:mb-4 bg-layer1-500 rounded-lg flex flex-col ">
        <div className="  h-full flex  flex-col-reverse   lg:mx-8 md:mx-2  px-2 flex-nowrap overflow-scroll">


          {messages.map((i) => {
            return <MessageCard {...i} />;
          })}


        </div>
        <form
          className=" h-10 lg:mx-8 md:mx-2 md:my-2  md:rounded-xl bg-white flex flex-nowrap justify-evenly overflow-hidden outline-none"
          onSubmit={sendMessage}
        >
          <span className="w-full">
            <input
              type="text"
              className="w-full h-full px-4 "
              name="text"
              id="messageText"
              onChange={enterData}
              autoComplete="off"
            />
          </span>
          <button
            type="submit"
            className="h-full w-16 bg-defaultYellow flex items-center justify-center cursor-pointer"
          >

            <IoSendSharp className="focus:scale-150 duration-700" size={20} />  

          </button>
        </form>
      </div>
      {FloatingCardRender && <RoomMembers members = {roomData.member} onClickHandler = {elementAppear}/>}
    </div >
  );
};

export default ChatSide;