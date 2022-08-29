import { Checkbox, IconButton, Paper, Skeleton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { mutateTodoItems, useTodoItems } from "../../services/swrService";
import Notification from '../../components/notification';
import { TodoApi } from '../../services/apiService';
import { TodoItemDto } from "../../apiClient/data-contracts";

const NoTodoItems = () => <Typography variant="body1" sx={{ mt: 1 }}>No Todos</Typography>;

const Loading = () => <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

const TodoList = () => {
  const { todoItems, isLoading, isError } = useTodoItems()
  const api = new TodoApi();

  const onDeleteTodo = (deleted: TodoItemDto) => {
    if (!deleted || !deleted.todoItemId)
      return;

    api.todoItems().todoItemsDelete(deleted.todoItemId)
      .then(data => mutateTodoItems());
  }

  const onCompleteTodo = (updated: TodoItemDto) => {
    if (!updated?.todoItemId)
        return;

    api.todoItems().todoItemsUpdate(updated.todoItemId, { done: !updated.done })
      .then(data => mutateTodoItems());
  }

  const getTextDecoration = (todo:TodoItemDto) => todo.done ? 'line-through' : '';

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
            <Checkbox sx={{ pt: 1 }} checked={todo.done} onChange={() => onCompleteTodo(todo)}></Checkbox>
            <Typography sx={{ flexGrow: 1, pt: 1,  textDecoration: getTextDecoration(todo)}}>{todo.title}</Typography>
            <IconButton aria-label="delete" sx={{ color: 'error.main' }} onClick={() => onDeleteTodo(todo)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        )}
    </>
  )
}

export default TodoList;