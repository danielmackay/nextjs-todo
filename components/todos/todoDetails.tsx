import { Button, Paper, TextField, Typography } from "@mui/material";
import { useTodoItemDetails } from "../../services/swrService";
import Loading from "../loading";
import Notification from '../../components/notification';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Priority from "../priority";
import { useEffect, useState } from "react";
import { TodoItemDto, UpdateTodoItemCommand } from "../../apiClient/data-contracts";
import { TodoApi } from "../../services/apiService";
import { mutate } from "swr";
import { mutateTodoItemDetails } from '../../services/swrService';

interface ITodoDetailsProps {
  todoItemId: number;
}

const Invalid = () => <Typography variant='body2'>Invalid Todo Item.</Typography>

const label = { inputProps: { 'aria-label': 'Done' } };

const TodoDetails = (props: ITodoDetailsProps) => {
  const { todoItem, isLoading, isError } = useTodoItemDetails(props.todoItemId)
  const api = new TodoApi();

  const save = () => {
    if (!todoItem?.todoItemId)
      return;

    let cmd: UpdateTodoItemCommand = { ...todoItem };
    api.todoItems().todoItemsPartialUpdate(todoItem?.todoItemId, cmd).then(() => console.log('saved!'));
  }

  const updateTodoItem = (todoItem: TodoItemDto) => {
    mutateTodoItemDetails(todoItem.todoItemId!, todoItem)
  }

  if (isLoading)
    return <Loading />

  if (isError) {
    return (
      <>
        <Invalid />
        <Notification message="failed to load todo details" />
      </>
    )
  }

  return (
    <>
      {todoItem
        ?
        <Paper sx={{ p: 1, mb: 2 }}>
          <Checkbox id="done" {...label} sx={{ mb: 1 }} checked={todoItem.done || false} onChange={e => updateTodoItem({ ...todoItem, done: !todoItem.done })} />
          <Typography variant='body1' sx={{ display: "inline-block" }}>Done</Typography>
          <TextField id="title" label="Title" variant="outlined" fullWidth={true} sx={{ mb: 2 }} value={todoItem.title || ''} onChange={e => updateTodoItem({ ...todoItem, title: e.target.value })} />
          <TextField id="note" label="Note" variant="outlined" multiline rows={5} fullWidth={true} sx={{ mb: 2 }} value={todoItem.note || ''} onChange={e => updateTodoItem({ ...todoItem, note: e.target.value })} />
          <DatePicker className="mb-2" label="Due Date" value={todoItem.dueDate || ''} onChange={val => updateTodoItem({ ...todoItem, dueDate: val })} renderInput={(params) => <TextField value={todoItem.dueDate || ''} onChange={e => updateTodoItem({ ...todoItem, dueDate: e.target.value })} fullWidth={true} sx={{ mb: 2 }} {...params} />} />
          {todoItem.priority && <Priority priority={todoItem.priority} priorityUpdated={(p) => updateTodoItem({ ...todoItem, priority: p })} />}
        </Paper>
        : <Invalid />
      }
      <Button variant="contained" onClick={() => save()}>Save</Button>
    </>
  );
}

export default TodoDetails;