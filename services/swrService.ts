import useSWR, { mutate, useSWRConfig } from "swr";
import { TodoItemDto } from "../apiClient/data-contracts";
import { TodoApi } from "./apiService";

const todoApiUrl: string = '/api/todo-items';
const todoApiDetailsUrl = (todoItemId:number) => `/api/todo-items/${todoItemId}`;
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

export const useTodoItemDetails = (todoItemId: number) => {
  const fetcher = () => api.todoItems().todoItemsDetail(todoItemId).then(data => data);

  const { data, error } = useSWR(todoApiDetailsUrl(todoItemId), fetcher)

  return {
    todoItem: data,
    isLoading: !error && !data,
    isError: error
  }
}

// export const mutateTodoItemDetails = (todoItemId: number) => {
//   todoApiDetailsUrl(todoItemId);
// }

export const mutateTodoItemDetails = (todoItemId: number, todoItem?: TodoItemDto) => {
  let url = todoApiDetailsUrl(todoItemId);
  
  if (todoItem)
    mutate(url, todoItem, false);
  else
    mutate(url); 
}