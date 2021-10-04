const errorController = (err, req, res, next) => {
    // console.log(err)
    // console.log(err.message, req.originalUrl)
    // console.log(err.name, err.code)
    // console.log(err.keyValue)
    // console.log(Object.keys(err.keyValue))
    const errorObject = {}

    //error from JOI schema
    if(err.name == "ValidationError"){  
        // console.log(err.details[0].context)
        // console.log(err.details[0].path)
        // console.log(err.details[0].message)
        errorObject.key = err.details[0].context.key
        errorObject.value = err.details[0].context.value
        errorObject.message = err.details[0].message
        errorObject.where = "Validating Data"

        return res.json({
            type : err.status >= 500 ? "server error" : "client error",
            errorObject
        })
    } 

    //duplicate index value in mongoDB
    if(err.code && err.code == 11000){  
        errorObject.key = Object.keys(err.keyValue)[0]
        errorObject.value = err.keyValue[errorObject.key]
        errorObject.message = `${errorObject.value} đã được sử dụng`
        errorObject.where = "Storing Data"

        return res.json({
            type : err.status >= 500 ? "server error" : "client error",
            errorObject
        })
    }

    //error from auth
    if(err.name == "Authentication Error" || err.name == "Role Error"){
        errorObject.message = err.message
        errorObject.where = "Authentication"

        return res.json({
            type : err.status >= 500 ? "server error" : "client error",
            errorObject
        })
    }

    //error when session expired
    if(err.name == "Session Expired"){
        errorObject.message = err.message
        errorObject.where = "Authentication"
        errorObject.code = 403

        return res.json({
            type : err.status >= 500 ? "server error" : "client error",
            errorObject
        })
    }

    if(err.code == 404){
        return res.json({
            type : err.status >= 500 ? "server error" : "client error",
            errorObject : err
        })
    }

    if(err.name == "DB Execute"){
        return res.json({
            type : err.status >= 500 ? "server error" : "client error",
            errorObject : err
        })
    }
    
}

module.exports = errorController;