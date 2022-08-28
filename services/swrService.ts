import useSWR, { mutate, useSWRConfig } from "swr";
import { Api } from "./apiService";

const todoApiUrl: string = '/api/todo-items';
const api = new Api();
//const { mutate } = useSWRConfig()

export const useTodoItems = () => {
  const fetcher = () => api.todoItems().apiTodoItemsGet().then(res => res.data)

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