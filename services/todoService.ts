//import { TodoItem } from "../models/todoItem"

import { TodoItemDto } from "../apiClient";

let todos: TodoItemDto[];
todos = [
  {
    todoItemId: 1,
    title: 'item 1',
    done: false,
    note: 'some note'
  },
  {
    todoItemId: 2,
    title: 'item 2',
    done: false,
    notes: 'some note'
  },
  {
    todoItemId: 3,
    title: 'item 3',
    done: false,
    note: 'some note'
  }
]

export const GetTodos = () => {
  return todos;
}