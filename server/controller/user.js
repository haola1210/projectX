const User = require('../model/User')

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).exec()
        res.json({users})
    } catch (error) {
        next({
            name : "Query Error",
            message : error.message
        })
    }
}

const deleteOneUser = async (req, res, next) => {
    try {
        await User.findOneAndDelete(req.body).exec()
        res.json("deleted")
    } catch (error) {
        next({
            name : "Query Error",
            message : error.message
        })
    }
}

const getUserInfoById = (req, res, next) => {
    const { _id, email, nickName, roomList, avatarUrl, socketId } = res.locals.user
    
    res.json({
        user : {
            id : _id,
            email,
            nickName,
            roomList,
            avatarUrl,
            socketId
        }
    })
}

module.exports = {
    getAllUsers,
    deleteOneUser,
    getUserInfoById
}