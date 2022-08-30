import { Paper, TextField, Typography } from "@mui/material";
import { useTodoItemDetails } from "../../services/swrService";
import Loading from "../loading";
import Notification from '../../components/notification';
import Checkbox from '@mui/material/Checkbox';

interface ITodoDetailsProps {
  todoItemId: number;
}

const Invalid = () => <Typography variant='body2'>Invalid Todo Item.</Typography>

const label = { inputProps: { 'aria-label': 'Done' } };

const TodoDetails = (props: ITodoDetailsProps) => {
  const { todoItem, isLoading, isError } = useTodoItemDetails(props.todoItemId)

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
          <Checkbox {...label} defaultChecked sx={{ mb: 1 }} /><Typography variant='body1' sx={{ display: "inline-block" }}>Done</Typography>
          <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth={true} sx={{ mb: 2 }} value={todoItem.title} />
          <TextField id="outlined-basic" label="Note" variant="outlined" multiline rows={5} fullWidth={true} sx={{ mb: 2 }} value={todoItem.note} />
          <TextField id="outlined-basic" label="Due Date" variant="outlined" fullWidth={true} sx={{ mb: 2 }} value={todoItem.dueDate} />
          <TextField id="outlined-basic" label="Priority" variant="outlined" fullWidth={true} sx={{ mb: 0 }} value={todoItem.priority} />
        </Paper>
        : <Invalid />
      }
    </>
  );
}

export default TodoDetails;