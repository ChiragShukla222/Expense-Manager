const wageModel= require("../models/wagesModel")


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


}

module.exports={
    saveWage,
    Wagesshow
}