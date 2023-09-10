http=require("http")
http.createServer(function(req,res){
    console.log("server works... requesting ...."+req.url);
    let url = req.url
    if(url== "/welcome"){
        res.end("welcome")
    }
    else if(url== "/logout"){
        res.end("logout")
    }
    else{
        res.end("hi");
    }
}).listen(9999);