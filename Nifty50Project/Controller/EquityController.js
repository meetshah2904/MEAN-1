const EquityModel = require('../Model/EquityModel')
const csvFilePath = 'D:\\MEAN\\Nifty50Project\\NIFTY-50.csv'
const csv = require('csvtojson')

module.exports.addScriptFromCSV = function (req, res) {
    csv().fromFile(csvFilePath).then(data => {
        EquityModel.insertMany(data).then((data) => {
            res.json({ "msg": 'Scripts added successfully', "data": data, "rcode": 200 });
        }).catch(err => {
            res.json({ "msg": 'SMW', "data": err, "rcode": -9 });
        });
    }).catch(err => {
        res.json({ "msg": 'SMW', "data": err, "rcode": -9 });
    });
}

module.exports.addScript = function (req, res) {
    let equity = new EquityModel({
        CompanyName: req.body.CompanyName,
        Symbol: req.body.Symbol,
        ISINCode: req.body.ISINCode,
        Industry: req.body.Industry,
        Price: req.body.Price,
        WH52: req.body.WH52,
        WL52: req.body.WL52
    })
    equity.save().then(data => {
        res.json({ "msg": "Scripts added successfully", "data": data, "rcode": 200 })
    }).catch(err => {
        res.json({ "msg": "SMW", "data": err, "rcode": -9 })
    })
}
module.exports.getAllScripts = function (req, res) {
    EquityModel.find().then(data => {
        res.json({ "msg": "All data ret", "data": data, "rcode": 200 })
    }).catch(err => {
        res.json({ "msg": "SMW", "data": err, "rcode": -9 })
    })
}

module.exports.getScriptById = function (req, res) {
    let ScriptId = req.body.ScriptId
    EquityModel.find({ _id: ScriptId }).then(data => {
        res.json({ "msg": "Script Found", "data": data, "rcode": 200 })
    }).catch(err => {
        res.json({ "msg": "SMW", "data": err, "rcode": -9 })
    })
}

module.exports.getScriptBySymbol = function (req, res) {
    let Symbol = req.body.Symbol
    EquityModel.find({ "Symbol": Symbol }).then(data => {
        res.json({ "msg": "Script Found", "data": data, "rcode": 200 })
    }).catch(err => {
        res.json({ "msg": "SMW", "data": err, "rcode": -9 })
    })
}

module.exports.getScriptBySymbols = function (req, res) {
    let Symbol = req.body.Symbol
    EquityModel.find({ Symbol: { $regex: `^${Symbol}`, $options: 'i' } }).then(data => {
        res.json({ "msg": "Script Found", "data": data, "rcode": 200 })
    }).catch(err => {
        res.json({ "msg": "SMW", "data": err, "rcode": -9 })
    })
}

module.exports.deleteBySymbol = function (req, res) {
    let Symbol = req.body.Symbol
    EquityModel.deleteOne({ Symbol: Symbol }).then(data => {
        res.json({ "msg": "Script Deleted", "data": data, "rcode": 200 })
    }).catch(err => {
        res.json({ "msg": "SMW", "data": err, "rcode": -9 })
    })
}

module.exports.updateybySymbol = function (req, res) {
    let Symbol = req.body.Symbol
    let Price = req.body.Price;
    let WH52 = req.body.WH52;
    let WL52 = req.body.WL52;
    EquityModel.updateOne({ Symbol: Symbol }, { "Price": Price, "WH52": WH52, "WL52": WL52 })
        .then(data => {
            res.json({ "msg": "Script Updated", "data": data, "rcode": 200 });
        })
        .catch(err => {
            res.json({ "msg": "SMW", "data": err, "rcode": -9 });
        });
};