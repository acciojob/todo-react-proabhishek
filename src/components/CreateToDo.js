import React,{useState} from "react";




const CreateToDo = ({todoList, setTodoList}) => {
   const [todo,setTodo] = useState("")
   


   function handleSubmit(e){
    e.preventDefault() 
    let lastElement = todoList[todoList.length - 1]
    let lastId = lastElement? lastElement.id : 0
    let obj = {
      id: lastId+1, 
      title: todo
    }

    console.log(obj)

    setTodoList([...todoList, obj])

    setTodo("")

   }
    

  return(
    <div>
            <h1>To-Do List</h1>
           <form onSubmit={handleSubmit}>
               <input type="text" placeholder="Enter todo" 
                 value={todo}
                  onChange={(e) => setTodo(e.target.value)}
               />
                <button type="submit">Add Todo</button>
           </form>
    </div>
  )

    
}

export default CreateToDo