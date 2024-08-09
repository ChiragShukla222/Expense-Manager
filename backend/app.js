const express = require("express");
const app = express();
const mongoose = require("mongoose")

// Require dotenv to load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Import and use CORS
var cors = require("cors");
app.use(cors());


const bodyparser = require("body-parser")
// dbb
app.use(cors());
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("MongoDB connected!!!");
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// Import routes from routes/customerRoutes
const customerRoutes = require("./routes/customerRoutes");
const wageRoutes = require("./routes/waegsRoutes")
// Use the customerRoutes for the /customer endpoint
app.use("/customer", customerRoutes);
app.use("/wages",wageRoutes);

// Port configuration with a fallback value
const port = process.env.PORT 
app.listen(port, () => {
    console.log(`RUNNING ON : ${port}`);
});
