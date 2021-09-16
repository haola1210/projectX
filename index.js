if(process.env.NODE_ENV != "production"){
    require("dotenv").config()
}

//importing 
const express = require("express")
const cookieParser = require('cookie-parser')
const createError = require('http-errors')

//importing router
const apiRouter = require("./route/api")

// declare constant
const app = express()
const port = process.env.PORT

// basic middleware
app.use(cookieParser())
app.use(express.json()) // for parsing application/json



// routing
app.get("/", (req, res) => {
    console.log("ok")
    res.send("OK")
})

app.use("/api", apiRouter)



// 404 handling
app.use((req, res, next) => next(createError(404, "Page not found")))

//error handling
app.use((err, req, res, next) => {
    console.log(err.message, req.originalUrl)
    // console.log(err.stack)
    
    res.status(err.status).json({
        message : err.message,
        type : err.status >= 500 ? "server error" : "client error"
    })
})

app.listen(port, () => {
    console.log("server is running")
})
