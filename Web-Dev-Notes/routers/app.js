// routers act as a mini server , for handling the requests.
// Difference between "app" Object and "routers" Object is that we cannot listen on "routers".
// They help segregate of the incoming requests , so that as a developer we can easily understand the flow of our  program.     

const express = require("express");
const app = express();
const port = 4444;
const path = require('path');

app.use(express.urlencoded({extended:true}));

const teacherHandler = require('./routes/teacher')
app.use('/teacher' , teacherHandler);

const studentHandler = require('./routes/student')
app.use('/student' , studentHandler);

app.listen(port , ()=>{
    console.log("http://localhost:4444");
})