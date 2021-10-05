const jwt = require("jsonwebtoken")

const withNoSession = (req, res, next) => {
    if(req.signedCookies.refreshToken){
        const refreshToken = req.signedCookies.refreshToken
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, function(err, decoded){
            if(err) return next({
                name : "Authentication Error",
                message : "Token không hợp lệ"
            })
            if(decoded.isLogout == false){
                return next({
                    name : "Role Error",
                    message : "Session của bạn vẫn hợp lệ nên truy cập bị từ chối"
                })
            } else {
                return next()
            }
        })
    } else {
        return next()
    }
}

module.exports = withNoSession