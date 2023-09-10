const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const productroute = require("./routes/products.routes")
const categoryroute = require("./routes/category.rotes")
// const categoryController = require("./Controller/categoryController")
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
let dburl = "mongodb+srv://meetshah:meetshah@cluster0.llxeugu.mongodb.net/?retryWrites=true&w=majority"
// let dbUrl = "mongodb://127.0.0.1:27017/mean23"
mongoose.connect(dburl).then( () => {
    console.log("DBConnected");
})

app.use("/admin", productroute)
app.use("/admin", categoryroute)

//category routes 
// app.post("/category", categoryController.addCategory)
// app.get("/getAllCategory", categoryController.getAllCategory)
// app.get("/getCategoryById/:categoryId", categoryController.getCategoryById)
// app.put("/updateCategorybyid", categoryController.updateCategorybyid)
// app.delete("/deleteCategorybyid/:categoryId", categoryController.deleteCategorybyid)
app.listen(9999)