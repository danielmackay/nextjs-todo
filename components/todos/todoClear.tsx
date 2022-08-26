import { Button } from "@mui/material";

interface TodoClearProps{
  onClearTodos: () => void
}

const TodoClear = (props: TodoClearProps) => {
  return (
    <>
      <Button color="error" variant="contained" onClick={() => props.onClearTodos()} sx={{mt: 4}}>Clear</Button>
    </>
  );
}

export default TodoClear;