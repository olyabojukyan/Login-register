const express = require('express');
const router = express.Router();
const { getToDos, addNewToDo, deleteToDo }=require("../controllers/ToDoController.js")

/* GET home page. */
router.get('/', getToDos);
/* Add todo. */

router.post('/', addNewToDo);

/* Add todo. */
router.delete('/:id', deleteToDo);

module.exports = router;