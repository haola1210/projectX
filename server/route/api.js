const Router = require("express").Router()
const authRouter = require("./auth")
const userRouter = require("./user")

Router.use("/auth", authRouter)
Router.use("/user", userRouter)
module.exports = Router