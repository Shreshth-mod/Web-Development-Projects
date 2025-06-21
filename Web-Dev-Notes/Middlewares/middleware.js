const express = require('express');
const app = express();


// middlerwares are certain function that we run for certain req that would come 
// the function we call for request are called midddleware

function m1(req,res,next){
    console.log(" pre running m1");
     next();
    console.log(' post Running m1');
    // console.log(req.query);
    // if(req.query ==1){
    //   return res.send("Hello WWorld");  // we need to ensure that we should never send more than one  respone 
    // }
 
}

function m2(req,res,next){
    console.log("pre Running m2");
    next();
    console.log(' post Running m2');

}

function m3(req,res,next){
    console.log("pre Running m3")
    next();
    console.log(' post Running m3');

}
 // these are global middlewares so any req that will come they will gonna be call
    
// app.use(m1);
// app.use(m2);
// app.use(m3);
// app.use(express.urlencoded({extended : true})) // middleware for post request 


app.get('/' ,  m1,m2,m3,(req, res)=>{
    console.log("pre sending response");
    res.send("Learning Middleware");
    console.log("post  sending response");
})


app.listen(8888, ()=>{
    console.log("Server started at http://localhost:8888");

})