
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
const customerCheck = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const data = await coustModel.findOne({ email: email });
  
      if (data == null) {
        res.status(404).send("Invalid Email");
      } else if (data.password == password) {
        console.log("ok ps verified");
        res.status(200).send(data);
      } else {
        res.status(401).send("Password  is wrong");
      }
    } catch (error) {
      console.error("Error checking customer:", error);
      res.status(500).send("Internal Server Error");
    }
  };
  




module.exports={
    customerSave,
    customerCheck
}