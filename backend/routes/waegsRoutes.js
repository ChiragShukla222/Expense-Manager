const express = require("express")

const router = express.Router();

const wageController = require("../controllers/wagesController")

router.post("/wagesave",wageController.saveWage)

router.post("/showwages",wageController.Wagesshow)

router.post("/expensesave",wageController.saveExpense)

router.post("/expdisplay",wageController.displayExp)

router.post("/showreport",wageController.reportShow)

module.exports =router