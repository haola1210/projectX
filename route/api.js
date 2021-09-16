const Router = require("express").Router()
const authRouter = require("./auth")

Router.use("/auth", authRouter)

module.exports = Router