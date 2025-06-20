const {readFile} = require('fs')

readFile(
    "hello.txt",
    {
        encoding: 'utf-8',
    },
    (err, data)=>{
        if(err) console.log(err);
        // console.log(data.toString());
        console.log(data);
    }
)