// importing
import express from "express";
import Mongoose from "mongoose";
import cors from "cors";



// socket io
import http from "http"
import {Server} from "socket.io"



import  User  from "./Database/Users.Model.js";
import  Room  from "./Database/Rooms.Model.js";


// Router
import AuthAPI from "./API/Auth.js"
import RoomAPI from "./API/Room.js"


// app config
const app = express();
const port =process.env.PORT || 9000;




// socket.io
const server = http.createServer(app);
export const io = new Server(server, { cors: { origin: '*' } });


io.on("connection", (socket) => {
  // console.log(socket);
  // console.log("user" , socket.id , "connected");

  socket.on("join_room", (data) => {
    socket.join(data);
    // console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });
});





// middlewares
app.use(express.json());
app.use(cors());


// Router
app.use("/auth" , AuthAPI);
app.use("/room" , RoomAPI);






// database config
const connection_url =
  "mongodb+srv://admin:8af8S4fVwxGYeFb@cluster0.94hlu.mongodb.net/chatinDB?retryWrites=true&w=majority";
Mongoose.connect(connection_url);
console.log(Mongoose.connect(connection_url));

// api routing

app.get("/", (req, res) => {
  res.status(200).send("hello working....");
});



//-------------------get user data---------------------

/*
  METHOD :        GET
  URL:        /api/user/data/:id
  PARAMS: id
  BODY: USER Details
  ACCESS: PUBLIC 
  */

app.get("/api/user/data/:id", async (req, res) => {
  const { id } = req.params;

  const userData = await User.findOne({
    id: id,
  }).populate({
    path :"rooms" , 
    select :{
      name:1,
      RoomId:1
    }
  });
  if (userData) {
    return res.json({
      status: "ok",
      user: {
        name: userData.name,
        id: userData.id,
        roomsData: userData.rooms,
      },
    });
  }
});





// ----------------chat ---------------------------
/*
  METHOD :        PUT
  URL:        /api/message/send
  PARAMS: NONE
  BODY: message Details
  ACCESS: user 
  */
app.put("/api/message/send", async (req, res) => {
  try {
   
    const MessageUpdation = await Room.findOneAndUpdate(
      {
        RoomId: req.body.RoomId,
      },
      {
        $push: {
          
          messages: {
            $each: [
              {
            text: req.body.text,
            time: req.body.time,
            senderName  : req.body.userName,
            sentBy: req.body.sentBy
            
          }
        ],
        $position: 0
        }
      }
    },
    {
      new:true
    }
    );
   
   
    res.json({
      status: "ok",
      message: MessageUpdation,
    });
    // console.log(MessageUpdation);
    io.emit(req.body.RoomId,{
      
      RoomId :  req.body.RoomId,
      updatedMessage : MessageUpdation.messages
    })
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

// listener

server.listen(port, () => {
  console.log("Server Running.....✨✨");
});
