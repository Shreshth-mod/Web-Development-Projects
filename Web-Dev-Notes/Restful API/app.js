// it is called as Representation State Transfer
// It is an architecture that is followed between client and server to comminuicate.
// it is also called as language to the internet.

// we want to perform crud operation between client and server.
// C - post request
// R - Get request
// U - Put request
// D - Delete Request 

// important status code
//  200 meansn  ok 
// 400 range code =    this means error on the client side
// 500 range code = This means erro on the serrver side

// if you send get request then we send it like 

// http://codingblocks.com/users
// http://codingblocks.com/users/1

// for post create operatioon 
// http://codingblocks.com/users

// for put / update operation
// http://codingblocks.com/users/20


// Delete operation:
// http://codingblocks.com/users/1

const path = require('path');
const express = require('express');
const app = express();
const port = 4444;
const methodOverride =  require('method-override');

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , 'public')));
app.use(methodOverride('_method'));
let students = [
    {id: 1, name: 'abc'},
    {id:2 , name: 'def'},
    {id:3 , name: 'nahi batara'}
]

// get request 
app.get('/students',(req,res,next)=>{
    res.status(200).send(students);
})

app.get('/students/:id',(req,res)=>{
    const {id} = req.params;
    let s = students.filter(s=> s.id == id);
    if(s.length ==0){
        res.status(400).send("Cannot found")
    }
    else{
    res.status(200).send(s);
    }
})









// update in restful api 
app.put('/students/:id' , (req,res,next)=>{
    const {id} = req.params;
    const {name} = req.body;

    students = students.map((s)=>{
        if(s.id ==id){
            return {id: s.id, name}
        }
        else return s;
    })
    res.status(200).send(students); 
})


// to delete 
app.delete('/students/:id' , (req,res,next)=>{
    const {id} = req.params;
    const {name} = req.body;

    students = students.filter((s)=>{
        if(s.id ==id){
            return true;
        }
        else return false;
    })
    res.status(200).send(students); 
})




app.listen(port, ()=>{
    console.log("Server started at http://localhost:4444");
})
