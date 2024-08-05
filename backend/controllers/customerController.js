
const coustModel = require("../models/cutomerModel")

const customerSave=async(req,res)=>{
    // res.send("hey")
    const{name,email,password,vpassword,city} = req.body
        console.log("save working")
        try{
            const Customer = await coustModel.create({
                name:name,
                email:email,
                password:password,
                vpassword:vpassword,
                city:city
            })
            res.status(200).send(Customer)

        }
        catch(error){
            res.status(400).send(error)

        }
}
const customerCheck =async(req,res)=>{
    
    const{email , password} = req.body;

    const data = await coustModel.findOne({email:email});

    if(data==null){
        res.send("Invalid Email")
    }
    else if(data.password==password){
        console.log("ok ps verified")

        res.status(200).send(data);
    }
    else{
        res.send("password is wrong")
    }
}





module.exports={
    customerSave,
    customerCheck
}