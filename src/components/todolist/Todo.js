import TodoList from './TodoList';
import TodoForm from './TodoForm'
import { useState } from "react";

function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    return(
        <div className="container">
          <h1>To do list</h1>
            <TodoForm todo={todo} 
                setTodo={setTodo} 
                todoList={todoList} 
                setTodoList={setTodoList} />
            <TodoList setTodoList={setTodoList} todoList={todoList} />
        </div>
    )
}

export default Todo;