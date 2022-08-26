import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { TodoItem } from '../../models/todoItem';

interface TodoProps {
  onAddTodo: (added: TodoItem) => void
}

const TodoAdd = (props: TodoProps) => {
  const [todoText, setTodoText] = useState("");

  const onAdd = () => {
    let todo: TodoItem = {
      id: 999,
      title: todoText,
      isComplete: false,
    };

    props.onAddTodo(todo);
    setTodoText("");
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onAdd();
    }
  }

  return (
    // <form>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item sm={10} xs={12}>
          <TextField label="Add your todo" variant="standard" fullWidth={true} value={todoText} onChange={(e) => setTodoText(e.target.value)} onKeyDown={(e) => onKeyDown(e)}></TextField>
        </Grid>
        <Grid item sm={2} xs={12}>
          <Button color="primary" variant="contained" fullWidth={true} sx={{ mt: 2 }} onClick={() => onAdd()} disabled={!todoText}>Add</Button>
        </Grid>
      </Grid>
    // </form>
  );
}

export default TodoAdd;