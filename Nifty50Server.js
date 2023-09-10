const express = require("express")
const mongoose = require("mongoose")
const industrycontroller = require("./Controller/IndustryController")
const equitycontroller = require("./Controller/EquityController")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/mean23").then(()=>{
    console.log("DbConnected")
})
//industry
app.post("/industry",industrycontroller.uploadIndustry)
//equity
app.post("/equity",equitycontroller.uploadEquity)
app.get("/equity",equitycontroller.getAllEquity)
app.listen(9999)