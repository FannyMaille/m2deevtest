import TodoList from './TodoList';
import TodoForm from './TodoForm'
import { useState } from "react";

function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    return(
        <div className="container border border-secondary p-4">
          <h1 className='border-bottom mb-3 pb-3 border-secondary'>To do list</h1>
            <TodoForm todo={todo} 
                setTodo={setTodo} 
                todoList={todoList} 
                setTodoList={setTodoList} />
            <TodoList setTodoList={setTodoList} todoList={todoList} />
        </div>
    )
}

export default Todo;