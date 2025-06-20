// const fs = require('fs');
// fs.writeFile()

const {writeFile} = require('fs');
let data = "It is going smooth";
writeFile(
    'Hello.txt',
    data,
    {
        encoding: 'utf8',
        flag: 'a'

    },
    (err)=>{
    if(err) return console.log("error" , err);
    // if (err) throw err;
    
    console.log("data written succesfully");
    }


)


// we can also write it using sync 
// to do it using sync we have to use try and catch block 


// try{
// fs.writeFileSync(
//    file name,
//    data,
// );
// }
// catch(err){
//     console.log(err);
// }

