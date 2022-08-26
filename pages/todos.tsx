import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import TodoAdd from '../components/todos/todoAdd'
import TodoClear from '../components/todos/todoClear'
import TodoList from '../components/todos/todoList'
import { TodoItem } from '../models/todoItem'
import { GetTodos } from '../services/todoService'

const Todos: NextPage = () => {
  const [todos, setTodos] = useState(GetTodos())

  const onCompleteTodo = (updated: TodoItem) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === updated.id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        }
      }
      return todo
    })

    setTodos(updatedTodos);
  }

  const onDeleteTodo = (deleted: TodoItem) => {
    let updatedTodos = todos.filter(t => t.id !== deleted.id);
    setTodos(updatedTodos)
  }

  const onAddTodo = (added: TodoItem) => {
    setTodos(state => [...state, added]);
  }

  const onClearTodos = () =>{
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
