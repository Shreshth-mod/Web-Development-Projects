const { v4: uuidv4 } = require('uuid');
const { getDB } = require('../database/database');
const Todo = require("../models/todo")


module.exports.getGetTodos =async (req,res,next)=>{
    try{
      let data =   await Todo.getTodos();
      console.log('Todos requested are: ' , data);
      res.send(data); 
    }
    catch(err){
        next(err);
    }
}
//


module.exports.postAddTodo =  (req,res)=>{
    const {name} = req.body;
    Todo.addTodo(name)
    .then((msg)=>{
        console.log(msg)
        res.redirect('/gettodos')
    })
    .catch(()=>{
        res.send("Could not add todo" + err.message);
    })
}

// module.exports.postAddTodo =  (req,res)=>{
//     const {name} = req.body;
//     todos.push({
//         id: uuidv4(),
//         name
//     })
//     res.redirect('/gettodos');
// }



module.exports.postDeleteTodo = (req,res)=>{
   const {id} = req.body;
   Todo.deleteTodo(id)
    .then((msg)=>{
        console.log(msg)
        res.redirect('/gettodos')
    })
    .catch(()=>{
        res.send("Could not delete todo" + err.message);
    })
}
// module.exports.postDeleteTodo = (req,res)=>{
//   const{id} = req.body;
//    todos = todos.filter((task)=>{
//     if(task.id == id) return false;
//     return true ;
//   })
//   res.redirect("/gettodos")
// }

module.exports.getIncreasePriority = (req,res)=>{
    const {id} = req.query;
    Todo.increasePriority(id)
    .then(()=>{
        res.redirect('/gettodos');
    })
    .catch((err)=>{
        res.send("Could not increase priority" + err.message);

      })
}
  
// module.exports.getIncreasePriority = (req,res)=>{
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
// }
module.exports.getDecreasePriority =  (req,res)=>{
    const {id} = req.query;
   Todo.decreasePriority(id)
   .then(()=>{
        res.redirect('/gettodos');
    })
    .catch((err)=>{
        res.send("Could not decrease priority" + err.message);

      })
    
}

// module.exports.getDecreasePriority =  (req,res)=>{
//     const{id} = req.query;
//     console.log(id);
//     let indx;
    // todos.forEach((e,i)=>{
    //     if(e.id == id){
    //         indx= i;
    //     }
    // })
    // console.log(indx);
    // let temp = todos[indx];
    //  todos[indx] = todos[indx+1];
    //  todos[indx+1] = temp;
//     res.redirect('/gettodos');
// }
