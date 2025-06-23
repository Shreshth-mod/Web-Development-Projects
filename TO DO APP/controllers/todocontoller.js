const { v4: uuidv4 } = require('uuid');

// let todos = [];
let todo = require('../database/script/database');

module.exports.getGetTodos = (req,res,next)=>{
//   res.send(todos);
    todo.getTodos() 
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send("unable to fetch ")
    })
}   

module.exports.postAddTodo =  (req,res)=>{
    const {name} = req.body;
    todo.addTodo(name) 
    .then(()=>{
         res.redirect('/gettodos');
    })
    .catch((err)=>[
        res.send(`unable to add the todo ${err}`)
    ])
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
  const{id} = req.body;
   todo.deleteTodo(id)
   .then(()=>{
     res.redirect("/gettodos")
   })
    .catch((err)=>[
        res.send(`unable to delete a task , ${err}`)
    ])
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
    const{id} = req.query;
   todo.increasePrioirty(id)
   .then(()=>{
    res.redirect('/gettodos');
   })
    .catch((err)=>{
        res.send(`unable to change priority ${err}`)
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
    const{id} = req.query;
   todo.decreasePriority(id)
   .then(()=>{
    res.redirect('/gettodos');
   
   })
   .catch(err=>{
    res.send(`Unable to decrease priority ${err}`);
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
