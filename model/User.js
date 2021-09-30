const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    email : { 
        type : String,
        lowercase : true,
        trim : true,
        required : true,
        unique : true, //unique index
    },
    nickName : {
        type : String,
        required : true,
        trim : true,
        unique : true, //unique index,
        minLength : 6,
        maxlength : 20
    },
    password : {        
        type : String,
        required : true,
        trim : true,
    },
    avatarUrl : {
        type : String,
        default : undefined,
    },
    isActive : {
        type : Boolean,
        default : false
    },
    lastTimeActive : {
        type : Date,      //default MongoDB stores dates as 64-bit integers
        default : Date.now()   //interger
        //use new Date(oneUser.lastTimeActive) to get Date object
    },
    threeOldPassword : {
        type : [String],
    },
    socketId : {
        type : String,
        default : undefined,
    },
    roomList : {
        type : [String]
    }

})

const User = model("User", UserSchema, "users")

module.exports = User