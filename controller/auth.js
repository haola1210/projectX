const createError = require('http-errors')
const { registerValidator } = require("../validator/user")

const User = require('../model/User')

const registerController =  async (req, res, next) => {
    try {
        const value = await registerValidator(req.body)
        console.log(value)
        const { confirmPassword, ...rest } = value
        console.log(rest)
        const user = new User(rest)
        await user.save()

        res.json(user)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    registerController
}