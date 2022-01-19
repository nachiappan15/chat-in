import React from "react";
import ChatSide from "./ChatSide";
import UserSide from "./UserSide";
import Navbar from "../Navbar";


const MobileChatView = (props) => {
  // stateManagement
   const [openChat, setOpenChat] = React.useState(false)
  const chatOpener = () => {
    setOpenChat(prev => !prev)
  }


  const DisplayComponent = ()=> {
    if(openChat){
      return<ChatSide onClickHandler ={chatOpener}/>
      
    }else{
      return<UserSide UserData  = {props.data} onClickHandler ={chatOpener} /> 
    }
  }

  return (
    <div className="bg-layer2 h-screen w-full flex flex-col md:hidden">
      <div className="w-full  flex mt-3">
        <Navbar className="cursor-pointer" />
      </div>
     <DisplayComponent   />

    </div>
  
    )

  // chat page
};

export default MobileChatView;
