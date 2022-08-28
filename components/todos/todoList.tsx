import { Checkbox, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoItemDto } from "../../apiClient";
import { useTodoItems } from "../../services/swrService";
import Notification from '../../components/notification'

interface TodoListProps {
  onCompleteTodo: (todo: TodoItemDto) => void
  onDeleteTodo: (todo: TodoItemDto) => void
}

const NoTodoItems = () => <Typography variant="body1" sx={{ mt: 1 }}>No Todos</Typography>;

//const Loading = () => <Typography variant="body1" sx={{ mt: 1 }}>Loading...</Typography>;

const Loading = () => <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

const TodoList = (props: TodoListProps) => {
  const { todoItems, isLoading, isError } = useTodoItems()

  if (isError) {
    return (
      <>
        <NoTodoItems />
        <Notification message="failed to load todo items" />
      </>
    )
  }

  if (isLoading)
    return <Loading />

  return (
    <>
      {todoItems && todoItems.length === 0 && <NoTodoItems />}
      {todoItems && todoItems.length > 0 &&
        todoItems.map(todo =>
          <Paper key={todo.todoItemId} sx={{ p: 1, mt: 1, display: 'flex', flexGrow: 1, gap: 2 }}>
            <Checkbox sx={{ pt: 1 }} checked={todo.done} onChange={() => props.onCompleteTodo(todo)}></Checkbox>
            <Typography sx={{ flexGrow: 1, pt: 1 }}>{todo.title}</Typography>
            <IconButton aria-label="delete" sx={{ color: 'error.main' }} onClick={() => props.onDeleteTodo(todo)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        )}
    </>
  )
}

export default TodoList;