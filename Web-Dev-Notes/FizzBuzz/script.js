let  n = parseInt(process.argv[2]);

// for(let i =1; i<=n ; i++){
//     let str = ''
//     if(i%15 ===0) str = 'fizzBuzz'
//     else if(i%5 === 0) str = 'buzz';
//     else if(i%3 ===0) str = 'fizz';

//     if(str == '') console.log(i);
//     else  console.log(str);
// }

for(let  i =0 ; i<=n ; i++){
    let str = ''
    if(i%3 ===0) {
        str += 'fizz'
    }
    if(i%5 ===0){
        str+= 'buzz'
    }
    
    if(str == '') console.log(i);
    else console.log(str);
}