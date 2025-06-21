function add(a, b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

module.exports.add = add;
module.exports.sub = sub;

// console.log(module.exports);   


// avoid using global at any cost 
// beacuse it pollutes the global space /


// global.add = function add(a, b){
//     return a+b;
// }
