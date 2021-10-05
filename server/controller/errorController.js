const createError = require('http-errors')

const errorController = (err, req, res, next) => {
    // console.log(err)
    // console.log(err.message, req.originalUrl)
    // console.log(err.name, err.code)
    // console.log(err.keyValue)
    // console.log(Object.keys(err.keyValue))
    const errorObject = {}

    console.log("Có lỗi!!")
    //error from JOI schema
    if(err.name == "ValidationError"){  
        // console.log(err.details[0].context)
        // console.log(err.details[0].path)
        // console.log(err.details[0].message)
        errorObject.key = err.details[0].context.key
        errorObject.value = err.details[0].context.value
        errorObject.message = err.details[0].message
        errorObject.where = "Validating Data"

        return res.status(400).json(createError(400, errorObject))
    } 

    //duplicate index value in mongoDB
    if(err.code && err.code == 11000){  
        errorObject.key = Object.keys(err.keyValue)[0]
        errorObject.value = err.keyValue[errorObject.key]
        errorObject.message = `${errorObject.value} đã được sử dụng`
        errorObject.where = "Storing Data"

        return res.status(409).json(createError(409, errorObject))
    }

    //error from auth
    if(err.name == "Authentication Error" || err.name == "Role Error"){
        errorObject.message = err.message
        errorObject.where = "Authentication"
        errorObject.key = err.key
        return res.status(400).json(createError(400, errorObject))
    }

    //error when session expired
    if(err.name == "Session Expired"){
        errorObject.message = err.message
        errorObject.where = "Authentication"
        errorObject.code = 401

        return res.status(401).json(createError(401, errorObject))
    }

    if(err.code == 404){
        return res.status(404).json(createError(404, "Trang không tồn tại!"))
    }
    
}

module.exports = errorController;