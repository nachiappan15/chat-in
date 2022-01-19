import React from "react";
import  {useParams}  from "react-router-dom";
import axios from "axios";
import FriendsData from "../../DataHub/RoomData";

import AccountSide from "./AccountSide";

import ChatSide from "./ChatSide";
import MobileChatView from "./MobileChatView";
import AddFriend from "./AddFriend";






const ChatPage = () => {
  const {id} = useParams();

  // stateManagement
  const [userDetails , setUserDetails] = React.useState({
    name : "", 
    id : ""
  })

  React.useEffect(()=> {
      console.log("running one time")
      console.log(id);

      axios({
        method: 'get',
        url: `http://localhost:9000/api/user/data/${id} `
        
      })
        .then(function (response) {
          const userData = response.data.user;
          console.log(userData);
          if(userData){
            setUserDetails(userData) 
          }
        });
  } , [])



  return (
    <>

    { id && 
     <div className="bg-layer2 h-screen w-full">
     <div className=" h-full w-full  hidden md:flex ">
       {/* tablet and mobile view */}
       {/* left side */}
       <AccountSide data={FriendsData}  name = {userDetails.name} id= {userDetails.id} />
       {/* right side */}
       {/* <ChatSide data={FriendsData} /> */}
       {/* <AddFriend/> */}
     </div>
     {/* <MobileChatView data={FriendsData} /> */}
   </div>


    }
     

      
    </>
  );
};

export default ChatPage;

