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





export default  Mongoose.model("User" , UsersSchema)
