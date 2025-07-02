let userMap = {};

module.exports = (socket,io) =>{
     console.log('Connection requested by client', socket.id);

    socket.emit('Welcome', {
        msg: "Welcome to my fantastic app"
    });

    const userHandler = require('../handlers/userHandler')
    userHandler(socket,io,userMap);

   const disconnetHandler = require('../handlers/disconnectHandler');
   disconnetHandler(socket,io,userMap);


  const chatHandler = require('../handlers/disconnectHandler');
   chatHandler(socket,io,userMap);
    
}