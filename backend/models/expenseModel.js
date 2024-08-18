const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'customer',
       index:false
    },
        amount:{
                type:Number,
                
        },
        decription:{
            type:String,

        },date:{
            type:Date,
            default:Date.now
        }

});

// Create the model
const expense = mongoose.model('Expense', expenseSchema);

module.exports = expense;