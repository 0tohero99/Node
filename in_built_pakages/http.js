var http =require("http")

//req => what we send to server
//res =>what we rreceive fro,m the server

http.createServer(function(req, res){
    //res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("hello everyone !")
    res.end()
})
.listen(5000)