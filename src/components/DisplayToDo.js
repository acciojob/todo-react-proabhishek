
import React from "react";

const DisplayToDo = ({todoList,  setTodoList}) => {


  function deleteToDo(id){
      setTodoList(todoList.filter(todo => todo.id != id))
  }

 
    return(
        <div>
             <ul> 
                {
                     todoList.map(todo => (
                       <li key={todo.id}>
                         {todo.title} 
                         <button onClick={()=>deleteToDo(todo.id)}>Delete</button>
                      </li>
                     
                     ))
                }
             </ul>
        </div>
    )
}

export default DisplayToDo