import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { CreateTodoItemCommand, TodoItemDto, TodoItemsApi } from '../apiClient'
import TodoAdd from '../components/todos/todoAdd'
import TodoClear from '../components/todos/todoClear'
import TodoList from '../components/todos/todoList'
import { Api } from '../services/apiService'
import useSWR, { useSWRConfig } from 'swr'

const Todos: NextPage = () => {
  const [todos, setTodos] = useState<TodoItemDto[]>([]);
  const [message, setMessage] = useState('');
  const { mutate } = useSWRConfig()
  const api = new Api();

  const refreshTodos = () => {
    api.todoItems().apiTodoItemsGet()
      .then(res => {
        if (res.data.items)
          setTodos(res.data.items);
      });
  };

  const onCompleteTodo = (updated: TodoItemDto) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.todoItemId === updated.todoItemId) {
        return {
          ...todo,
          done: !todo.done,
        }
      }
      return todo
    })

    setTodos(updatedTodos);
  }

  const onDeleteTodo = (deleted: TodoItemDto) => {
    if (!deleted.todoItemId)
      return;

    api.todoItems().apiTodoItemsIdDelete(deleted.todoItemId).then(res => {
      refreshTodos();
    })
  }

  const onAddTodo = (title: string) => {
    let cmd: CreateTodoItemCommand = {
      title: title
    }
    api.todoItems().apiTodoItemsPost(cmd)
      .then(res => {
        refreshTodos();
      });
  }

  const onClearTodos = () => {
    let promises: Promise<any>[] = [];
    todos.forEach(t => {
      if (t.todoItemId) {
        let promise = api.todoItems().apiTodoItemsIdDelete(t.todoItemId);
        promises.push(promise);
      }
    });

    Promise.all(promises).then(() => refreshTodos());
  }

  return (
    <>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant='h2'>Todo List</Typography>
      <TodoAdd onAddTodo={onAddTodo}></TodoAdd>

      <TodoList onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} />
      {/* <TodoList onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} />
      <TodoList onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} /> */}

      <TodoClear onClearTodos={onClearTodos} />
    </>
  )
}

export default Todos
