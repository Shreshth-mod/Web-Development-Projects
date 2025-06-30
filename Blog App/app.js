const path=require('path');
const express=require('express');
const mongoose=require('mongoose');
const Blogs = require('./models/blogs');
const app=express();
const PORT=4444;
const routeHandler=require('./routes/blogsRoute');

var hbs = require('hbs');

hbs.registerPartials(path.join(__dirname , 'views/partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');
app.use('/',routeHandler);

app.use(express.json());



mongoose.connect('mongodb://127.0.0.1:27017/myblog')
.then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/blogs`);
})
})
.catch((err)=>{
    console.error('Database connection Mongoose could not connect:', err);
});