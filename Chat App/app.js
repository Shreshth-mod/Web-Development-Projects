const path=require('path');
const express=require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");
const app=express();
const httpServer = createServer(app);
const PORT=4444;

app.set('view engine' , 'hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,'public')));


app.get('/', (req,res)=>{
    res.send( "Hello");
});
app.get('/chat', (req,res)=>{
    res.render('chat');
});


const io = new Server(httpServer, { /* options */ });



const onConnection = (socket) => {
   require('./scripts/chatApp/chatApp')(socket,io);
}
io.on("connection", onConnection);

httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/chat`);
});
