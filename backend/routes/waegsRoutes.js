const express = require("express")

const router = express.Router();

const wageController = require("../controllers/wagesController")

router.post("/wagesave",wageController.saveWage)

router.post("/showwages",wageController.Wagesshow)

module.exports =router