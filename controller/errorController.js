const errorController = (err, req, res, next) => {
    console.log(err.message, req.originalUrl)
    console.log(err.name, err.code)
    console.log(err.keyValue)
    console.log(Object.keys(err.keyValue))
    res.json({
        message : err.message,
        type : err.status >= 500 ? "server error" : "client error",
        errorCode : err.status
    })
}

module.exports = errorController;