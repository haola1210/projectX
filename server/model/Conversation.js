const { Schema, model } = require("mongoose")

const lastestMessage = new Schema({
    senderId : Schema.Types.ObjectId,
    conversationId : Schema.Types.ObjectId,
    timeCreated : Date,
    content : String
});

const ConversationSchema = new Schema({
    name : {
        type : String,
        default: undefined,
    },
    timeCreated : {
        type : Date,
        default: Date.now()
    },
    memberList : [
        {
            userId : {
                type : Schema.Types.ObjectId,
                index : true,                  //index by userId
            },
            lastTimeSeen : {
                type : Date,
                default: undefined, 
            },
            user : {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        }
    ],
    lastestMessage : {
        type : lastestMessage,
        default: undefined
    }
})

const Conversation = model("Conversation", ConversationSchema, "conversations")

module.exports = Conversation