const { Schema, model } = require("mongoose")

const MessageSchema = new Schema({
    senderId : {
        type : Schema.Types.ObjectId,
        required : true,
    },
    conversationId : {
        type : Schema.Types.ObjectId,
        required : true,
        index : true,
    },
    timeCreated : {
        type : Date,
        default : Date.now(),
    },
    content : {
        string : String,
        imageUrls : [String]       //array of image urls
    }
})

const Message = model("Message", MessageSchema, "messages")

module.exports = Message