import useSWR, { mutate, useSWRConfig } from "swr";
import { TodoApi } from "./apiService";

const todoApiUrl: string = '/api/todo-items';
const api = new TodoApi();
//const { mutate } = useSWRConfig()

export const useTodoItems = () => {
  const fetcher = () => api.todoItems().todoItemsList().then(data => data);

  const { data, error } = useSWR(todoApiUrl, fetcher)

  return {
    todoItems: data?.items,
    isLoading: !error && !data,
    isError: error
  }
}

export const mutateTodoItems = () => {
  mutate(todoApiUrl);
}