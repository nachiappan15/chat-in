import  Mongoose  from "mongoose"

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
                sentBy: {
                    type: String,
                    required: true
                },
                
            },
        ],
        



},
    { collection: "RoomData" }
)
export default   Mongoose.model("Room", RoomsSchema)
