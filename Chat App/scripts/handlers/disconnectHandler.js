module.exports = (socket,io,userMap) =>{
     socket.on("disconnect", () => {
        let socketId = socket.id;
        let username = userMap[socket.id];
    console.log("User has disconnected" , username);
  
    if(username){
        delete userMap[socketId];
        let activeUsers = [];
        for(let i in userMap){
            activeUsers.push(userMap[i]);
        }
    socket.broadcast.emit('disconnectedUser', {
      username,
      activeUsers
   })}
    });

}