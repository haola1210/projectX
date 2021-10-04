const bcrypt = require('bcrypt')
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
        unique :  true, //unique index,
        minLength : 6,
        maxlength : 20
    },
    password : {        
        type : String,
        required : true,
        trim : true,
        minLength : 6,
        
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


// schema middlewares
UserSchema.pre('save', async function (next) {
    try {
        const user = this
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash
        console.log(user)
        next()
    } catch (error) {
        next({
            name : "DB Execute",
            message : error.message
        });
    }
})
//

//schema static methods
UserSchema.statics.verifyUser = async function({ email, password }){
    try {
        const user = await this.findOne({ email }).exec()
        if(user == null) throw new Error("Email không tồn tại")
        const resultVerify = await bcrypt.compare(password, user.password)
        if(resultVerify){
            return user
        } else throw new Error("Password không đúng")
    } catch (error) {
        throw new Error({
            name : "DB Execute",
            message : error.message
        })
    }
}


const User = model("User", UserSchema, "users")

module.exports = User