const wageModel= require("../models/wagesModel")
const expenseModel = require("../models/expenseModel")

const saveWage=async(req,res)=>{
    
    const {amount,source,date,id} =  req.body
        const wageData = await wageModel.create({
            user:id,
            amount:amount,
            source:source,
            date:date
        })
        res.send(wageData)
}

const Wagesshow=async(req,res)=>{
    let id = req.body.id;
    const wagedata = await wageModel.find({user:id})
    res.status(200).send(wagedata)
    console.log("showing th wages")


}
const saveExpense=async(req,res)=>{
   
    const{amount , decription , date ,id} = req.body
    const expData = await expenseModel.create({
        user:id,
        amount:amount,
        decription:decription,
        date:date
    })
    await expData.save()
    res.status(200).send(expData)
   
}

const displayExp = async(req,res)=>{
    const id = req.body.id;
    const dexp = await expenseModel.find({user:id})
    res.send(dexp)
    console.log("nsfhsjksn")
}
const reportShow = async(req,res)=>{
    console.log("working this side backend") 
}
module.exports={
    saveWage,
    Wagesshow,
    saveExpense,
    displayExp,
    reportShow
}