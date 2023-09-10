function add(req,res){
    let no1 = parseInt(req.body.no1)
    let no2 = parseInt(req.body.no2)
    console.log("No1:- "+no1)
    console.log("No2:- "+no2)
    let result = no1 + no2
    res.end("Addition:- "+result)
}
function sub(req,res){
    let no1 = parseInt(req.body.no1)
    let no2 = parseInt(req.body.no2)
    console.log("No1:- "+no1)
    console.log("No2:- "+no2)
    let result = no1 - no2
    res.end("Substraction:- "+result)
}
function mul(req,res){
    let no1 = parseInt(req.body.no1)
    let no2 = parseInt(req.body.no2)
    console.log("No1:- "+no1)
    console.log("No2:- "+no2)
    let result = no1 * no2
    res.end("Multiplication:- "+result)
}
function div(req,res){
    let no1 = parseInt(req.body.no1)
    let no2 = parseInt(req.body.no2)
    console.log("No1:- "+no1)
    console.log("No2:- "+no2)
    let result = no1 / no2
    res.end("Division:- "+result)
}
module.exports.add=add
module.exports.sub=sub
module.exports.mul=mul
module.exports.div=div