const express = require('express');
const app = express();
const PORT = 8888;
const path = require('path');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));


let tasklist = [];

app.get('/' , (req,res)=>{
    res.render('index' , {
        tasklist 
    })
})

app.post('/addtask' , (req,res)=>{
    tasklist.push(req.body.task);
    res.redirect('/')  // to refresh the page to show the task 
})


app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log("Server started at http://localhost:8888");
});
