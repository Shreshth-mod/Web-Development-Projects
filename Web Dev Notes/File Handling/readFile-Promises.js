const {readFile} = require('fs/promises');

// let file = readFile("hello.txt", {encoding: 'utf-8'});

// file.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


async function readData(){
  let data =   await readFile( "Hello.txt", )
   console.log(data.toString());
}

readData();


// using readFileSync (simple try catch)


// try {
//   const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
