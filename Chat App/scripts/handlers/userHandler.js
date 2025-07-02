module.exports = (socket,io,userMap)=>{
    socket.on('saveuser', ({ username }) => {
        console.log(username, socket.id);
        userMap[socket.id] = username;
         let activeUsers = [];
        for(let i in userMap){
            activeUsers.push(userMap[i]);
        }  
        // socket.broadcast.emit('joinedChat' ,{
        //     username,
        //     activeUsers
        // })
         io.emit('joinedChat' ,{
            username,
            activeUsers
        })

    });
}