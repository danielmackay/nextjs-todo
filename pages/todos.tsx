import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { TodoItemDto, TodoItemsApi } from '../apiClient'
import TodoAdd from '../components/todos/todoAdd'
import TodoClear from '../components/todos/todoClear'
import TodoList from '../components/todos/todoList'
import { Api } from '../services/apiService'

const Todos: NextPage = () => {
  const [todos, setTodos] = useState<TodoItemDto[]>([])

  useEffect(() => {
    let api = new Api();
    api.todoItems().apiTodoItemsGet().then(res => {
      if (res.data.items)
        setTodos(res.data.items);
    });
  }, []);

  const onCompleteTodo = (updated: TodoItemDto) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.todoItemId === updated.todoItemId) {
        return {
          ...todo,
          isComplete: !todo.done,
        }
      }
      return todo
    })

    setTodos(updatedTodos);
  }

  const onDeleteTodo = (deleted: TodoItemDto) => {
    let updatedTodos = todos.filter(t => t.todoItemId !== deleted.todoItemId);
    setTodos(updatedTodos)
  }

  const onAddTodo = (added: TodoItemDto) => {
    setTodos(state => [...state, added]);
  }

  const onClearTodos = () => {
    setTodos([]);
  }

  return (
    <>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant='h2'>Todo List</Typography>
      <TodoAdd onAddTodo={onAddTodo}></TodoAdd>
      <TodoList todos={todos} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} />
      <TodoClear onClearTodos={onClearTodos} />
    </>
  )
}

export default Todos
