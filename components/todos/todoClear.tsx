import { Button } from "@mui/material";
import { useTodoItems, mutateTodoItems } from "../../services/swrService";
import { TodoApi } from "../../services/apiService";

const TodoClear = () => {
  const { todoItems } = useTodoItems()
  const api = new TodoApi();

  const onClearTodos = () => {
    if (!todoItems)
      return;

    let promises: Promise<any>[] = [];

    todoItems.forEach(t => {
      if (t.todoItemId) {
        let promise = api.todoItems().todoItemsDelete(t.todoItemId);
        promises.push(promise)
      }
    });

    Promise.all(promises).then(() => mutateTodoItems());
  }

  return (
    <>
      <Button color="error" variant="contained" onClick={() => onClearTodos()} sx={{ mt: 4 }}>Clear</Button>
    </>
  );
}

export default TodoClear;