function viewOrders(req,res){
    res.end("ViewOrders")
}
function viewOrderbyId(req,res){
    res.end("viewOrderById")
}
module.exports.viewOrders=viewOrders
module.exports.viewOrderbyId=viewOrderbyId