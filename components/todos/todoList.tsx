import { Checkbox, IconButton, Paper, Typography } from "@mui/material";
import { GetTodos } from "../../services/todoService";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { TodoItem } from "../../models/todoItem";

const TodoList = () => {
  const [todos, setTodos] = useState(GetTodos())

  const onCompleteTodo = (updated: TodoItem) => {
    let todo = todos.find(t => t.id === updated.id);
    if (todo) {
      todo.isComplete = !updated.isComplete;
    }

    setTodos(todos);
  }

  return (
    <>
      {todos.map(todo =>
        <Paper key={todo.id} sx={{ p: 1, mt: 1, display: 'flex', flexGrow: 1, gap: 2 }}>
          <Checkbox sx={{ pt: 1 }} checked={todo.isComplete} onChange={() => onCompleteTodo(todo)}></Checkbox>
          <Typography sx={{ flexGrow: 1, pt: 1 }}>{todo.title}</Typography>
          <IconButton aria-label="delete" sx={{color: 'error.main'}}>
            <DeleteIcon />
          </IconButton>
        </Paper>
      )}
    </>
  )
}

export default TodoList;