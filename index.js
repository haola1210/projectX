if(process.env.NODE_ENV != "production"){
    require("dotenv").config()
}

//importing 
const express = require("express")
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const mongoose = require("mongoose")
const cors = require("cors")

//importing router
const apiRouter = require("./route/api")

//import controller
const errorController = require("./controller/errorController")

//connect to database
mongoose.connect(process.env.DATABASE_URL).catch(error => console.log(`connecting to database error: ${error.message}`));
const db = mongoose.connection
db.on("error", err => console.log(`connection error: ${err.message}`))
db.on("disconnected", () => console.log("disconnected to database"))
db.on("connected", () => console.log("connected to database"))
//

// declare constant
const app = express()
const port = process.env.PORT

// basic middleware
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.json()) // for parsing application/json

//cors configuration
app.options('*', cors())
const corsOptions = {
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}
app.use(cors(corsOptions))

// routing
app.use((req, res, next) => {
    console.log(req.originalUrl)
    next()
})
app.use("/api", apiRouter)



// 404 handling
app.use((req, res, next) => next({
    code : 404,
    message : "Page not found"
}))

//error handling
app.use(errorController)

app.listen(port, () => {
    console.log("server is running")
})
