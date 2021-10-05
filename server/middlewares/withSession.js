const jwt = require("jsonwebtoken")
const User = require("../model/User")

const withSession = async (req, res, next) => {
    // console.log(req.headers)
    if(req.headers && req.headers.authorization){
        const accessToken = req.headers.authorization
        console.log("verify AT")
        try {
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
            console.log("verify User")
            const user = await User.findById(decoded.userId).exec()
            if(user == null) throw new Error("Không tìm thấy user này")
            if(user) {
                res.locals.user = user
                return next()
            }

        } catch (error) {
            if(error.name == "TokenExpiredError") return next({
                name : "Session Expired",
                message : "Token hết hạn"
            })
            
            if(error) return next({
                name : "Authentication Error",
                message : error.message
            })
        }
    } else {
        return next({
            name : "Authentication Error",
            message : "Token không hợp lệ"
        })
    }
}

module.exports = withSession