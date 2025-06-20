const express = require('express');
const app = express();
const PORT = 8888;
const path = require('path');



// app.use('/file' , express.static(path.join(__dirname , 'static')));  // rendering  whole static folder
app.use(express.urlencoded({extended : true})) // to see the body of the form


app.get('/' , (req,res)=>{
    console.log(req);
    res.send("Hello World");
})




// get function using params 
// app.get('/greet/:name' , (req,res)=>{
//     console.log(req);
//     res.send(`Hello!${req.params.name}`);
// })



// using query 
// app.get('/greet' , (req,res)=>{
//     console.log(req);
//     res.send(`Hello! Good${req.query.x}${req.query.name}`);
// })


// we have to send absolute path so we use dirname
// sending some file 
// we dont have to re start the server for this because the route is same so index.html will go again 
app.get('/file' , (req,res)=>{
    res.sendFile(path.join( __dirname + '/index.html')); // it will join the  path and we dont have to take care of the / 
})

// app.get('/server.js' , (req,res)=>{
//     res.send(`console.log(This is your requested java file)`);
// })



// responding using form 
app.get('/file/greet' , (req,res)=>{
    res.send(`Hello GoodMorning, ${req.query.name}`);
})
    
app.post('/file/greet' , (req,res)=>{
    res.send(`Hello Goodday, ${req.body.name}`);
})


app.listen(PORT,(err)=>{
    console.log(`app started at http://localhost:${PORT}`);
})