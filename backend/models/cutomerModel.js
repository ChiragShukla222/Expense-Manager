const mongoose = require("mongoose") 

const coustomerSchema = new mongoose.Schema({

        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        vpassword:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }



}) 