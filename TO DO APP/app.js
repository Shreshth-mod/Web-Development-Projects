const express = require("express");
const app = express();
const port = 4444;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended: true}));
app.use(express.json()); // otherwise axios request could not be read
app.use(express.static(path.join(__dirname , 'public')));

// let todos = [];

const requestHandler = require('./routes/todo')
app.use('/' , requestHandler);
// app.get('/gettodos' , (req,res,next)=>{
//   res.send(todos);
// })

// app.post('/addtodo' , (req,res)=>{
//     const {name} = req.body;
//     todos.push({
//         id: uuidv4(),
//         name
//     })
//     res.redirect('/gettodos');
// })

// app.post('/deletetodo' , (req,res)=>{
//   const{id} = req.body;
//    todos = todos.filter((task)=>{
//     if(task.id == id) return false;
//     return true ;
//   })
//   res.redirect("/gettodos")
// })
// app.get("/increasepriority" , (req,res)=>{
//     const{id} = req.query;
//     console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx= i;
//         }
//     })
//     console.log(indx);
//     let temp = todos[indx];
//      todos[indx] = todos[indx-1];
//      todos[indx-1] = temp;
//     res.redirect('/gettodos');
// })

// app.get("/decreasepriority" , (req,res)=>{
//     const{id} = req.query;
//     console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx= i;
//         }
//     })
//     console.log(indx);
//     let temp = todos[indx];
//      todos[indx] = todos[indx+1];
//      todos[indx+1] = temp;
//     res.redirect('/gettodos');
// })



app.listen(port , ()=>{
    console.log("Server running at http://localhost:4444")
})