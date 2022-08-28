import useSWR from "swr";
import { Api } from "./apiService";

export const useTodoItems = () => {
  const api = new Api();
  const fetcher = () => api.todoItems().apiTodoItemsGet().then(res => res.data)

  const { data, error } = useSWR('/api/todo-items', fetcher)

  return {
    todoItems: data?.items,
    isLoading: !error && !data,
    isError: error
  }
}