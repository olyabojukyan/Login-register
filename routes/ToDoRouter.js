const express = require('express');
const router = express.Router();
const { getToDos, addnewToDo, deleteToDo }=require('../controllers/ToDoController');
const { checkSign } = require('../middlewares/checkSign');

/* GET home page. */
router.get('/', checkSign, getToDos);
/* Add todo. */

router.post('/', addnewToDo);

/* Add todo. */
router.delete('/:id', deleteToDo);

module.exports = router;