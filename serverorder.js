const express = require("express")
const order = require("./order")
const app = express()
app.get("/vieworders",order.viewOrders)
app.get("/vieworderbyid",order.viewOrderbyId)
app.listen(9999)