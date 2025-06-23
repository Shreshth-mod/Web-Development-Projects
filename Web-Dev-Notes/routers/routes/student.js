const express =  require('express');
const router = express.Router();


const student = [
    'mukund',
    'aditya',
    'sajal'
]

router.get('/' , (req,res,next)=>{
    res.send(student);
})

router.post('/add' , (req,res,next)=>{
    const {name} = req.body;
    student.push(name);
    res.redirect('/student');
})

module.exports = router;
