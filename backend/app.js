const express = require("express");
const app = express();

// Require dotenv to load environment variables
const dotenv = require("dotenv");
dotenv.config();

// Import and use CORS
var cors = require("cors");
app.use(cors());

// Import routes from routes/customerRoutes
const customerRoutes = require("./routes/customerRoutes");

// Use the customerRoutes for the /customer endpoint
app.use("/customer", customerRoutes);

// Port configuration with a fallback value
const port = process.env.PORT 
app.listen(port, () => {
    console.log(`RUNNING ON : ${port}`);
});
