const mongoose = require('mongoose')

const express = require('express')

const router = require('./Router/router')

const app = express()
app.use(express.json())

const dburl='mongodb://localhost:27017/Instagram'
mongoose.connect(dburl)

.then((result)=>{
    console.log("DataBase Connected");
})
.catch((error)=>{
    console.log(error);
})

const port = 5555

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.listen(port,()=>{
    console.log("This is your Port Number "+port)
})

app.use(router)

module.exports = app;