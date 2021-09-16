const Router = require("express").Router()
const { registerController } = require("../controller/auth")


Router.post("/register", registerController)


module.exports = Router