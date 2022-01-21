import  Mongoose  from "mongoose"
const UsersSchema = Mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
    },
    mobile: {
        type:String,
        required:true,
    },
    name: {
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true
    },
    rooms:[
        { type: Mongoose.Schema.Types.ObjectId, ref: 'Room' }
    ]
      
    
},
{collection:"UserData"})


const RoomsSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    RoomId: {
        type: String,
        required: true
    },
    member: [
        { type: Mongoose.Schema.Types.ObjectId, ref: "User" }

    ],
    messages:
        [
            {
                text: {
                    type: String,
                    required: true
                },
                time: {
                    type: String,
                    required: true
                },
                sent: {
                    type: Boolean,
                    required: true
                }
            }
        ]

},
    { collection: "RoomData" }
)

export const Room =   Mongoose.model("Room", RoomsSchema)

export const User =   Mongoose.model("User" , UsersSchema)
