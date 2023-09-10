const express = require("express")
const categoryController = require("../Controller/categoryController")
const route = express.Router()

route.post("/category", categoryController.addCategory)
route.get("/getAllCategory", categoryController.getAllCategory)
route.get("/getCategoryById/:categoryId", categoryController.getCategoryById)
route.put("/updateCategorybyid", categoryController.updateCategorybyid)
route.delete("/deleteCategorybyid/:categoryId", categoryController.deleteCategorybyid)

module.exports = route 