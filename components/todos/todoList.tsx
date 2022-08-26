import { Checkbox, IconButton, Paper, Typography } from "@mui/material";
import { GetTodos } from "../../services/todoService";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { TodoItem } from "../../models/todoItem";

const TodoList = () => {
  const [todos, setTodos] = useState(GetTodos())

  const onCompleteTodo = (updated: TodoItem) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === updated.id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        }
      }
      return todo
    })

    setTodos(updatedTodos);
  }

  const onDeleteTodo = (deleted: TodoItem) => {
    let updatedTodos = todos.filter(t => t.id !== deleted.id);
    setTodos(updatedTodos)
  }

  return (
    <>
      {todos.length == 0
        ? <Typography variant="body1" sx={{mt: 1}}>No Todos</Typography>
        : todos.map(todo =>
          <Paper key={todo.id} sx={{ p: 1, mt: 1, display: 'flex', flexGrow: 1, gap: 2 }}>
            <Checkbox sx={{ pt: 1 }} checked={todo.isComplete} onChange={() => onCompleteTodo(todo)}></Checkbox>
            <Typography sx={{ flexGrow: 1, pt: 1 }}>{todo.title}</Typography>
            <IconButton aria-label="delete" sx={{ color: 'error.main' }} onClick={() => onDeleteTodo(todo)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        )}
    </>
  )
}

export default TodoList;