const createError = require('http-errors')
const { registerValidator } = require("../validator/user")

const registerController =  async (req, res, next) => {
    try {
        const value = await registerValidator(req.body)
        console.log(value)
        res.json(value)

    } catch (error) {
        next(createError(400, error.message))
    }
}

module.exports = {
    registerController
}