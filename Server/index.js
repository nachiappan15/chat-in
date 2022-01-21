// importing
import express from "express";
import Mongoose from "mongoose";
import shortid from "shortid";
import bcrypt from "bcrypt";
import cors from "cors"


import { User } from "./Database/Users.Model.js";
import { Room } from './Database/Users.Model.js';

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use(cors())



// actions
const hashedPassword = (password) => {
  const salt = bcrypt.genSaltSync(11);
  const hash = bcrypt.hashSync(password, salt);
  return hash;

  // return hashPassword;
};


// database config
const connection_url =
  "mongodb+srv://admin:8af8S4fVwxGYeFb@cluster0.94hlu.mongodb.net/chatinDB?retryWrites=true&w=majority";
Mongoose.connect(connection_url);
console.log(Mongoose.connect(connection_url));

// api routing

app.get("/", (req, res) => {
  res.status(200).send("hello working....");
});




// -------------------------------AUTH ---------------------------

// sign up
/*
METHOD :        POST
URL:        /api/addUser/new
PARAMS: NONE
BODY: USER Details
ACCESS: PUBLIC

*/

app.post("/api/addUser/new", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword(req.body.password),
      mobile: req.body.mobile,
      id: shortid.generate(),
      rooms: []
    });

    res.json({ status: "ok", user: user.id });
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

// api routing
app.get("/", (req, res) => {
  res.status(200).send("hello working....");
});

// login

/*
  METHOD :        POST
  URL:        /api/login
  PARAMS: NONE
  BODY: USER Details
  ACCESS: PUBLIC 
  */

app.post("/api/login", async (req, res) => {
  console.log("login....");
  const user = await User.findOne({
    email: req.body.email
  });
  // console.log(user);
  if (user) {
    const checkPassword = bcrypt.compareSync(req.body.password, user.password);
    if (checkPassword) {

      return res.json({ status: "ok", user: true, userId: user.id });
    } else {
      return res.json({
        status: "error",

        user: false,
        message: "password incorrect",
      });
    }
  } else {
    return res.json({ status: "error", user: false, message: "user not found" });
  }
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
    id: id
  }).populate("rooms");
  if (userData) {
    return res.json({
      status: "ok",
      user: {
        name: userData.name,
        id: userData.id,
        roomsData:userData.rooms
      }

    })
  }

})



// ------------------------ ROOMS ----------------------------------

/*
  METHOD :        POST
  URL:        /api/new/room
  PARAMS: NONE
  BODY: USER Details
  ACCESS: PUBLIC 
  */
app.post('/api/room/new', async (req, res) => {

  try {
    const creator = await User.findOne({
      id: req.body.creator
    });
    const fr = await User.findOne({
      id: req.body.creator
    });

    try {
      const room = await Room.create(
        {
          name: req.body.RoomName,
          RoomId:"~"+ shortid.generate(),
          member: [initialMembers , ],
          messages: req.body.Messages
        }
      )
      // creator update
      const updatedUser = await User.findOneAndUpdate({
        id: req.body.creator  
      }, {
        $push: {
          rooms: room._id

        }
      }
      );
      res.json({ status: "ok", room: room , updatedUserData:updatedUser });
    } catch (error) {
      res.json({ status: "error", error: error });
    }
  } catch (error) {
    res.json({ status: "error", error: error });
  }
})


// listener

app.listen(port, () => {
  console.log("Server Running.....✨✨");
});
