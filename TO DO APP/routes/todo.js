const express = require("express");
const path = require('path');
const router = express.Router();
// const { v4: uuidv4 } = require('uuid');


// let todos = [];
const todoController = require('../controllers/todocontoller');

router.get('/gettodos' , todoController.getGetTodos);

router.post('/addtodo' , todoController.postAddTodo);
// router.post('/addtodo' , (req,res)=>{
//     const {name} = req.body;
//     todos.push({
//         id: uuidv4(),
//         name
//     })
//     res.redirect('/gettodos');
// })
router.post('/deletetodo' , todoController.postDeleteTodo);
// router.post('/deletetodo' , (req,res)=>{
//   const{id} = req.body;
//    todos = todos.filter((task)=>{
//     if(task.id == id) return false;
//     return true ;
//   })
//   res.redirect("/gettodos")
// })

router.get("/increasepriority",todoController.getIncreasePriority);
// router.get("/increasepriority" , (req,res)=>{
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

router.get("/decreasepriority",todoController.getDecreasePriority);
// router.get("/decreasepriority" , (req,res)=>{
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




module.exports = router;