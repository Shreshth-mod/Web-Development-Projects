const fs = require('fs');

// let file = fs.readFileSync("image.jpg" );
// console.log(file);

// let str = file.toString('base64');
// console.log(str);

// fs.writeFileSync("image2.txt" ,str);

str = fs.readFileSync("image2.txt" , {encoding:'utf-8'});
let buffer = Buffer.from(str , 'base64');
console.log(buffer);

fs.writeFileSync("image.jpg" , buffer);