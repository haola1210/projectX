const Router = require("express").Router()
const authRouter = require("./auth")

Router.use("/auth", authRouter)
Router.get("/", (req, res) => {
    console.log("ok")
    res.send("OK")
})

module.exports = Router