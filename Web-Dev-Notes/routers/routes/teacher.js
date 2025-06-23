const express =  require('express');
const router = express.Router();


const teacher = [
    'sourabh',
    'raghav',
    'bhavya'
]

router.get('/' , (req,res,next)=>{
    res.send(teacher);
})

router.post('/add' , (req,res,next)=>{
    const {name} = req.body;
    teacher.push(name);
    res.redirect('/teacher');
})

module.exports = router;
