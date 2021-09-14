if(process.env.NODE_ENV != "production"){
    require("dotenv").config()
}
const express = require("express")
const app = express()
const port = process.env.PORT


app.get("/", (req, res) => {
    console.log("ok")
    res.send("OK")
})

app.get("/err-demo", (req, res, next) => {
    next(new Error("error occur"))
})


// 404 handling
app.use((req, res) => res.sendStatus(404))

//error handling
app.use((err, req, res, next) => {
    console.log(err.message)
    console.log(err.stack)
    res.status(500).json({
        message : err.message,
        type : "server error"
    })
})

app.listen(port, () => {
    console.log("server is running")
})
