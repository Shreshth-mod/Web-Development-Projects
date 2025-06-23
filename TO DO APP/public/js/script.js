const addtask = document.querySelector('#addTask');
const newtask = document.querySelector('#newTask');
const taskList = document.querySelector('.taskList');

function addToDom(todos){
    taskList.innerText = '';
    todos.forEach(element => {
        // create a element 
        let li = document.createElement('li');
        //update the li 
        // li.innerText = element.name;
        li.innerHTML= `
        <span class = "taskname"> ${element.name}</span>
        <button atrid = ${element.id} class = "upBtn">⬆</button>
        <button atrid = ${element.id} class = "downBtn">⬇</button>
        <button atrid = ${element.id} class = "delBtn">X</button>
        `
        // appending it to taskList
        taskList.appendChild(li);
    });
}
axios.get('/gettodos')
.then((res)=>{
    let todos = res.data;
    addToDom(todos);
})
.catch((err)=>{
    console.log(err);
})

addtask.addEventListener('click' , (e)=>{
    e.preventDefault();
    axios.post('/addtodo' ,{
        name : newtask.value,
    })
    .then((res)=>{
        let todos = res.data;
        newtask.value = '';
        console.log(todos) 
        addToDom(todos);
    })
    .catch((err)=>{
        console.log(err);
    })
})




axios.get('/gettodos')
    .then((todos)=>{
        console.log(todos);
    })
    .catch((err)=>{
        console.log(err);
    })

    function deletetodo(atrid){
          axios.post('/deletetodo' , {id :atrid})
       .then((res)=>{
        let todos =  res.data;
        console.log(todos);
        addToDom(todos);    
       })
       .catch((err)=>{
        console.log(err);
       })
    }

    taskList.addEventListener('click' , (e)=>{
        // console.log(e);
        // console.log(e.target);
        let atrid = e.target.getAttribute('atrid');
        let btnName = e.target.className;
        // console.log(atrid);
        // console.log(btnName);
      if(btnName == "delBtn"){
       deletetodo(atrid);
    }
    else if(btnName == "upBtn"){
      // increrase priority
      axios.get(`/increasepriority?id=${atrid}` , {
        id: atrid,
      })
      .then((res)=>{
        let todos = res.data;
        addToDom(todos);    
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else if (btnName == "downBtn"){
    // decrease priority
    axios.get(`/decreasepriority?id=${atrid}` , {
        id: atrid,
      })
      .then((res)=>{
        let todos = res.data;
        addToDom(todos);    
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    })