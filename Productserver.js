const express = require("express")
const productController = require("./Controller/productController")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/addProduct",productController.addProduct)
app.get("/getAllProducts",productController.getAllProducts)
app.delete("/deleteProductById/:productId",productController.deleteProductById)
app.get("/viewProductById/:productId",productController.viewProductById)
app.listen(9999)