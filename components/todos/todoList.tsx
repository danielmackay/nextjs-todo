import { Checkbox, IconButton, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoItemDto } from "../../apiClient";
//import { TodoItem } from "../../models/todoItem";

interface TodoListProps {
  onCompleteTodo: (todo:TodoItemDto) => void
  onDeleteTodo: (todo:TodoItemDto) => void
  todos: TodoItemDto[];
}

const TodoList = (props: TodoListProps) => {
  return (
    <>
      {props.todos.length == 0
        ? <Typography variant="body1" sx={{ mt: 1 }}>No Todos</Typography>
        : props.todos.map(todo =>
          <Paper key={todo.todoItemId} sx={{ p: 1, mt: 1, display: 'flex', flexGrow: 1, gap: 2 }}>
            <Checkbox sx={{ pt: 1 }} checked={todo.done} onChange={() => props.onCompleteTodo(todo)}></Checkbox>
            <Typography sx={{ flexGrow: 1, pt: 1 }}>{todo.title}</Typography>
            <IconButton aria-label="delete" sx={{ color: 'error.main' }} onClick={() => props.onDeleteTodo(todo)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        )}
    </>
  )
}

export default TodoList;