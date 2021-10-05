const jwt = require("jsonwebtoken")
const User = require("../model/User")

const withExpiredSession = (req, res, next) => {
    if(req.signedCookies.refreshToken){
        const refreshToken = req.signedCookies.refreshToken
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return next({
                name : "Authentication Error",
                message : "Token không hợp lệ"
            })
            if(decoded.isLogout == true){
                return next({
                    name : "Authentication Error",
                    message : "Bạn cần đăng nhập lại"
                })
            } else {
                res.locals.decoded = decoded
                next()
            }
        })

    } else {
        return next({
            name : "Authentication Error",
            message : "Bạn chưa có token"
        })
    }
}

module.exports = withExpiredSession