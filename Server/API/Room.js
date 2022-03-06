import Express from "express"
import shortid from "shortid";


import { io } from "../index.js";
const router = Express.Router()

// Database Models
import User from "../Database/Users.Model.js";
import Room from "../Database/Rooms.Model.js";


// ------------------------ ROOMS ----------------------------------

/*
  METHOD :        POST
  URL:       /new
  PARAMS: NONE
  BODY: USER Details
  ACCESS: PUBLIC 
  */
router.post("/new", async (req, res) => {
    try {
        const creator = await User.findOne({
            id: req.body.Creator,
        });
        const friend = await User.findOne({
            id: req.body.Friend,
        });

        try {
            const room = await Room.create({
                name: req.body.RoomName,
                RoomId: "~" + shortid.generate(),
                member: [creator, friend],
                messages: req.body.Messages,
            });
            // creator update
            const updatedCreator = await User.findOneAndUpdate(
                {
                    id: req.body.Creator,
                },
                {
                    $push: {
                        rooms: room._id,
                    },
                },
                {
                    new:true
                }
            ).populate("rooms");


            const updatedFriend = await User.findOneAndUpdate(
                {
                    id: req.body.Friend,
                },
                {
                    $push: {
                        rooms: room._id,
                    },
                },
                {
                    new:true
                }
            ).populate("rooms");


            res.json({
                status: "ok",
                room: room,
                updatedUserData: [updatedCreator, updatedFriend],
            });

            // socket emit
            io.emit(`${updatedCreator.id}Render`,{
               rooms: updatedCreator.rooms
              })
            io.emit(`${updatedFriend.id}Render`,{
                rooms: updatedFriend.rooms
               })


        } catch (error) {
            res.json({ status: "error", error: error });
        }
    } catch (error) {
        res.json({ status: "error", error: error });
    }
});


/*
  METHOD :        get
  URL:        room
  PARAMS: RoomId
  BODY: USER Details
  ACCESS: PUBLIC 
  */


router.get("/getRoom/:RoomId", async (req, res) => {
    try {
        const room = await Room.findOne({
            RoomId: req.params.RoomId
        }).populate({
            path: "member",
            select: {
                name: 1,
                id: 1
            }
        })

        if (room) {
            res.json({
                status: "ok",
                room: room
            })
        }
    } catch (error) {

    }
})



// Find Room To Join 
router.get("/findRoom/:RoomId", async (req, res) => {
    try {
        const room = await Room.findOne({
            RoomId: req.params.RoomId
        }).select('name RoomId')

        if (room) {
            res.json({
                status: "ok",
                roomData: room
            })
        }
        else {
            res.json({
                status: "error",
                message: "No Results Found"
            })
        }
    } catch (error) {
        res.json({
            status: "error",
            error: error
        })
    }
})

// Join in found Rooom
router.put("/joinRoom", async (req, res) => {
    try {
        const user = await User.findOne({
            id: req.body.userId
        }).select("_id")
        const room = await Room.findOne({
            RoomId: req.body.RoomId
        }).select("name RoomId member")

        if(room.member.includes(user._id)){
            res.json({
                status:"error",
                messagae:"User Already in Room"
            })
        }else{
            try {
                // updating Room 
                const updatedRoom = await Room.findOneAndUpdate({
                    _id:room._id
                }, {
                    $push : {
                        member:user._id
                    }
                }) 
                // update user
                const updateUser = await User.findOneAndUpdate({
                    _id:user._id
                }, {
                    $push : {
                        rooms:room._id
                    }
                } , {
                    new:true
                }).populate("rooms") 
                res.json({
                    status:"ok", 
                    updatedRoom,
                    updateUser
                })
                io.emit(`${updateUser.id}Render`,{
                    rooms: updateUser.rooms
                   })
            } catch (error) {
                
            }
        }

    
    } catch (error) {
        res.json({
            status: "error",
            error: error
        })
    }
})




export default router;