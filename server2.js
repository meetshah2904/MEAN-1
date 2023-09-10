const express = require("express")
const app =express()
app.get("/time",function(req,res){
    let d = new Date()
    res.end(d+"")
})

app.get("/day",function(req,res){
    let d = new Date()
    res.end(d.getDay()+"")
})

app.get("/",function(req ,res){
    res.end("Welcome")
})
app.listen(9999)