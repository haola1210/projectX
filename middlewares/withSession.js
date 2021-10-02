const jwt = require("jsonwebtoken")
const User = require("../model/User")

const withSession = (req, res, next) => {
    if(req.headers && req.headers.authentication){
        const accessToken = req.headers.authentication
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err.name == "TokenExpiredError") return next({
                name : "Session Expired",
                message : "Token hết hạn"
            })
            if(err) return next({
                name : "Authentication Error",
                message : "Token không hợp lệ"
            })
            if(decoded){
                User.findById(decoded.userId).exec()
                .then(user => next())
                .catch(error => next({
                    name : "Authentication Error",
                    message : "Không tìm thấy user này"
                }))
            }
        })
    }
}

module.exports = withSession