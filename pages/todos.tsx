import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import TodoAdd from '../components/todos/todoAdd'
import TodoClear from '../components/todos/todoClear'
import TodoList from '../components/todos/todoList'
import { Api } from '../services/apiService'

const Todos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant='h2'>Todo List</Typography>
      <TodoAdd />
      <TodoList />
      <TodoClear />
    </>
  )
}

export default Todos
