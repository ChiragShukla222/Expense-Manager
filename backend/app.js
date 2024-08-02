const express = require("express")
const app = express()

// to require dotenv 
const dotenv = require("dotenv")
dotenv.config();


// port config
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`RUNNING ON : ${port}`)
})
