const mongoose = require("mongoose")
const CategorySchema = new mongoose.Schema({
    categoryname: {
        type: String
    }
})
module.exports = mongoose.model("Category",CategorySchema)