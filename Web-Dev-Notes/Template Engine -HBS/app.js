const express = require('express');
const app = express();
const PORT = 8888;
const path = require('path')


// app.get('/' , (req,res)=>{
//     res.sendFile(path.join(__dirname , 'index.html'));
// })


// Set view engine
app.set('view engine', 'hbs');
// app.set('views','myhbsfolder')  if i change the name of the views than i have to setup the name of the folder to views
// we dont use this thing views is good 

app.get('/learnhbs', (req, res) => {
    res.render('index.hbs' ,{
        title: 'My Page',
    }); // 
});


app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log("Server started at http://localhost:8888");
});
