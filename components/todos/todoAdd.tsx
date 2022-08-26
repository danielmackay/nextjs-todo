import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { TodoItem } from '../../models/todoItem';

interface TodoProps {
  onAddTodo: (added:TodoItem) => void
}

const TodoAdd = (props: TodoProps) => {
  const [todoText, setTodoText] = useState("");

  const onAdd = () =>{
    let todo:TodoItem = {
      id: 999,
      title: todoText, 
      isComplete: false,
    };

    props.onAddTodo(todo);
  }

  return (
    <form>
        <Grid container spacing={2} sx={{mb: 4}}>
          <Grid item sm={10} xs={12}>
            <TextField label="Add your todo" variant="standard" fullWidth={true} value={todoText} onChange={(e) => setTodoText(e.target.value)}></TextField>
          </Grid>
          <Grid item sm={2} xs={12}>
            <Button color="primary" variant="contained" fullWidth={true} sx={{mt: 2}} onClick={() => onAdd()}>Add</Button>
          </Grid>
        </Grid>
    </form>
  );
}

export default TodoAdd;