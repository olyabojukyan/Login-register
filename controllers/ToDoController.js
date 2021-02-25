const { ToDo } = require("../models/toDoModel")

class ToDoController {
  async addNewToDo(req,res){
     
   let todo=req.body.todo
      let result=await ToDo.create({item:todo})
           res.json({id:result._id,item:result.item})
   }
   async getToDos(req,res){
      let todos=await ToDo.find()
      res.render("todo",{todos:todos})     
   }
   async deleteToDo(req,res){
       let id=req.params.id
       let result=await ToDo.deleteOne({_id:id})
       res.json({count:result.n})
  }
}
module.exports=new ToDoController()
