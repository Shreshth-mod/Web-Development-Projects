const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const { Router } = require('express');
const filePath = path.join(__dirname , '..', 'data.json');

class todo{
    static getTodos(){
   return new Promise((resolve,reject)=>{
    fs.readFile(
        filePath,
        {
            encoding:'utf-8'
        },
        (err,data)=>{
            if (err) return reject( err);
            data = JSON.parse(data) ; // to convert it to javascript object
            resolve(data);
        }
    )

   })
 }
 
    static addTodo(name){
       return new Promise((resolve,reject)=>{
    fs.readFile(
        filePath,
        {
            encoding:'utf-8'
        },
        (err,data)=>{
            if (err) return reject( err);
            data = JSON.parse(data) ; 
            let newTask = {
                id: uuidv4(),
                name
            }
            data.unshift(newTask);
            fs.writeFile(
                filePath,
               JSON.stringify(data),
                (err)=>{
                    if(err) return reject(err)
                    resolve("Task added succesfully")
                }
            )
        }
    )

   })
}
static deleteTodo(id){
   return new Promise((resolve,reject)=>{
    fs.readFile(
        filePath,
        {
            encoding:'utf-8'
        },
        (err,data)=>{
            if(err) return reject(err);
            data = JSON.parse(data);
            let newData = data.filter(item=> item.id != id);
            fs.writeFile(
                filePath,
                JSON.stringify(newData),
                (err)=>{
                    if(err) return reject(err);
                    resolve("task deleted succesfully");
                }
            
            )
        }
    )
   })
}

static increasePrioirty(id) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            filePath,
            {
                encoding: 'utf-8'
            },
            (err, data) => {
                if (err) return reject(err);
                let todos = JSON.parse(data);
                let indx;
                todos.forEach((e, i) => {
                    if (e.id == id) {
                        indx = i;
                    }
                });
                console.log(indx);
                let temp = todos[indx];
                todos[indx] = todos[indx - 1];
                todos[indx - 1] = temp;
               fs.writeFile(
                filePath,
                JSON.stringify(todos),
                (err)=>{
                    if(err) return reject(err);
                    resolve("Priority changes");
                }
            
            )
            }
        );
    });
}
 static decreasePriority(id){
    return new Promise((resolve,reject)=>{
        fs.readFile(
            filePath,
            {
                encoding: 'utf-8'
            },
            (err, data) => {
                if (err) return reject(err);
                let todos = JSON.parse(data);
                let indx;
               todos.forEach((e,i)=>{
                if(e.id == id){
                  indx= i;
                  }
                  })
               console.log(indx);
               let temp = todos[indx];
               todos[indx] = todos[indx+1];
               todos[indx+1] = temp;
               fs.writeFile(
                filePath,
                JSON.stringify(todos),
                (err)=>{
                    if(err) return reject(err);
                    resolve("Priority changes");
                }
            
            )
            }
        )
    })
 }
}
module.exports = todo;