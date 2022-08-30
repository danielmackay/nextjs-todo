import { Paper, TextField, Typography } from "@mui/material";
import { useTodoItemDetails } from "../../services/swrService";
import Loading from "../loading";
import Notification from '../../components/notification';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Priority from "../priority";

interface ITodoDetailsProps {
  todoItemId: number;
}

const Invalid = () => <Typography variant='body2'>Invalid Todo Item.</Typography>

const label = { inputProps: { 'aria-label': 'Done' } };

const TodoDetails = (props: ITodoDetailsProps) => {
  const { todoItem, isLoading, isError } = useTodoItemDetails(props.todoItemId)

  const setValue = (value: any) => { }

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
        <Paper sx={{ p: 1 }}>
          <Checkbox disabled={true} {...label} defaultChecked sx={{ mb: 1 }} /><Typography variant='body1' sx={{ display: "inline-block" }}>Done</Typography>
          <TextField disabled={true} id="outlined-basic" label="Title" variant="outlined" fullWidth={true} sx={{ mb: 2 }} value={todoItem.title} />
          <TextField disabled={true} id="outlined-basic" label="Note" variant="outlined" multiline rows={5} fullWidth={true} sx={{ mb: 2 }} value={todoItem.note || ''} />
          <DatePicker disabled={true} className="mb-2" label="Due Date" value={todoItem.dueDate || ''} onChange={(newValue) => { setValue(newValue); }} renderInput={(params) => <TextField disabled={true} fullWidth={true} sx={{ mb: 2 }} {...params} />} />
          {todoItem.priority && <Priority priority={todoItem.priority} />}
        </Paper>
        : <Invalid />
      }
    </>
  );
}

export default TodoDetails;