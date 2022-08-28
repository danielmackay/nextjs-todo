import { TodoItemDto } from "../apiClient";

let todos: TodoItemDto[];
todos = [
  {
    todoItemId: 1,
    title: 'item 1',
    done: false,
  },
  {
    todoItemId: 2,
    title: 'item 2',
    done: false,
  },
  {
    todoItemId: 3,
    title: 'item 3',
    done: false,
  }
]

export const GetTodos = () => {
  return todos;
}