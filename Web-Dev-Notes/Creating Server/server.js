const http = require("http");
const port = 8080;
const fs = require('fs');

// function fileHandler(req,res)=>{

// }

const server = http.createServer((req,res)=>{
        // console.log(req.url);
        res.writeHead(200,  {
            "Content-type" : 'text/html' //This sets the HTTP response header to let the browser know the returned content is of type HTML
        })
        if(req.url == '/') file = 'index.html';
        else if(req.url == '/profile') file = 'profile.html'
        else file = 'signIn.html'

        fs.readFile(file, (err,data)=>{
            if(err) throw err;
           res.end(data); //res.end(data) is the command that actually sends the response back to the browser and ends the response.
        })  
        // fs.readFile("./index.html" , (err,data)=>{
        //     if(err) throw err;
        //    res.end(data);
        // })  
        // res.end("<h1 style = 'color:orange'>Here is your requested data</h1>");
});

// most important thing of a server  is to listen 
// this is a error first callback in listen 
server.listen(port , (err)=>{
   if(err) {
    console.log(err);
   }
   console.log("server started at" , port);
})

// in above code we have just made the server and also uses listen but we are not
// giving any respond to send thats why there is no wewbpage opening on localhost:8080

