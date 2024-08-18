const mongoose = require("mongoose");

const wageSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer',
        index:false
    },
        amount:{
                type:Number,
                required:true
        },
        source:{
            type:String,
            required:true
        },date:{
            type:Date,
            default:Date.now
        }

});

// Create the model
const Wage = mongoose.model('Wage', wageSchema);

module.exports = Wage;