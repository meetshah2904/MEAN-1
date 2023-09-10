const express = require("express")
const sessionController = require("./Controller/sessionController")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/signup",sessionController.signup)
app.get("/getAllUsers",sessionController.getAllUsers)
app.get("/login",sessionController.login)
app.listen(9999)