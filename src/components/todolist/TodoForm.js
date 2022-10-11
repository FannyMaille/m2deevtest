import Button from "react-bootstrap/Button";
import { Form, FormControl, FormGroup} from "react-bootstrap";
import { nanoid } from "nanoid";

function TodoForm({ todo, setTodo, todoList, setTodoList }) {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { name: todo, id: nanoid() }]);
    setTodo("");
  };

  return (
    <div className="todoForm">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3 d-flex gap-3">
          <FormControl value={todo} onChange={handleChange} type="text" />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default TodoForm;
