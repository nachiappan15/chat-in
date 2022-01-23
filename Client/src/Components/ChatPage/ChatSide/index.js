import React from "react";
import YellowNav from "./YellowNav";

// icons
import { IoSendSharp } from "react-icons/io5";
import MessageCard from "./MessageCard";
import { useParams } from "react-router-dom";

import axios from "axios";



// socket.io client
import io from "socket.io-client"


const ChatSide = (props) => {
  const { id } = useParams();
  // state Management
  const [messages, setMessages] = React.useState(props.chatRoomData.messages);
  const [socket,setSocket] = React.useState(null)


  // useeffect
  React.useEffect(()=>{
    setSocket(io("http://localhost:9000"))
    console.log("render");
    console.log(socket);
  },[])



     
 


  const [messageData, setMessageData] = React.useState({
    RoomId: props.chatRoomData.RoomId,
    text: "",
    time: "",
    sentBy: id,
  });

  // time
  const getTime = () => {
    let currentDate = new Date();
    let hours =currentDate.getHours(), minutes =currentDate.getMinutes() ;
    if (hours < 10) {
      // hours = "0" + currentDate.getHours();
    }
    if (minutes< 10) {
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
    console.log("message sent");  
   
    await axios({
      method: "put",
      url: "http://localhost:9000/api/message/send",
      data: messageData,
    })
      .then(function (response) {
        var data = response.data;
        console.log();
        if (data) {
          socket.on("message" , changedMessage=> {
            setMessages(changedMessage.messages)
          })
        } else {
          console.log(data.error);
        }
      })
      .catch(function (error) {
        console.log("error");
      });
  
  };

  return (
    <div className="h-full   w-9/12  flex flex-col items-center gap-4">
      <YellowNav
        name={props.chatRoomData.name}
        id={props.chatRoomData.RoomId}
      />
      <div className="w-95 h-56 flex-auto  mb-4 bg-layer1-500 rounded-lg flex flex-col ">
        <div className="  h-full flex  flex-col-reverse   lg:mx-8 md:mx-2  px-2 flex-nowrap overflow-scroll">
          {messages.map((i) => {
            return <MessageCard {...i} />;
          })}
        </div>
        <form
          className=" h-10 lg:mx-8 md:mx-2 my-2  rounded-xl bg-white flex flex-nowrap justify-evenly overflow-hidden outline-none"
          onSubmit={sendMessage}
        >
          <span className="w-full">
            <input
              type="text"
              className="w-full h-full px-4 "
              name="text"
              onChange={enterData}
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
    </div>
  );
};

export default ChatSide;
