import Express from "express"
import shortid from "shortid";


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
                }
            );
            const updatedFriend = await User.findOneAndUpdate(
                {
                    id: req.body.Friend,
                },
                {
                    $push: {
                        rooms: room._id,
                    },
                }
            );
            res.json({
                status: "ok",
                room: room,
                updatedUserData: [updatedCreator, updatedFriend],
            });
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
            path :"member" , 
            select : {
                name:1,
                id:1
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
                roomData:room 
            })
        }
        else{
            res.json({
                status:"error",
                message:"No Results Found"
            })
        }
    } catch (error) {
        res.json({
            status:"error",
            error:error
        })
    }
})

export default router;