import Button from 'react-bootstrap/Button';

const itemStyle = {
    backgroundColor: "#dddddd",
    borderRadius: "15px",
    padding: "0.7em",
    marginTop: '10px',
}
const itemBtnStyle = {
    fontSize:"12px",
}
const itemNameStyle = {
    textAlign: "center",
    fontSize: '22px',
    color: "black",
}

function TodoListItem({todoItem, todoList, setTodoList}) {

    const deleteTodoItem = () =>{
        setTodoList(todoList.filter(item =>item.id !== todoItem.id));
    };

    return(
        <div style={itemStyle} className="listItem">
            <h5 style={itemNameStyle}>{todoItem.name}</h5>
            <Button onClick={deleteTodoItem} style={itemBtnStyle} variant="danger">Done</Button>
        </div>
    )
}

export default TodoListItem;