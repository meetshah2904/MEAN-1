// companyName,symbol,ISINCode,fk:industry,price,52wH,52wL
const mongoose = require("mongoose")
const EquitySchema = new mongoose.Schema({
    CompanyName: { type: String, require: true },
    Symbol: { type: String, require: true },
    ISINCode: { type: String, require: true },
    Industry: { type: String, require: true },
    Price: { type: String, require: true },
    WH52: { type: String, require: true },
    WL52: { type: String, require: true },
    IndustryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Industry"
    }
})
module.exports = mongoose.model("Equity", EquitySchema)