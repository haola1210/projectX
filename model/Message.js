const { Schema, model } = require("mongoose")

const MessageSchema = new Schema({

})

const Message = model("Message", MessageSchema, "messages")

module.exports = Message