let todoForm=document.querySelector("#todoForm")
let todoInput=todoForm.elements["todo"]
let todoList=document.querySelector("#todoList")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault()
   
    let todoObj={todo:todoInput.value}
    todoInput.value=""
    console.log("obj",todoObj)
    fetch("/todo",{
        method:"POST",
        headers:{
            "Content-Type":"application/JSON",
            "Accept":"application/JSON"
        },
        body:JSON.stringify(todoObj)
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
       let elem=document.createElement("li")
       elem.id=data.id
       elem.innerHTML=data.item
       todoList.append(elem)
        
    })
    })

todoList.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
 
    fetch(`/todo/${e.target.id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/JSON",
            "Accept":"application/JSON"
        },
     }).then(res=>res.json())
    .then(data=>{
               e.target.remove()
        
    })
    
    }
})