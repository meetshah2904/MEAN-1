// industry{_id,name}
const mongoose = require("mongoose")
const IndustrySchema = new mongoose.Schema({
    IndustryName:{type:String,required:true}
})
module.exports = mongoose.model("Industry",IndustrySchema)