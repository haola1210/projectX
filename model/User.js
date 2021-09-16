const { Schema, model } = require("mongoose")

const UserSchema = new Schema({

})

const User = model("User", UserSchema, "users")

module.exports = User