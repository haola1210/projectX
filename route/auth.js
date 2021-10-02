const Router = require("express").Router()
const { 
    registerController,
    loginController
} = require("../controller/auth")

const withNoSession = require("../middlewares/withNoSession")

Router.post("/register", withNoSession, registerController)
Router.post("/login", withNoSession, loginController)

module.exports = Router