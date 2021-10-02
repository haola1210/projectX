const Router = require("express").Router()
const withSession = require("../middlewares/withSession")
const { 
    getAllUsers,
    deleteOneUser
} = require("../controller/user")


Router.get("/", withSession, getAllUsers)
Router.delete("/", withSession, deleteOneUser)

module.exports = Router