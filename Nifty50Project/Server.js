const express = require("express")
const mongoose = require("mongoose")
const EquityController = require("./Controller/EquityController")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/mean23").then(()=>{
    console.log("DbConnected")
})
app.post("/addScriptFromCSV",EquityController.addScriptFromCSV)
app.post("/addScript",EquityController.addScript)
app.get("/getAllScripts",EquityController.getAllScripts)
app.get("/getScriptById",EquityController.getScriptById)
app.get("/getScriptBySymbol",EquityController.getScriptBySymbol)
app.get("/getScriptBySymbols",EquityController.getScriptBySymbols)
app.delete("/deleteBySymbol",EquityController.deleteBySymbol)
app.put("/updateybySymbol",EquityController.updateybySymbol)
app.listen(9999)