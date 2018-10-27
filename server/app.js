require('dotenv').config()
const database = process.env.DATABASE
const express = require('express')
const app = express()
const port = 2000
const router = require('./routes')
const mongoose = require('mongoose')

mongoose.connect(database, { useNewUrlParser :true})
const db = mongoose.connection;
db.on(`error`, console.error.bind(console, `connection error`))
db.once (`open`, ()=> console.log(`Database is Connecting`))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(port, function(){
    console.log(`live on port ${port}`);
})


