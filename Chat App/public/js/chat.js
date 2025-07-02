const socket = io();

const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const chatbox = document.querySelector("#chatbox");
const chattingApp = document.querySelector('.chattingApp')
const userDetails = document.querySelector('.userDetails')
const username = document.querySelector('#username')
const msgList = document.querySelector(".msgList");
const activePeopleList = document.querySelector(".activePeopleList")

btn1.addEventListener('click',(ev)=>{
    console.log(username.value, socket.id);
    socket.emit('saveuser',{
        username: username.value
    })
    userDetails.classList.add('hide');
    chattingApp.classList.remove('hide');
    msgList.classList.remove('hide');

}) 


socket.on('msg', (msg)=>{
    let text = msg.text.msg;
    let senderName = msg.senderName;
    
    let li = document.createElement('li');
    li.innerText = `${senderName} : ${text}`;
    msgList.appendChild(li);

})

btn.addEventListener('click',  (ev)=>{
    socket.emit('chat' ,{
        msg : chatbox.value
    },(res)=>{
     console.log(res.status);
    })  
    chatbox.value = '';
})

function updateActiveUsers(activeUsers){
   // activePeopleList
   activePeopleList.innerHTML = ''
   activeUsers.forEach(element => {
    let item = document.createElement('div');
    item.innerText = element;
    activePeopleList.appendChild(item);
   });
}
socket.on('disconnectedUser', ({username , activeUsers})=>{
    console.log(`${username} has left the chat , current active users: ${activeUsers}`);
    updateActiveUsers(activeUsers);
})

socket.on('joinedChat', ({username, activeUsers})=>{
    console.log(`${username} has joined the chat , current active users: ${activeUsers}`)
    updateActiveUsers(activeUsers);
})

chattingApp.classList.add('hide');
msgList.classList.add('hide');
