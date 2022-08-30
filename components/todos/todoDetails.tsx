import { Button, Paper, TextField, Typography } from "@mui/material";
import { useTodoItemDetails } from "../../services/swrService";
import Loading from "../loading";
import Notification from '../../components/notification';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Priority from "../priority";
import { useState } from "react";
import { UpdateTodoItemCommand } from "../../apiClient/data-contracts";
import { TodoApi } from "../../services/apiService";

interface ITodoDetailsProps {
  todoItemId: number;
}

const Invalid = () => <Typography variant='body2'>Invalid Todo Item.</Typography>

const label = { inputProps: { 'aria-label': 'Done' } };

const TodoDetails = (props: ITodoDetailsProps) => {
  const { todoItem, isLoading, isError } = useTodoItemDetails(props.todoItemId)
  const [done, setDone] = useState(todoItem?.done);
  const [title, setTitle] = useState(todoItem?.title);
  const [note, setNote] = useState(todoItem?.note);
  const [dueDate, setDueDate] = useState(todoItem?.dueDate);
  const [priority, setPriority] = useState(todoItem?.priority);

  const api = new TodoApi();


  const save = () => {
    if (!todoItem?.todoItemId)
      return;

    let cmd:UpdateTodoItemCommand = {
      done: done,
      title: title,
      note: note,
      dueDate: dueDate,
      priority: priority
    };

    api.todoItems().todoItemsPartialUpdate(todoItem?.todoItemId, cmd).then(() => console.log('saved!'));
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
          <Checkbox id="done" {...label} defaultChecked sx={{ mb: 1 }} value={done} onChange={e => setDone(!!e.target.value)} /><Typography variant='body1' sx={{ display: "inline-block" }}>Done</Typography>
          <TextField id="title" label="Title" variant="outlined" fullWidth={true} sx={{ mb: 2 }} value={title} onChange={e => setTitle(e.target.value)} />
          <TextField id="note" label="Note" variant="outlined" multiline rows={5} fullWidth={true} sx={{ mb: 2 }} value={note || ''} onChange={e => setNote(e.target.value)} />
          <DatePicker className="mb-2" label="Due Date" value={dueDate || ''} onChange={val => { setDueDate(val); }} renderInput={(params) => <TextField fullWidth={true} sx={{ mb: 2 }} {...params} />} />
          {priority && <Priority priority={priority} priorityUpdated={(p) => setPriority(p)} />}
        </Paper>
        : <Invalid />
      }
      <Button variant="contained" onClick={() => save()}>Save</Button>
    </>
  );
}

export default TodoDetails;