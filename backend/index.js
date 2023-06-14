const express = require("express");


const {photographerdata} = require("./routes/photographer.route")
require("dotenv").config()
const { connection } = require("./config/db");


require("dotenv").config()

const connection = require("./config/db")


const app = express()
app.use(express.json())
app.use("/pgdata",photographerdata);

app.listen(process.env.port,async(req,res)=>{
    try{
        await connection
        console.log(`Database is connected ${process.env.port}`)
    } catch(err) {
        console.log(err.message)
        console.log(`Database is not connected ${process.env.port}`)
    }   
    console.log(`Server is running on port ${process.env.port}`)
})