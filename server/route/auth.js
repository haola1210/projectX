const Router = require("express").Router()
const { 
    registerController,
    loginController,
    refreshTokenController
} = require("../controller/auth")

const withNoSession = require("../middlewares/withNoSession")
const withExpiredSession = require("../middlewares/withExpiredSession")

Router.post("/register", withNoSession, registerController)
Router.post("/login", withNoSession, loginController)
Router.get("/refresh-token", withExpiredSession, refreshTokenController)

module.exports = Router