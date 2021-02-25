const express = require('express');
const router = express.Router();
const { getToDos, addnewToDo, deleteToDo }=require("../controllers/ToDoController.js")

/* GET home page. */
router.get('/', getToDos);
/* Add todo. */

router.post('/', addnewToDo);

/* Add todo. */
router.delete('/:id', deleteToDo);

module.exports = router;