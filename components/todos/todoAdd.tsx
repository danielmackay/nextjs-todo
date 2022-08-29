import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { mutateTodoItems } from '../../services/swrService';
import { TodoApi } from '../../services/apiService';
import { CreateTodoItemCommand } from '../../apiClient/data-contracts';

const TodoAdd = () => {
  const [todoText, setTodoText] = useState("");
  const api = new TodoApi();

  const onAddTodo = () => {
    let cmd: CreateTodoItemCommand = {
      title: todoText
    }

    api.todoItems().todoItemsCreate(cmd)
      .then(data => {
        setTodoText("");
        mutateTodoItems();
      });
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onAddTodo();
    }
  }

  return (
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item sm={10} xs={12}>
          <TextField label="Add your todo" variant="standard" fullWidth={true} value={todoText} onChange={(e) => setTodoText(e.target.value)} onKeyDown={(e) => onKeyDown(e)}></TextField>
        </Grid>
        <Grid item sm={2} xs={12}>
          <Button color="primary" variant="contained" fullWidth={true} sx={{ mt: 2 }} onClick={() => onAddTodo()} disabled={!todoText}>Add</Button>
        </Grid>
      </Grid>
  );
}

export default TodoAdd;