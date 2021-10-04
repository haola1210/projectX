const createError = require('http-errors')
const User = require('../model/User')

const { 
    registerValidator,
    loginValidator,
} = require("../validator/user")

const generateToken = require("../utils/generateToken")


const registerController =  async (req, res, next) => {
    try {
        const value = await registerValidator(req.body)
        // console.log(value)
        const { confirmPassword, ...rest } = value
        // console.log(rest)
        const user = new User(rest)
        await user.save()

        const [AT, RT] = await Promise.all([
            generateToken(
                {userId : user._id}, 
                process.env.ACCESS_TOKEN_SECRET, 
                {expiresIn : 60}
            ), 
            generateToken(
                {userId : user._id, isLogout : false}, 
                process.env.REFRESH_TOKEN_SECRET, 
                {expiresIn : "7d"}
            )
        ])

        // console.log(AT, RT)

        res.cookie("refreshToken", RT, { 
            httpOnly: true,
            signed: true
        })
        res.json({
            accessToken : AT
        })
    } catch (error) {
        next(error)
    }
}

const loginController = async (req, res, next) => {
    try {
        const value = await loginValidator(req.body)
        console.log(value)
        const user = await User.verifyUser(value)
        console.log(user)
        const [AT, RT] = await Promise.all([
            generateToken(
                {userId : user._id}, 
                process.env.ACCESS_TOKEN_SECRET, 
                {expiresIn : 60}
            ), 
            generateToken(
                {userId : user._id, isLogout : false}, 
                process.env.REFRESH_TOKEN_SECRET, 
                {expiresIn : "7d"}
            )
        ])

        // console.log(AT, RT)

        res.cookie("refreshToken", RT, { 
            httpOnly: true,
            signed: true
        })
        res.json({
            accessToken : AT
        })

    } catch (error) {
        console.log(error)
        next(error)
    }
}


// export everything
module.exports = {
    registerController,
    loginController,
}