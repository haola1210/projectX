const Router = require("express").Router()
const withSession = require("../middlewares/withSession")
const { 
    getAllUsers,
    deleteOneUser,
    getUserInfoById
} = require("../controller/user")

//just for test
Router.get("/", withSession, getAllUsers)
Router.delete("/", withSession, deleteOneUser)
//

Router.get("/user-info", withSession, getUserInfoById)


module.exports = Router