import React,{useState} from "react";
import './../styles/App.css';
import CreateToDo from "./CreateToDo"
import DisplayToDo from "./DisplayToDo"


const App = () => {
  const [todoList,setTodoList] = useState([])


    return(
      <div>

          <CreateToDo  setTodoList={setTodoList}
           todoList={todoList}
          />
          <DisplayToDo  todoList={todoList}
          setTodoList={setTodoList}
          />
      </div>
    )
}




export default App