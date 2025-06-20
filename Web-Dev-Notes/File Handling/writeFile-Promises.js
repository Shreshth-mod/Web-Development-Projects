const {writeFile} = require('fs/promises');

let data = " I am learning file handling using promises(async and await)";
// let write = writeFile(
//     "World.txt", 
//     data,
//     {
//         encoding:'utf8',
//     }
// )
// write.then(()=>{
//     console.log("file written succesfully");
// })
// .catch((err)=>{
//     console.log("error", err.messsage);
// }   )


// writing using async await 

async function writeData(data){
    console.log("Start writing the file")
    await writeFile(
        "World.txt",
        data,
        {
            encoding: 'utf8',
            flag: 'w',
        }
    )
    console.log("async await works well")

}
writeData(data);