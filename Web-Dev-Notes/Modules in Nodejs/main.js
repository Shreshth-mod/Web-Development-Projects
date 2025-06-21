// to render in browser 

{/* <script src = 'lib.js'></script> */}
{/* <script src = 'main.js'></script> */}

// or simply use difer and call main.js above than lib.js

// module.export // to export some function from one file to another 

// usnig global will pollute the globa scope so not prefer to use it 


 const lib = require('./lib');
console.log(lib.add(10,20)); 
console.log(lib.sub(10,20));    

// when we require a file then the whole file will be executed  

