const express = require("express");
const path = require('path');
const router = express.Router();




const todoController = require('../controllers/todocontoller');

router.get('/gettodos' , todoController.getGetTodos);

router.post('/addtodo' , todoController.postAddTodo);

router.post('/deletetodo' , todoController.postDeleteTodo);


router.get("/increasepriority",todoController.getIncreasePriority);
router.get("/decreasepriority",todoController.getDecreasePriority);





module.exports = router;