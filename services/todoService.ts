import { TodoItem } from "../models/todoItem"

let todos: TodoItem[];
todos = [
  {
    id: 1,
    title: 'item 1',
    isComplete: false,
    notes: 'some note'
  },
  {
    id: 2,
    title: 'item 2',
    isComplete: false,
    notes: 'some note'
  },
  {
    id: 3,
    title: 'item 3',
    isComplete: false,
    notes: 'some note'
  }
]

export const GetTodos = () => {
  return todos;
}