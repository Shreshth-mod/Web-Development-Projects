const lib2 = require('./lib2');

let a = 10;

function add(a,b){
   return a+b;
}

// module.exports = {
//     add,
//     a,
//     lib2
// }

// to have circular dependecy 
module.exports.lib2 = lib2;
module.exports.a = a;
module.exports.add = add;
    